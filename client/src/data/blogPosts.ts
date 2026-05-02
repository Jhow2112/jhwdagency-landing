/* Blog post data — Aralo Studio
   Single source of truth for all blog posts.
   Used by:
     - App.tsx (Wouter routes)
     - entry-server.tsx (SSR rendering)
     - prerender.mjs (per-route meta tags + sitemap, via tsx)
     - BlogListPage.tsx, BlogTeaserSection.tsx (rendering)
   To add a new post: append to BLOG_POSTS below.
   Slug must NOT include the "/blog/" prefix or any trailing slash.
   Body is plain markdown — supports headings (## ###), bold (**),
   italic (*), inline links [text](url), unordered lists (-),
   blockquotes (>), and paragraphs. Rendered with `marked`. */

export type BlogPost = {
  /** URL slug, no slashes. Final path will be /blog/{slug}/ */
  slug: string;
  /** Post title — also used as <h1> and og:title */
  title: string;
  /** ISO date string, e.g. "2026-05-02". Drives sort order + dateline display. */
  date: string;
  /** Display-friendly category, shown as a tag. */
  category: string;
  /** Path to header image, served from /public. e.g. "/blog/blog-header-01.png" */
  headerImage: string;
  /** Optional alt text override. Defaults to the post title. */
  headerImageAlt?: string;
  /** Optional excerpt override (~150 chars). If absent, derived from body. */
  excerpt?: string;
  /** Markdown body — no leading h1, no metadata lines. */
  body: string;
};

const POST_1_BODY = `Short answer: yes. But not for the reasons most web designers will tell you.

The typical pitch goes something like this: "You need a website because everyone has one." That's lazy reasoning. Plenty of successful businesses in the Treasure Valley have operated for years without a website. Some of the best contractors in Boise have never touched a computer and they're booked solid through referrals.

So why bother?

## The real reason is trust verification

When someone hears about your business, whether from a friend, a yard sign, a truck wrap, or a Google search, the first thing they do is look you up. Not to browse your services page. Not to read your blog. They're checking that you're real.

They Google your business name. If they find a professional-looking website with your name, phone number, services, and maybe a photo or two, they call you. If they find nothing, or they find a half-finished Wix site from 2019, they move on to the next option. That decision happens in about 10 seconds.

This isn't speculation. Talk to any business owner in Boise who's asked a new customer "how did you find us?" and you'll hear some version of "my neighbor recommended you, so I Googled you to make sure you were legit."

## What about just using Facebook?

A lot of Boise businesses use their Facebook page as their website. It's free, it's easy to update, and most of their customers are on Facebook anyway.

The problem is that Facebook pages don't show up reliably in Google search results. When someone searches "plumber Boise Idaho," Google shows websites, Google Business Profiles, and map results. Facebook pages occasionally appear, but they're buried. You're invisible to anyone who searches instead of scrolling social media.

Facebook also controls your page. They can change the layout, limit your reach, or require you to pay for people to see your posts. Your website is yours.

## What about Google Business Profile alone?

A Google Business Profile is essential, and every local business should have one. But a GBP without a website is like a business card without a phone number. The profile gets people interested. The website closes the deal.

Google also favors businesses that have a website linked to their GBP. The website gives Google more information about what you do, where you serve, and why someone should choose you. That additional context helps you rank higher in local search results.

## What a small business website actually needs

Not much. The businesses that overthink this are the ones that never launch. Here's what matters:

Your business name and what you do, stated clearly. Your phone number and email, visible on every page. Your service area. A few photos of your work or your team. A way for someone to contact you.

That's it. You don't need a blog, an online store, an appointment scheduler, or animations. You need a clean, professional page that loads fast on a phone and tells people how to hire you.

## The cost question

A professional website for a small business in Boise doesn't need to cost $5,000 or take two months. That's agency pricing for agency-sized businesses. A solo plumber, a two-person cleaning crew, or a landscaper with a truck doesn't need an agency. They need a straightforward site that works, built fast, at a price that makes sense for their business.

At Aralo Studio, we build sites like this starting at $495, live in 5-10 business days, with hosting and maintenance included. But regardless of who builds it, the important thing is that it exists and that it looks professional enough to not lose you the customer who just Googled your name.

## The bottom line

You don't need a website because "everyone has one." You need a website because people are already searching for you. The question is what they find when they do.

If the answer is "nothing," you're handing customers to your competitors who bothered to put something up. In a market like Boise where word-of-mouth is king, your website isn't replacing referrals. It's the thing that converts referrals into calls.`;

const POST_2_BODY = `You search your own business on Google and you're nowhere. Then you search your competitor, the one who does the same work as you, maybe not even as well, and they're right there at the top. Map listing, website link, reviews, phone number. Ready to be called.

This isn't random. Google doesn't pick favorites. It follows a set of rules, and the businesses that show up are the ones that checked the boxes. Here's what they did that you probably haven't.

## They have a Google Business Profile that's actually filled out

Most businesses in the Treasure Valley have claimed their Google Business Profile. But claiming it and completing it are two different things. Your competitor probably filled out every field: business hours, service list, service area, photos, business description, and categories. Google treats a complete profile as more trustworthy than a bare one.

Check yours right now. Go to business.google.com and look at your profile. Is your service area set correctly? Do you have more than one or two photos? Have you selected the right primary and secondary categories? Is your phone number correct? These details matter more than most people realize.

## They have a real website

A real website, even a simple one, gives Google something to connect to your Business Profile. When Google sees a GBP listing linked to a website that mentions the same services, same phone number, and same location, it gains confidence that your business is legitimate and relevant.

If you don't have a website, or your website is a broken WordPress page from 2017, Google has less information to work with. Less information means less confidence. Less confidence means lower ranking.

## They have reviews (and they respond to them)

Reviews are one of the strongest ranking signals for local search. A business with 30 reviews and a 4.7 rating will almost always outrank a business with 3 reviews and a 5.0 rating. Volume matters more than perfection.

Your competitors are probably asking for reviews. After every job, they send a text or an email: "Thanks for choosing us. If you have a minute, a Google review would mean a lot." That's it. No gimmick, no incentive, just a simple ask.

And when someone leaves a review, they respond. Google notices this. A business that actively engages with reviews signals that it's alive, active, and cares about customer experience.

## Their website mentions what they do and where they do it

This is where a lot of businesses miss an easy win. Your competitor's website probably says something like "We provide residential plumbing services in Boise, Meridian, Nampa, and the surrounding Treasure Valley." That sentence does more work than you'd think.

When someone searches "plumber Meridian Idaho," Google scans websites for those exact words. If your website doesn't mention Meridian, you won't show up for that search. It's that simple.

This doesn't mean stuffing your site with keywords. It means clearly stating what you do and where you do it, in normal sentences, on your homepage and service pages.

## They're listed in more places than just Google

Google cross-references your business information across the internet. If your name, address, and phone number appear consistently on Yelp, the BBB, Apple Maps, Facebook, and industry directories, Google gains more confidence in your legitimacy.

Your competitor probably has listings on 5-10 of these platforms. You might only be on Google and Facebook. Each additional consistent listing is a small signal that adds up.

## What you can do about it this week

This isn't a six-month project. You can close a lot of the gap in a few hours:

Complete your Google Business Profile. Every field, every section. Add at least 5 photos. Write a real business description.

Ask your last 5 happy customers for a review. Send them the direct link to your Google review page. Most will do it if you make it easy.

Make sure your website mentions your services and your service area by name. If you don't have a website, that's the bigger problem to solve first.

Check your business info on Yelp, Facebook, and Apple Maps. Make sure the name, address, and phone number match exactly what's on your Google Business Profile.

None of this is complicated. Your competitors aren't doing anything clever. They're just doing the basics consistently, and that's enough to outrank a business that hasn't done them at all.`;

const POST_3_BODY = `You fix furnaces for a living. You're not thinking about websites. But here's what happens every day in the Treasure Valley: someone's heat goes out at 9pm, they grab their phone, search "HVAC repair near me," and they call the first company that looks professional and has a phone number they can tap.

If that's not you, it's someone else. And that someone else isn't necessarily better at HVAC work. They just have a better website.

## The 10-second test

When a homeowner lands on your website, they make a decision in about 10 seconds. They're not reading your company history. They're not comparing service packages. They're answering three questions:

Does this company do what I need? Are they in my area? Can I call them right now?

If your website answers all three within 10 seconds, they call. If it doesn't, they hit the back button and try the next result. That's the entire game.

## What actually needs to be on the page

**Your phone number, tappable, at the top of every page.** This is the most important element on your website. Not your logo. Not your tagline. Your phone number. It should be visible without scrolling, and on mobile it should be a tap-to-call link. A homeowner with no heat at 9pm is not going to hunt through your site for a contact page.

**What you do, stated plainly.** "Residential and commercial HVAC repair, installation, and maintenance in the Treasure Valley." That sentence tells Google and the customer everything they need to know. Don't bury your services in vague language like "comprehensive climate solutions." Nobody searches for that.

**Your service area.** List the cities you serve. Boise, Meridian, Nampa, Eagle, Caldwell, Star, Kuna. Each city name on your site is a search term Google can match. If you don't mention Nampa on your website, you won't show up when someone in Nampa searches for HVAC help.

**A few photos of your team or your work.** Not stock photos. Real photos of your trucks, your technicians, your completed installations. A customer choosing between two HVAC companies will pick the one that looks like real people over the one using generic stock images of models in hard hats.

**Your hours and availability.** Do you offer 24/7 emergency service? Say so, prominently. That's a major differentiator and it's the reason someone picks you over the company that's "open Monday through Friday 8-5."

**Reviews or testimonials.** Even 2-3 short quotes from real customers make a difference. "Called at 10pm, they were here by 11. Fixed our furnace the same night." That kind of testimonial does more selling than any copy you could write.

## What you don't need

**A blog.** Unless you're going to consistently write and post (which you're not, because you're running an HVAC business), an empty blog section with one post from 2022 looks worse than no blog at all.

**An "About Us" page with your company history.** Nobody looking for emergency HVAC repair cares that you founded the company in 2008 because of your passion for heating and cooling. Save the story for in-person conversations.

**Animations, sliders, or video backgrounds.** These slow your site down. On mobile, slow sites lose customers. A homeowner searching on their phone with a broken furnace will not wait 4 seconds for your hero video to load.

**A complex service menu with 15 subcategories.** Keep it simple: repair, installation, maintenance. Maybe add "commercial" if you do commercial work. That's enough for a website. You can explain the details on the phone.

## The mobile factor

Over 70% of local searches happen on phones. Your website has to work perfectly on mobile. That means:

Text is readable without zooming. Buttons are big enough to tap with a thumb. Your phone number is a clickable link. The page loads in under 3 seconds. Nothing breaks or overlaps on a small screen.

Pull out your phone right now and load your own website. If anything is hard to read, slow to load, or requires pinching and zooming, you're losing calls.

## What it costs

A professional HVAC website doesn't need to be expensive. You're not building an e-commerce platform. You need a clean, fast site with your info, your services, your service area, and your phone number. That's a 3-5 page site that should cost somewhere in the $500-$1,500 range to build, with hosting running $30-$100 per month.

Compare that to the value of even one HVAC job. A furnace installation is $3,000-$8,000. A single customer you would have lost to a competitor with a better website pays for the entire site several times over.

## The bottom line

Your HVAC website has one job: make the phone ring. Everything on the page should serve that goal. Big phone number, clear services, service area listed, fast load time, works on mobile. If your current site doesn't do these things, it's costing you money every week.

The companies at the top of Google in your market aren't there because they're better at HVAC work. They're there because their online presence does the basics right. The good news is that the basics aren't hard or expensive. They just need to get done.`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "does-your-boise-business-need-a-website",
    title: "Does Your Boise Small Business Actually Need a Website in 2026?",
    date: "2026-05-02",
    category: "Local Business",
    headerImage: "/blog/blog-header-01.png",
    headerImageAlt:
      "Downtown Boise storefronts at street level — small businesses that depend on local search.",
    body: POST_1_BODY,
  },
  {
    slug: "why-competitors-show-up-on-google",
    title:
      "Why Your Treasure Valley Competitors Are Showing Up on Google and You're Not",
    date: "2026-05-02",
    category: "Local SEO",
    headerImage: "/blog/blog-header-02.png",
    headerImageAlt:
      "A laptop showing Google Maps local search results for a Treasure Valley business.",
    body: POST_2_BODY,
  },
  {
    slug: "hvac-website-convert-calls",
    title: "What Every HVAC Company's Website Needs to Convert Calls",
    date: "2026-05-02",
    category: "Industry Guide",
    headerImage: "/blog/blog-header-03.png",
    headerImageAlt:
      "An HVAC technician working on an outdoor unit on a residential job site.",
    body: POST_3_BODY,
  },
];

/** Sorted newest-first by date. */
export const POSTS_BY_DATE: BlogPost[] = [...BLOG_POSTS].sort((a, b) =>
  b.date.localeCompare(a.date)
);

/** Find a post by slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Strip a small amount of markdown to produce a plain-text snippet. */
function stripMarkdown(md: string): string {
  return md
    .replace(/^#{1,6}\s+.*$/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/\[(.+?)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^>\s*/gm, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** ~150-char excerpt, derived from body unless explicitly provided. */
export function getExcerpt(post: BlogPost, max = 150): string {
  if (post.excerpt) return post.excerpt;
  const plain = stripMarkdown(post.body);
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + "…";
}

/** Display date, e.g. "May 2, 2026". */
export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
