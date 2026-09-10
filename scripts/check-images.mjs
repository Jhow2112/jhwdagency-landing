/* Fails the build if any image the site actually ships is broken or remote.
 *
 * Why this exists: three home-page images (the full-bleed hero and two service
 * cards) were hotlinked to a generated-asset CDN bucket. The bucket started
 * returning 403 and the images died on the live site. Nothing caught it — the
 * build succeeded, every test passed, and the hero failed silently because its
 * 85%-opacity scrim looks like a deliberate dark panel when the photo behind it
 * is missing. It was only visible by loading the page and looking at it.
 *
 * Two rules, both enforced here:
 *
 *   1. No remote images. An image on someone else's host can disappear at any
 *      time, without a deploy, and nothing in this repo would know. Every image
 *      must be committed under public/ so its availability is our problem.
 *   2. Every local image reference must resolve to a file that exists.
 *
 * This scans dist/ rather than src/ on purpose. dist/ is the ground truth of
 * what ships: it covers images built from data files, srcset URLs derived at
 * runtime by heroSrcSet(), and background-image url() in bundled CSS — none of
 * which a source scan can see without reimplementing the code that generates
 * them, which would then drift from it.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve, posix } from "node:path";

const DIST = resolve(process.argv[2] ?? "dist");

/* Remote URLs allowed in an image position. Analytics pixels are images by
   mechanism only — they carry no visual content, so a dead one breaks nothing
   on the page. Anything added here should be equally inconsequential. */
const ALLOWED_REMOTE = [
  /^https:\/\/www\.facebook\.com\/tr\?/, // Meta pixel — 1x1 tracking beacon
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/* Every place an image URL can hide in the output. srcset is comma-separated
   with optional "480w"/"2x" descriptors, so each candidate is split off its
   descriptor before being checked.
 *
 * url() is only ever read out of CSS — a whole stylesheet, a <style> block, or
 * a style="" attribute. Scanning raw HTML for it instead sweeps up JavaScript
 * in inline <script> tags, where Astro's client runtime calls `new URL(e,
 * document.baseURI)`; those matched as missing images named "e". */
function extractRefs(text, isCss) {
  const refs = [];
  const styleText = [];

  if (isCss) {
    styleText.push(text);
  } else {
    for (const m of text.matchAll(/<img\b[^>]*?\bsrc="([^"]+)"/gi)) {
      refs.push(m[1]);
    }
    for (const m of text.matchAll(/\bsrcset="([^"]+)"/gi)) {
      for (const candidate of m[1].split(",")) {
        const url = candidate.trim().split(/\s+/)[0];
        if (url) refs.push(url);
      }
    }
    for (const m of text.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
      styleText.push(m[1]);
    }
    for (const m of text.matchAll(/\bstyle="([^"]*)"/gi)) {
      styleText.push(m[1]);
    }
  }

  for (const css of styleText) {
    for (const m of css.matchAll(/\burl\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) {
      refs.push(m[1].trim());
    }
  }

  return refs;
}

if (!existsSync(DIST)) {
  console.error(`check-images: no build output at ${DIST} — run the build first.`);
  process.exit(1);
}

const errors = [];
let checked = 0;

for (const file of walk(DIST)) {
  const isCss = file.endsWith(".css");
  if (!isCss && !file.endsWith(".html")) continue;

  const rel = file.slice(DIST.length + 1);
  const text = readFileSync(file, "utf8");

  for (const ref of extractRefs(text, isCss)) {
    if (ref.startsWith("data:")) continue; // inlined, nothing to resolve

    if (/^(https?:)?\/\//i.test(ref)) {
      if (ALLOWED_REMOTE.some((re) => re.test(ref))) continue;
      checked++;
      errors.push(
        `${rel}\n    remote image: ${ref}\n` +
          `    Commit the file under public/ and reference it by path instead. ` +
          `A third-party host can revoke it without a deploy.`,
      );
      continue;
    }

    /* Root-relative paths resolve against dist/; anything else is relative to
       the page and is resolved from the file's own directory. */
    checked++;
    const target = ref.startsWith("/")
      ? join(DIST, ref)
      : join(file, "..", ref);

    if (!existsSync(target)) {
      errors.push(
        `${rel}\n    missing image: ${ref}\n` +
          `    No file at ${posix.normalize(target)}.`,
      );
    }
  }
}

if (errors.length) {
  console.error(`\ncheck-images: ${errors.length} broken image reference(s)\n`);
  for (const e of errors) console.error(`  ${e}\n`);
  process.exit(1);
}

console.log(`check-images: ${checked} image reference(s) OK — all local, all present.`);
