// identity-system.jsx — Aralo Studio identity system
// Sections (in order):
//   1. Cover / brief
//   2. Logo construction (geometry, clearspace, do/don'ts)
//   3. Mark variants (proportions, weights, solid vs stroke)
//   4. Lockup casing trio (all-caps, title, lowercase) on one board
//   5. Identity system: type scale, color tokens, grid
//   6. Web header + landing hero
//   7. Print kit: business card, letterhead, invoice
// Locked palette: forest + terracotta. Locked direction: 03.

const { useState, useEffect } = React;

// ── 1. Cover ────────────────────────────────────────────────
function CoverArtboard() {
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta,
      }}>— Aralo Studio · Identity system · Direction 03</div>
      <div>
        <div style={{ marginBottom: 28 }}>
          <Lockup casing="upper" size={120} markStroke={3} markGap={6} />
        </div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 56, letterSpacing: '-0.02em', lineHeight: 1.05,
          maxWidth: 820, textWrap: 'balance',
        }}>Two letters. One studio. A system designed to compound over a decade.</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ fontSize: 13, color: ARALO.forestSoft, lineHeight: 1.6, maxWidth: 480 }}>
          The locked direction translates the A↔A symmetry of the name into a single
          repeatable mark — one ink, one terracotta. The pages that follow document the
          construction, the ratios, the type, and how the brand behaves on screen and on paper.
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: ARALO.forestMute,
        }}>v0.1 · 2026</div>
      </div>
    </div>
  );
}

// ── 2. Construction ────────────────────────────────────────
function ConstructionArtboard() {
  // Big mark with construction lines.
  const SCALE = 7; // 60×56 grid → 420×392 px
  const w = 60 * SCALE, h = 56 * SCALE;
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
    }}>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 18,
        }}>— 02 · Construction</div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 36, letterSpacing: '-0.02em', lineHeight: 1.1,
          marginBottom: 18, textWrap: 'balance',
        }}>The mark is built on a single 60 × 56 grid.</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.65, color: ARALO.forestSoft, marginBottom: 22 }}>
          Each triangle has a base of 36 units and a height of 44, set on a baseline at y=50.
          The two triangles overlap by 16 units in the source grid — the negative space at
          the meeting point is what reads as the "·" between the two A's.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['Cap height', 'Mark cap = wordmark cap (when set in Inter SemiBold).'],
            ['Stroke', '2.6 / 60 of mark width — scales with the mark itself.'],
            ['Gap', 'Default 4 source units. Tighten for monoline, widen for display.'],
            ['Color', 'Triangle 1 = primary ink. Triangle 2 = terracotta (always).'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, fontSize: 12, lineHeight: 1.55 }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                color: ARALO.forestMute, letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{k}</div>
              <div style={{ color: ARALO.forestSoft }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        background: ARALO.creamSurface,
        border: `1px solid ${ARALO.forestRule}`,
        borderRadius: 4,
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <svg width={w} height={h} viewBox="0 0 60 56" style={{ overflow: 'visible' }}>
          {/* grid */}
          <g stroke={ARALO.forestRule} strokeWidth="0.15">
            {[...Array(13)].map((_, i) => (
              <line key={'v' + i} x1={i * 5} x2={i * 5} y1="0" y2="56" />
            ))}
            {[...Array(12)].map((_, i) => (
              <line key={'h' + i} x1="0" x2="60" y1={i * 5} y2="56" />
            ))}
          </g>
          {/* baseline + peak guides */}
          <line x1="0" x2="60" y1="50" y2="50" stroke={ARALO.terracotta} strokeWidth="0.2" strokeDasharray="0.5 0.5" opacity="0.6" />
          <line x1="0" x2="60" y1="6" y2="6" stroke={ARALO.terracotta} strokeWidth="0.2" strokeDasharray="0.5 0.5" opacity="0.6" />
          {/* triangles */}
          <path d="M2 50 L20 6 L38 50 Z" stroke={ARALO.forest} strokeWidth="0.7" strokeLinejoin="round" fill="none" />
          <path d="M22 50 L40 6 L58 50 Z" stroke={ARALO.terracotta} strokeWidth="0.7" strokeLinejoin="round" fill="none" />
          {/* labels */}
          <g fontFamily="JetBrains Mono, monospace" fontSize="2" fill={ARALO.forestMute}>
            <text x="2" y="54.5">x: 2</text>
            <text x="34" y="54.5">x: 38</text>
            <text x="42" y="54.5">x: 22</text>
            <text x="55" y="54.5">x: 58</text>
            <text x="0" y="4.5">y: 6 · peak</text>
            <text x="46" y="49" >y: 50 · base</text>
          </g>
          {/* clearspace dotted box */}
          <rect x="-4" y="-4" width="68" height="64" stroke={ARALO.forestMute} strokeDasharray="0.6 0.6" strokeWidth="0.2" fill="none" />
        </svg>
        <div style={{
          position: 'absolute', bottom: 16, right: 18,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          color: ARALO.forestMute, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>60 × 56 grid</div>
      </div>
    </div>
  );
}

// ── 2b. Clearspace + do/don'ts ─────────────────────────────
function ClearspaceAndDontsArtboard() {
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'grid', gridTemplateRows: 'auto 1fr', gap: 28,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'start' }}>
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
          }}>— 03 · Clearspace</div>
          <div style={{
            fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
            fontWeight: 300, fontSize: 26, letterSpacing: '-0.02em', lineHeight: 1.15, textWrap: 'balance',
          }}>One triangle's width on every side. No exceptions.</div>
        </div>
        <div style={{
          background: ARALO.creamSurface, border: `1px solid ${ARALO.forestRule}`,
          borderRadius: 4, padding: '32px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', minHeight: 180,
        }}>
          {/* clearspace visualization */}
          <div style={{
            border: `1px dashed ${ARALO.forestMute}`,
            padding: 28, position: 'relative',
          }}>
            <Lockup casing="upper" size={48} markStroke={2.8} />
            <div style={{
              position: 'absolute', left: -28, top: '50%',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              color: ARALO.terracotta, transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center', letterSpacing: '0.1em',
            }}>x</div>
            <div style={{
              position: 'absolute', top: -22, left: '50%',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              color: ARALO.terracotta, transform: 'translateX(-50%)', letterSpacing: '0.1em',
            }}>x = ½ mark</div>
          </div>
        </div>
      </div>

      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
        }}>— Do / Don't</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          <DontTile state="do" label="Do · standard">
            <Lockup casing="upper" size={32} markStroke={2.6} />
          </DontTile>
          <DontTile state="dont" label="Don't · recolor accent">
            <Lockup casing="upper" size={32} markStroke={2.6} accent="#3a7a8a" />
          </DontTile>
          <DontTile state="dont" label="Don't · stretch">
            <div style={{ transform: 'scaleX(0.7)' }}>
              <Lockup casing="upper" size={32} markStroke={2.6} />
            </div>
          </DontTile>
          <DontTile state="dont" label="Don't · rotate">
            <div style={{ transform: 'rotate(-8deg)' }}>
              <Lockup casing="upper" size={32} markStroke={2.6} />
            </div>
          </DontTile>
          <DontTile state="dont" label="Don't · drop shadow">
            <div style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
              <Lockup casing="upper" size={32} markStroke={2.6} />
            </div>
          </DontTile>
          <DontTile state="dont" label="Don't · gradient">
            <div>
              <span style={{
                background: 'linear-gradient(90deg, #b85433, #e8b09a)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                color: 'transparent', fontFamily: 'Inter', fontWeight: 600, fontSize: 32, letterSpacing: '0.04em',
              }}>ARALO</span>
            </div>
          </DontTile>
          <DontTile state="dont" label="Don't · invert ink + accent">
            <Lockup casing="upper" size={32} markStroke={2.6} primary={ARALO.terracotta} accent={ARALO.forest} />
          </DontTile>
          <DontTile state="do" label="Do · reverse on deep">
            <div style={{
              background: ARALO.forest, padding: '16px 20px', borderRadius: 4, width: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Lockup casing="upper" size={28} markStroke={2.6}
                primary={ARALO.cream} accent={ARALO.terracotta}
                soft="rgba(243,239,230,0.72)" rule="rgba(243,239,230,0.16)" />
            </div>
          </DontTile>
        </div>
      </div>
    </div>
  );
}

function DontTile({ state, label, children }) {
  const ok = state === 'do';
  return (
    <div style={{
      background: ARALO.creamSurface,
      border: `1px solid ${ok ? ARALO.forestRule : 'rgba(184,84,51,0.25)'}`,
      borderRadius: 4,
      padding: 16,
      display: 'flex', flexDirection: 'column', gap: 12, minHeight: 160,
      justifyContent: 'space-between',
    }}>
      <div style={{
        height: 70,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>{children}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          width: 14, height: 14, borderRadius: 7,
          background: ok ? ARALO.forest : ARALO.terracotta,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: ARALO.cream, fontSize: 9, fontWeight: 700,
        }}>{ok ? '✓' : '×'}</span>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          letterSpacing: '0.06em', textTransform: 'uppercase', color: ARALO.forestSoft,
        }}>{label}</span>
      </div>
    </div>
  );
}

// ── 3. Mark variants ────────────────────────────────────────
function MarkVariantsArtboard() {
  const variants = [
    { label: 'Default · stroke 2.6', stroke: 2.6, gap: 4, fill: false },
    { label: 'Light · stroke 1.6', stroke: 1.6, gap: 4, fill: false },
    { label: 'Heavy · stroke 4.0', stroke: 4.0, gap: 4, fill: false },
    { label: 'Open · gap 10', stroke: 2.6, gap: 10, fill: false },
    { label: 'Tight · gap 0', stroke: 2.6, gap: 0, fill: false },
    { label: 'Solid fill', stroke: 0, gap: 4, fill: true },
  ];
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'flex', flexDirection: 'column', gap: 24,
    }}>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
        }}>— 04 · Mark variants</div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1.1,
          maxWidth: 720, textWrap: 'balance',
        }}>The mark holds at six tunings. Pick by surface, never to differentiate the brand.</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, flex: 1 }}>
        {variants.map((v, i) => (
          <div key={i} style={{
            background: ARALO.creamSurface,
            border: `1px solid ${ARALO.forestRule}`,
            borderRadius: 4,
            display: 'flex', flexDirection: 'column',
            padding: '24px 24px 18px',
            gap: 14,
            justifyContent: 'space-between',
          }}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AAMark size={120} stroke={v.stroke} fill={v.fill} gap={v.gap} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.06em', textTransform: 'uppercase', color: ARALO.forestSoft,
              }}>{v.label}</div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: ARALO.forestMute,
              }}>0{i + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 4. Lockup casing trio ───────────────────────────────────
function LockupTrioArtboard() {
  const lockups = [
    { casing: 'upper', label: 'All-caps · primary', use: 'Default. Use unless told otherwise.' },
    { casing: 'title', label: 'Title-case · editorial', use: 'Long-form pages, decks, signature blocks.' },
    { casing: 'lower', label: 'Lowercase · familiar', use: 'Conversational contexts: invoices, emails.' },
  ];
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'flex', flexDirection: 'column', gap: 28,
    }}>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
        }}>— 05 · Lockup variants</div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1.1, textWrap: 'balance',
        }}>Three casings, one mark. Choose by context, not by mood.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
        {lockups.map((l, i) => (
          <div key={l.casing} style={{
            background: ARALO.creamSurface,
            border: `1px solid ${ARALO.forestRule}`, borderRadius: 4,
            padding: '32px 36px',
            display: 'grid', gridTemplateColumns: '60px 1fr 240px', gap: 32,
            alignItems: 'center',
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              color: ARALO.terracotta, letterSpacing: '0.1em',
            }}>0{i + 1}</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Lockup casing={l.casing} size={56} markStroke={2.6} />
            </div>
            <div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                letterSpacing: '0.08em', textTransform: 'uppercase', color: ARALO.forestSoft, marginBottom: 6,
              }}>{l.label}</div>
              <div style={{ fontSize: 12, lineHeight: 1.55, color: ARALO.forestMute }}>{l.use}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 5a. Type scale ─────────────────────────────────────────
function TypeScaleArtboard() {
  const rows = [
    { label: 'Display · D1', size: 88, family: 'Fraunces', weight: 300, css: 'fraunces 88 / 300', sample: 'Quiet brands' },
    { label: 'Display · D2', size: 56, family: 'Fraunces', weight: 300, css: 'fraunces 56 / 300', sample: 'Two letters. One studio.' },
    { label: 'Headline · H1', size: 36, family: 'Inter', weight: 600, css: 'inter 36 / 600', sample: 'Brand identity & growth' },
    { label: 'Headline · H2', size: 24, family: 'Inter', weight: 600, css: 'inter 24 / 600', sample: 'Recent work, in progress' },
    { label: 'Body · B1', size: 16, family: 'Inter', weight: 400, css: 'inter 16 / 400', sample: 'A small studio with intent to scale.' },
    { label: 'Body · B2', size: 13, family: 'Inter', weight: 400, css: 'inter 13 / 400', sample: 'Set in 13/20 for long-form web reading.' },
    { label: 'Mono · M1', size: 11, family: 'JetBrains Mono', weight: 500, css: 'mono 11 / 500', sample: 'EYEBROWS · TIMESTAMPS · LABELS' },
  ];
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
        }}>— 06 · Type scale</div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1.1, textWrap: 'balance',
        }}>Fraunces for display. Inter for everything else. Mono for whisper text.</div>
      </div>
      <div style={{
        background: ARALO.creamSurface, border: `1px solid ${ARALO.forestRule}`,
        borderRadius: 4, padding: '28px 32px', flex: 1,
        display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'space-between',
      }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr 180px', gap: 24, alignItems: 'baseline',
            borderBottom: i < rows.length - 1 ? `1px solid ${ARALO.forestRule}` : 'none',
            paddingBottom: i < rows.length - 1 ? 14 : 0,
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              color: ARALO.forestMute, letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>{r.label}</div>
            <div style={{
              fontFamily: r.family === 'Fraunces' ? 'Fraunces, serif' :
                          r.family === 'JetBrains Mono' ? 'JetBrains Mono, monospace' :
                          'Inter, sans-serif',
              fontVariationSettings: r.family === 'Fraunces' ? '"opsz" 144' : undefined,
              fontWeight: r.weight, fontSize: r.size,
              letterSpacing: r.family === 'Fraunces' ? '-0.02em' : r.size <= 13 ? 0 : '-0.01em',
              lineHeight: 1.1,
              textTransform: r.family === 'JetBrains Mono' ? 'uppercase' : 'none',
              color: ARALO.forest,
            }}>{r.sample}</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              color: ARALO.forestMute, textAlign: 'right', letterSpacing: '0.04em',
            }}>{r.css}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 5b. Color tokens ───────────────────────────────────────
function ColorTokensArtboard() {
  const tokens = [
    { name: 'Cream', token: '--bg/cream', hex: ARALO.cream, role: 'Default background' },
    { name: 'Surface', token: '--bg/surface', hex: ARALO.creamSurface, role: 'Cards, sheets' },
    { name: 'Paper', token: '--bg/paper', hex: ARALO.paperShadow, role: 'Inset, mat' },
    { name: 'Forest', token: '--ink/primary', hex: ARALO.forest, role: 'Primary ink, mark' },
    { name: 'Forest soft', token: '--ink/soft', hex: ARALO.forestSoft, role: 'Body, secondary' },
    { name: 'Stone', token: '--ink/mute', hex: ARALO.stone, role: 'Captions, labels' },
    { name: 'Terracotta', token: '--accent', hex: ARALO.terracotta, role: 'Accent, mark, links' },
    { name: 'Bone', token: '--rule', hex: ARALO.bone, role: 'Hairlines, dividers' },
  ];
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
        }}>— 07 · Color tokens</div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1.1, textWrap: 'balance',
        }}>Eight tokens. No more. Terracotta does the work that gradients usually do.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, flex: 1 }}>
        {tokens.map(t => (
          <div key={t.name} style={{
            background: ARALO.creamSurface,
            border: `1px solid ${ARALO.forestRule}`, borderRadius: 4,
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            <div style={{ flex: 1, background: t.hex, minHeight: 120,
              borderBottom: `1px solid ${ARALO.forestRule}` }} />
            <div style={{ padding: '14px 16px' }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                color: ARALO.terracotta, marginTop: 4, letterSpacing: '0.04em',
              }}>{t.token}</div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                color: ARALO.forestMute, marginTop: 2,
              }}>{t.hex.toUpperCase()}</div>
              <div style={{ fontSize: 11, color: ARALO.forestSoft, marginTop: 8, lineHeight: 1.4 }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 5c. Grid ───────────────────────────────────────────────
function GridArtboard() {
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.cream, color: ARALO.forest,
      padding: 48, fontFamily: 'Inter, sans-serif',
      display: 'grid', gridTemplateColumns: '320px 1fr', gap: 36,
    }}>
      <div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta, marginBottom: 14,
        }}>— 08 · Grid</div>
        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 28, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 20, textWrap: 'balance',
        }}>12 columns. 8px baseline. Always.</div>
        <div style={{ fontSize: 13, lineHeight: 1.65, color: ARALO.forestSoft, marginBottom: 22 }}>
          Web pages set a 12-column grid with a 24px gutter and 80px margins on desktop.
          Print pages use a 6-column variant with 8mm gutters. The 8px baseline ties type
          to layout — every margin and padding is a multiple.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
          {[
            ['Columns', '12 (web) · 6 (print)'],
            ['Gutter', '24px · 8mm'],
            ['Margin', '80px desktop · 24px mobile'],
            ['Baseline', '8px'],
            ['Radius', '4px (cards) · 0 (containers)'],
          ].map(([k, v]) => (
            <div key={k} style={{
              display: 'grid', gridTemplateColumns: '90px 1fr', gap: 10, fontSize: 12,
              borderBottom: `1px solid ${ARALO.forestRule}`, paddingBottom: 6,
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: ARALO.forestMute,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{k}</div>
              <div style={{ color: ARALO.forestSoft }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        background: ARALO.creamSurface,
        border: `1px solid ${ARALO.forestRule}`, borderRadius: 4,
        padding: 24, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 8, height: 480, position: 'relative' }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? 'rgba(184,84,51,0.06)' : 'rgba(31,42,34,0.04)',
              borderRadius: 2, height: '100%',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '8px 4px',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: ARALO.forestMute,
                textAlign: 'center', letterSpacing: '0.04em',
              }}>0{i + 1}</div>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: ARALO.forestMute,
                textAlign: 'center', writingMode: 'vertical-rl', transform: 'rotate(180deg)',
              }}>col</div>
            </div>
          ))}
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          color: ARALO.forestMute, letterSpacing: '0.08em', textTransform: 'uppercase',
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>80px margin</span>
          <span>24px gutter</span>
          <span>1280px container</span>
        </div>
      </div>
    </div>
  );
}

// ── 6. Web header + landing hero ───────────────────────────
function WebHeaderArtboard() {
  return (
    <div style={{
      width: 1280, height: 800,
      background: ARALO.cream, color: ARALO.forest,
      fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden',
    }}>
      {/* Top nav */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 56px',
      }}>
        <LockupCompact casing="upper" size={20} markStroke={3.4} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 30, fontSize: 13, color: ARALO.forestSoft, fontWeight: 500 }}>
          <span>Work</span>
          <span>Studio</span>
          <span>Journal</span>
          <span>Contact</span>
          <span style={{
            padding: '9px 16px', borderRadius: 999,
            border: `1px solid ${ARALO.forest}`, color: ARALO.forest,
            fontSize: 12, letterSpacing: '0.04em',
          }}>Start a project →</span>
        </div>
      </div>
      <div style={{ height: 1, background: ARALO.forestRule, margin: '0 56px' }} />

      {/* Hero */}
      <div style={{
        padding: '88px 56px 0',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56,
      }}>
        <div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta,
            marginBottom: 28,
          }}>— Independent design studio · est. 2026</div>
          <div style={{
            fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
            fontWeight: 300, fontSize: 76, lineHeight: 1.0, letterSpacing: '-0.022em',
            color: ARALO.forest, textWrap: 'balance', marginBottom: 28,
          }}>Quiet brands, built to compound.</div>
          <div style={{ fontSize: 16, lineHeight: 1.55, color: ARALO.forestSoft, maxWidth: 460, marginBottom: 36 }}>
            Web design, SEO and digital marketing for small companies that intend
            to become large ones. We make work that doesn't compete with itself.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{
              padding: '13px 22px', background: ARALO.forest, color: ARALO.cream,
              borderRadius: 999, fontSize: 13, fontWeight: 500, letterSpacing: '0.02em',
            }}>Start a project →</span>
            <span style={{
              padding: '13px 22px', borderRadius: 999,
              border: `1px solid ${ARALO.forestRule}`, color: ARALO.forestSoft,
              fontSize: 13, fontWeight: 500,
            }}>Read the journal</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <div style={{
            width: 460, aspectRatio: '4 / 5',
            background: `repeating-linear-gradient(135deg, ${ARALO.forestRule} 0 1px, transparent 1px 16px)`,
            border: `1px solid ${ARALO.forestRule}`, borderRadius: 4,
            display: 'flex', alignItems: 'flex-end', padding: 18,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: ARALO.stone,
            letterSpacing: '0.04em',
          }}>case study image · 4×5</div>
        </div>
      </div>

      {/* Marquee row */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '24px 56px',
        borderTop: `1px solid ${ARALO.forestRule}`,
        display: 'flex', alignItems: 'center', gap: 38,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: ARALO.forestMute, letterSpacing: '0.14em', textTransform: 'uppercase',
      }}>
        <AAMark size={20} stroke={3.4} />
        <span>Brand identity</span>
        <span>·</span>
        <span>Web design</span>
        <span>·</span>
        <span>Search</span>
        <span>·</span>
        <span>Lifecycle</span>
        <span>·</span>
        <span>Motion</span>
        <span style={{ marginLeft: 'auto' }}>aralo.studio</span>
      </div>
    </div>
  );
}

// ── 7a. Business card ──────────────────────────────────────
function BusinessCardArtboard() {
  const cardW = 380, cardH = 220;
  return (
    <div style={{
      width: 1120, height: 700,
      background: ARALO.paperShadow,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 64, padding: 56,
      fontFamily: 'Inter, sans-serif', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '4px 4px', opacity: 0.6, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 32, left: 48,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta,
      }}>— 09 · Business card · 85 × 55mm</div>

      {/* Front */}
      <div style={{
        width: cardW, height: cardH, background: ARALO.cream,
        boxShadow: '0 1px 0 rgba(0,0,0,0.05), 0 22px 48px -16px rgba(0,0,0,0.18)',
        borderRadius: 4, padding: 28,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        transform: 'rotate(-2deg)', position: 'relative',
      }}>
        <Lockup casing="upper" size={32} markStroke={2.6} />
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9.5,
          letterSpacing: '0.16em', textTransform: 'uppercase', color: ARALO.forestMute,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>aralo.studio</span>
          <span>est. 2026</span>
        </div>
      </div>

      {/* Back */}
      <div style={{
        width: cardW, height: cardH, background: ARALO.forest, color: ARALO.cream,
        boxShadow: '0 1px 0 rgba(0,0,0,0.05), 0 22px 48px -16px rgba(0,0,0,0.22)',
        borderRadius: 4, padding: 28,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        transform: 'rotate(2deg)', position: 'relative',
      }}>
        <AAMark size={28} stroke={3.4} primary={ARALO.cream} accent={ARALO.terracotta} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 14 }}>
          <div style={{ fontSize: 13, lineHeight: 1.45 }}>
            <div style={{ fontWeight: 600, letterSpacing: '0.01em' }}>Maren Ito</div>
            <div style={{ opacity: 0.72, fontSize: 11.5 }}>Founder · Designer</div>
          </div>
          <div style={{
            textAlign: 'right',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5,
            letterSpacing: '0.02em', opacity: 0.85,
          }}>
            <div>maren@aralo.studio</div>
            <div style={{ opacity: 0.7 }}>+1 415 555 0117</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 7b. Letterhead ─────────────────────────────────────────
function LetterheadArtboard() {
  return (
    <div style={{
      width: 1120, height: 800,
      background: ARALO.paperShadow,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 40, fontFamily: 'Inter, sans-serif', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 26, left: 40,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta,
      }}>— 10 · Letterhead · A4</div>

      <div style={{
        width: 540, height: 720, background: ARALO.cream,
        boxShadow: '0 1px 0 rgba(0,0,0,0.05), 0 22px 60px -20px rgba(0,0,0,0.22)',
        padding: '52px 56px', position: 'relative',
        display: 'flex', flexDirection: 'column', gap: 28,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Lockup casing="upper" size={24} markStroke={2.4} />
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 8.5,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: ARALO.forestMute,
            textAlign: 'right', lineHeight: 1.6,
          }}>
            <div>Aralo Studio LLC</div>
            <div>447 Valencia Street</div>
            <div>San Francisco CA 94103</div>
          </div>
        </div>

        <div style={{ height: 1, background: ARALO.forestRule }} />

        <div style={{ fontSize: 11, color: ARALO.forestSoft, lineHeight: 1.6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><b style={{ color: ARALO.forest }}>To:</b> Hana Williams · Pinemoor Tea Co.</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: ARALO.forestMute }}>28 Apr 2026</span>
          </div>
          <div style={{ marginTop: 4 }}><b style={{ color: ARALO.forest }}>Re:</b> Brand identity & web · proposal v0.2</div>
        </div>

        <div style={{
          fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
          fontWeight: 300, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1.2, color: ARALO.forest,
          textWrap: 'balance',
        }}>Hana —</div>

        <div style={{ fontSize: 11.5, lineHeight: 1.7, color: ARALO.forestSoft }}>
          Thanks for the long call last week. The two ideas you walked me through —
          a tea house that ships and a tea house that travels — both deserve a brand
          that holds steady while you decide which is bigger. What follows is a short
          plan, two milestones, and a budget within the bracket you gave me.
          <br /><br />
          We'd start with a brand foundation in May (positioning, voice, identity
          system), and move into the website in June. I've left two weeks of slack
          before launch for whatever shows up that we can't see yet.
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{
            fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
            fontWeight: 300, fontStyle: 'italic', fontSize: 18, color: ARALO.forest,
          }}>— Maren</div>
          <AAMark size={22} stroke={3.4} />
        </div>
      </div>
    </div>
  );
}

// ── 7c. Invoice ────────────────────────────────────────────
function InvoiceArtboard() {
  const items = [
    { d: 'Brand identity foundation · phase 01', q: 1, r: 8400, t: 8400 },
    { d: 'Identity system · documentation', q: 1, r: 2100, t: 2100 },
    { d: 'Web design · responsive (12 routes)', q: 1, r: 14600, t: 14600 },
    { d: 'SEO foundation · audit + on-page', q: 1, r: 3800, t: 3800 },
  ];
  const subtotal = items.reduce((s, i) => s + i.t, 0);
  const tax = Math.round(subtotal * 0.0875);
  const total = subtotal + tax;
  return (
    <div style={{
      width: 1120, height: 800,
      background: ARALO.paperShadow,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 40, fontFamily: 'Inter, sans-serif', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 26, left: 40,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
        letterSpacing: '0.22em', textTransform: 'uppercase', color: ARALO.terracotta,
      }}>— 11 · Invoice · A4</div>

      <div style={{
        width: 540, height: 720, background: ARALO.cream,
        boxShadow: '0 1px 0 rgba(0,0,0,0.05), 0 22px 60px -20px rgba(0,0,0,0.22)',
        padding: '52px 56px', position: 'relative',
        display: 'flex', flexDirection: 'column', gap: 24,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <LockupCompact casing="lower" size={20} markStroke={3.4} />
          <div style={{
            fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
            fontWeight: 300, fontSize: 30, letterSpacing: '-0.02em', lineHeight: 1, color: ARALO.forest,
          }}>Invoice</div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
          fontSize: 10.5, lineHeight: 1.5, color: ARALO.forestSoft,
          paddingTop: 12, borderTop: `1px solid ${ARALO.forestRule}`,
        }}>
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              color: ARALO.forestMute, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6,
            }}>Billed to</div>
            <div style={{ color: ARALO.forest, fontWeight: 600 }}>Pinemoor Tea Co.</div>
            <div>Hana Williams</div>
            <div>1820 Solano Ave, Berkeley CA</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              color: ARALO.forestMute, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6,
            }}>Invoice</div>
            <div style={{ color: ARALO.forest, fontWeight: 600 }}>ARS · 0024</div>
            <div>Issued · 28 Apr 2026</div>
            <div>Due · 28 May 2026</div>
          </div>
        </div>

        {/* Table */}
        <div style={{ marginTop: 4 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 40px 80px 90px',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
            color: ARALO.forestMute, letterSpacing: '0.1em', textTransform: 'uppercase',
            paddingBottom: 8, borderBottom: `1px solid ${ARALO.forestRule}`,
          }}>
            <div>Description</div><div>Qty</div><div style={{ textAlign: 'right' }}>Rate</div><div style={{ textAlign: 'right' }}>Total</div>
          </div>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 40px 80px 90px',
              fontSize: 11, color: ARALO.forestSoft,
              padding: '12px 0',
              borderBottom: `1px solid ${ARALO.forestRule}`,
            }}>
              <div style={{ color: ARALO.forest }}>{it.d}</div>
              <div>{it.q}</div>
              <div style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: 11 }}>${it.r.toLocaleString()}</div>
              <div style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: ARALO.forest }}>${it.t.toLocaleString()}</div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div style={{ marginLeft: 'auto', width: 240, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Row label="Subtotal" value={`$${subtotal.toLocaleString()}`} />
          <Row label="Tax · 8.75%" value={`$${tax.toLocaleString()}`} />
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            paddingTop: 10, borderTop: `1px solid ${ARALO.forest}`,
          }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
              color: ARALO.forestMute, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Due</span>
            <span style={{
              fontFamily: 'Fraunces, serif', fontVariationSettings: '"opsz" 144',
              fontWeight: 400, fontSize: 24, color: ARALO.terracotta,
            }}>${total.toLocaleString()}</span>
          </div>
        </div>

        <div style={{ marginTop: 'auto', fontSize: 10, color: ARALO.forestMute, lineHeight: 1.55 }}>
          ACH · Aralo Studio LLC · Routing 121000248 · Account 4221904471 ·
          Memo "ARS-0024". Late net 30 accrues 1.5% / month.
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: ARALO.forestMute, letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>{label}</span>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', color: ARALO.forest }}>{value}</span>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────
function App() {
  useEffect(() => { document.body.style.background = ARALO.paperShadow; }, []);
  return (
    <DesignCanvas>
      <DCSection id="cover" title="Identity system" subtitle="Direction 03 · Forest + Terracotta · locked">
        <DCArtboard id="cover" label="Cover" width={1120} height={700}>
          <CoverArtboard />
        </DCArtboard>
      </DCSection>

      <DCSection id="logo" title="Logo construction" subtitle="Geometry, clearspace, do/don't">
        <DCArtboard id="construction" label="Construction · 60×56 grid" width={1120} height={700}>
          <ConstructionArtboard />
        </DCArtboard>
        <DCArtboard id="clearspace" label="Clearspace + do/don't" width={1120} height={700}>
          <ClearspaceAndDontsArtboard />
        </DCArtboard>
      </DCSection>

      <DCSection id="variants" title="Mark + lockup variants" subtitle="Six tunings · three casings">
        <DCArtboard id="mark-variants" label="Mark variants" width={1120} height={700}>
          <MarkVariantsArtboard />
        </DCArtboard>
        <DCArtboard id="lockup-trio" label="Lockup casings" width={1120} height={700}>
          <LockupTrioArtboard />
        </DCArtboard>
      </DCSection>

      <DCSection id="system" title="Identity system" subtitle="Type, color, grid">
        <DCArtboard id="type-scale" label="Type scale" width={1120} height={700}>
          <TypeScaleArtboard />
        </DCArtboard>
        <DCArtboard id="color-tokens" label="Color tokens" width={1120} height={700}>
          <ColorTokensArtboard />
        </DCArtboard>
        <DCArtboard id="grid" label="Grid" width={1120} height={700}>
          <GridArtboard />
        </DCArtboard>
      </DCSection>

      <DCSection id="web" title="Web" subtitle="Header + landing hero">
        <DCArtboard id="web-hero" label="Landing · 1280 × 800" width={1280} height={800}>
          <WebHeaderArtboard />
        </DCArtboard>
      </DCSection>

      <DCSection id="print" title="Print kit" subtitle="Card · letterhead · invoice">
        <DCArtboard id="card" label="Business card" width={1120} height={700}>
          <BusinessCardArtboard />
        </DCArtboard>
        <DCArtboard id="letterhead" label="Letterhead" width={1120} height={800}>
          <LetterheadArtboard />
        </DCArtboard>
        <DCArtboard id="invoice" label="Invoice" width={1120} height={800}>
          <InvoiceArtboard />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
