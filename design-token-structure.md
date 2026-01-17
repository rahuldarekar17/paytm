# PML — DS25 Tokens (Glass / Archived) — Variable Structure Summary

Source Figma file: `TVj77bWJmh5XhIGEs0ddsd` (nodes provided by user)

This doc summarizes the **token taxonomy** and the **connection points between variable collections** (especially **colour primitives → colour semantics** and **number primitives → number semantics**) as observed from the Figma nodes:

- **Colour primitives**: `77:6281` / `5042:133` (Primitives table)
- **Colour semantics**: `5040:30` (Semantics table, Light/Dark)
- **Number primitives**: `3829:766` (Primitives table)
- **Number semantics**: `3831:1575` (Semantics table)
- **Typography**: `1923:100` (Type scale table)

---

## Colour system

### Primitive collections (base values)

The primitive layer is implemented as multiple **variable collections** (shown as `Collection/Token` naming). These are the “source of truth” colors that semantic tokens alias to.

- **`Actions/*`**: core action/status colors.
  - Examples from variable defs: `Actions/Primary`, `Actions/Positive`, `Actions/Notice`, `Actions/Negative`, `Actions/Primary Alt Light`, `Actions/Primary Alt Dark`.
- **`Colours/*`**: universal named hues (single swatches).
  - Examples: `Colours/Red`, `Colours/Orange`, `Colours/Yellow`, `Colours/Green`, `Colours/Mint`, `Colours/Teal`, `Colours/Cyan`, `Colours/Cyan Alt`, `Colours/Blue`, `Colours/Indigo`, `Colours/Purple`, `Colours/Pink`, `Colours/Pink Alt`, `Colours/Brown`.
- **`Mono/*`**: grayscale ramp (used heavily by text/border/surface semantics).
  - Examples: `Mono/875`, `Mono/860`, `Mono/850`, `Mono/800`, `Mono/600`, `Mono/550`, `Mono/450`, `Mono/400`, `Mono/175`, `Mono/100`, `Mono/90`, `Mono/75`, `Mono/50`.
- **`Actions Offsets/*`**: derived tints/shades for actions/statuses (support “weak” semantic variants).
  - Examples: `Actions Offsets/Primary Tint`, `Actions Offsets/Primary Shade`, and matching `Positive/Notice/Negative/Yellow` tint+shade.
- **`Blue Offsets/*`**: background offset palette (used for semantic Background/Offset tokens & surface steps).
  - Examples: `Blue Offsets/Blue 100`, `Blue Offsets/Blue 150`, `Blue Offsets/Blue 200`, `Blue Offsets/Blue 800`, `Blue Offsets/Blue 850`, `Blue Offsets/Blue 890`, `Blue Offsets/Background`, `Blue Offsets/Background Alt`.
- **`Overlays/*`**: translucent overlay blacks (named by intensity).
  - Examples: `Overlays/800`, `Overlays/600`, `Overlays/400`, `Overlays/200`.
- **`Brand/*`**: brand colors (includes translucent brand white).
  - Examples: `Brand/Brand Blue`, `Brand/Brand Dark Blue`, `Brand/Brand White`, `Brand/Brand Semi White`.
- **`Materials/*`**: “glass/material” blacks/whites with alpha + a few neutrals.
  - Examples: `Materials/FF 100`, `Materials/FF 25`, `Materials/FF 7`, `Materials/00 80`, `Materials/00 8`, `Materials/0F 100`, `Materials/99 100`, `Materials/CC 100`, `Materials/FA 70`.
- **`Surface/*`**: at least one surface entry exists as a variable (`Surface/Level 1`), but most surface steps are expressed via semantics (see below).

### Semantic collections (meaningful roles)

Semantic tokens are grouped by *usage domain* (Text/Icon/Border/Background/Surface/Overlay/Glass/etc.) and **alias** into primitives. In the semantics tables, each row shows a Light and Dark mapping.

Key semantic collections observed in the colour semantics table:

- **Text semantics** (`Text/*`)
  - Neutral ladder: `Text/Neutral Strong`, `Text/Neutral Moderate`, `Text/Neutral Medium`, `Text/Neutral Weak`, `Text/Neutral Inverse`
  - Titles: `Text/Title Text`
  - Brand/status: `Text/Primary Strong`, etc. (seen in typography node variable defs)
- **Icon semantics** (`Icon/*`) (seen in typography node variable defs)
  - Example: `Icon/Primary Strong`
- **Border semantics** (`Border/*`)
  - Neutral ladder: `Border/Neutral Strong`, `Border/Neutral Medium`, `Border/Neutral Weak`
  - Status/primary borders also appear in table structure (e.g., `Border/Primary Strong`)
- **Background semantics** (`Background/*`)
  - Offsets: `Background/Offset 1`, `Background/Offset 2`, `Background/Offset 3`
  - Neutral inverse: `Background/Neutral Inverse`
- **Surface semantics** (`Surface/*`)
  - Levels: `Surface/Level 1`, `Surface/Level 2`, `Surface/Level 3`, `Surface/Level 4`
- **Overlay semantics** (`Overlay/*`)
  - `Overlay/Strong`, `Overlay/Weak`
- **Colours semantics** (`Colours/*`) (semantic pass-through to `Colours/*` primitives; effectively “re-exported”)
- **Brand Colours semantics** (`Brand Colours/*`) (semantic pass-through to `Brand/*` primitives)
- **Glass semantics** (`Glass/*`)
  - Glass surface levels and tinted/clear levels (see connections below)

### Connection point: colour primitives → colour semantics (alias wiring)

The semantics table expresses **aliasing** by referencing the primitive token path textually (e.g. `Mono / 860`, `Actions / Primary`).

#### 1) Light/Dark theming via `Mono/*`

Many neutral semantics flip between the grayscale ramp depending on theme:

- **Text**
  - `Text/Neutral Strong` → Light: `Mono/860`, Dark: `Mono/50`
  - `Text/Neutral Moderate` → Light: `Mono/800`, Dark: `Mono/175`
  - `Text/Neutral Medium` → Light: `Mono/600`, Dark: `Mono/550`
  - `Text/Neutral Inverse` → Light: `Mono/50`, Dark: `Mono/860`
- **Surface**
  - `Surface/Level 1` → Light: `Mono/50`, Dark: `Mono/875`
  - `Surface/Level 2` → Light: `Mono/75`, Dark: `Mono/860`
  - `Surface/Level 3` → Light: `Mono/90`, Dark: `Mono/850`
  - `Surface/Level 4` → Light: `Blue Offsets/Background`, Dark: `Blue Offsets/Background Alt`

This establishes `Mono/*` as the primary “connection point” between primitives and themeable semantics.

#### 2) Action/status semantics via `Actions/*` and `Actions Offsets/*`

Action/status semantics generally map directly:

- **Strong**
  - `Primary Strong` → Light: `Actions/Primary`, Dark: `Actions/Primary Alt`
  - `Positive Strong` → Light: `Actions/Positive`, Dark: `Actions/Positive` (same in table)
  - `Notice Strong` → Light: `Actions/Notice`, Dark: `Actions/Notice` (same in table)
  - `Negative Strong` → Light: `Actions/Negative`, Dark: `Actions/Negative` (same in table)

And “weak” variants map via offsets (tint/shade):

- `Primary Weak` → Light: `Blue Offsets/Primary Tint`, Dark: `Blue Offsets/Primary Shade`
- `Positive Weak` → Light: `Actions Offsets/Positive Tint`, Dark: `Actions Offsets/Positive Shade`
- `Notice Weak` → Light: `Actions Offsets/Notice Tint`, Dark: `Actions Offsets/Notice Shade`
- `Negative Weak` → Light: `Actions Offsets/Negative Tint`, Dark: `Actions Offsets/Negative Shade`

#### 3) Background offsets via `Blue Offsets/*`

Background offset semantics map to a small curated palette:

- `Background/Offset 1` → Light: `Blue Offsets/Blue 100`, Dark: `Blue Offsets/Blue 890`
- `Background/Offset 2` → Light: `Blue Offsets/Blue 150`, Dark: `Blue Offsets/Blue 850`
- `Background/Offset 3` → Light: `Blue Offsets/Blue 200`, Dark: `Blue Offsets/Blue 800`

#### 4) Overlay semantics via `Overlays/*`

Overlay semantics map to translucent overlay primitives:

- `Overlay/Strong` → Light: `Overlays/600`, Dark: `Overlays/800`
- `Overlay/Weak` → Light: `Overlays/200`, Dark: `Overlays/400`

#### 5) “Pass-through” semantic groupings

Two sections appear to simply re-export primitives into semantic namespaces:

- **Colours section**: `Colours/<Hue>` → `Colours/<Hue>` (Light and Dark are the same)
- **Brand Colours section**: `Brand Colours/<Token>` → `Brand/<Token>` (Light and Dark are the same)

#### 6) Glass semantics via `Materials/*`, `Actions/*`, `Mono/*`

The “Glass” section composes glass surfaces from the Materials collection and other primitives:

- `Glass/Surface L1` → Light: `Materials/00 8` (black @ ~8%), Dark: `#000000 • 10%` (shown as a value in table)
- `Glass/Surface L2` → Light: `#FFFFFF • 0%` (shown), Dark: `Materials/FF 7`
- `Glass/Surface L3` → Light: `Materials/FA 70`, Dark: `Materials/00 80`
- `Glass/Surface L4` → Light: `Mono/75`, Dark: `Mono/860`
- `Glass/Tinted L1` → Light: `Actions/Primary`, Dark: `Actions/Primary Alt`
- `Glass/Tinted L2` → Light/Dark: `Materials/99 100`
- `Glass/Tinted L3` → Light/Dark: `Materials/FF 100`
- `Glass/Tinted L4` → Light/Dark: `Materials/FF 50`
- `Glass/Clear L1` → Light/Dark: `Materials/00 8`
- `Glass/Clear L2` → Light/Dark: `Materials/FF 7`

---

## Number system

### Primitive collection (base unit scale)

The primitive number tokens are a flat unit scale:

- `Unit 1 = 2`
- `Unit 2 = 4`
- `Unit 3 = 6`
- `Unit 4 = 8`
- `Unit 6 = 12`
- `Unit 7 = 16`
- `Unit 9 = 24`
- `Unit 10 = 32`
- `Unit 11 = 48`
- `Unit 12 = 60`
- `Unit Max = 200`

This is the single “connection point” used by the semantic number tokens (Spacing, Radius).

### Semantic number tokens (meaningful roles)

Semantic number tokens are grouped into sections and each semantic name maps to one `Unit N`:

#### Spacing

- `Spacing - 2px` → `Unit 1`
- `Spacing - 4px` → `Unit 2`
- `Spacing - 6px` → `Unit 3`
- `Spacing - 8px` → `Unit 4`
- `Spacing - 12px` → `Unit 6`
- `Spacing - 16px (Card Default)` → `Unit 7`
- `Spacing - 24px` → `Unit 9`
- `Spacing - 32px` → `Unit 10`
- `Spacing - 48px (Sections)` → `Unit 11`
- `Spacing - 60px` → `Unit 12`

#### Radius

The Radius semantics also alias to the same unit scale:

- `Radius - 4px (Badges)` → `Unit 2`
- `Radius - 8px` → `Unit 4`
- `Radius - 12px` → `Unit 6`
- `Radius - 16px` → `Unit 7`
- `Radius - 24px (Card Default)` → `Unit 9`
- `Fully Rounded` → `Unit Max`

---

## Typography system

Typography appears as a **type scale table** using the “Inter Subset” family, with named text styles by role and weight.

### Font family

- `Inter Subset` is the primary family used across the scale.

### Style taxonomy (examples)

The table lists named styles such as:

- Display: `Display 1`, `Display 2`, `Display 3` (Bold/Medium variants)
- Titles: `Title 1`, `Title 2`, `Title 3`, `Title 4` (Bold/Semi Bold/Medium/Regular variants as applicable)
- Body: `Body` (Bold/Semi Bold/Medium/Regular)
- Subtext: `Subtext` (Bold/Semi Bold/Medium/Regular)
- Caption: `Caption` (Semi Bold/Regular)

Each row contains:

- **Weight** label (e.g. Bold / SemiBold / Medium / Regular)
- **Size** in px (e.g. 42px, 36px, 22px, 14px, 12px, 10px)
- **Line height** numeric value (e.g. 48, 40, 28, 20, 16, 12)
- **Tracking** shown as a column (values displayed as `H1` in the metadata table; likely a placeholder or style label)

### Relationship to variables

From variable defs on this node, we can see typography-related values expressed as `Font(...)` entries (e.g. `Display 1 - Bold`, `Body - Regular`, etc.). In a code token system, these typically map to either:

- **Composite typography tokens** (font family, size, weight, line-height, letter-spacing), or
- **Text styles** in code (e.g. `typography.title4.bold`) generated from these definitions.

---

## How this maps to “Variables in Figma → Variables in code”

### Recommended export layering (matches the observed structure)

- **Primitives** (raw values)
  - Colour primitives: `Mono/*`, `Colours/*`, `Actions/*`, `Actions Offsets/*`, `Blue Offsets/*`, `Overlays/*`, `Brand/*`, `Materials/*`
  - Number primitives: `Unit N`
  - Typography primitives: family/weights/size/line-height/letter-spacing (or composite per style)

- **Semantics** (aliasing primitives)
  - Colour semantics: `Text/*`, `Icon/*`, `Border/*`, `Background/*`, `Surface/*`, `Overlay/*`, `Glass/*`
  - Number semantics: `Spacing/*`, `Radius/*` (and any future categories)

### Key connection points to preserve in code

- **Theme switching** is primarily expressed by semantic tokens selecting different `Mono/*` and offset primitives for Light vs Dark.
- **Spacing/radius semantics** are *aliases* to a single unit scale; code should keep the unit scale stable and allow semantics to reference it.

