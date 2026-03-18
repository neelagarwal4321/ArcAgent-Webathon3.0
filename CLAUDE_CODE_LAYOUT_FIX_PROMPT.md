# CLAUDE CODE PROMPT — Layout, Padding & Spacing Audit + Fix

Copy everything below this line and paste it into Claude Code.

---

## Task

You are performing a **complete layout, padding, and spacing audit and fix** across the entire ArcAgent website project. The project is a Next.js (Pages Router) + Tailwind CSS site with a dark base background, cream card surfaces, and bright blue (#2539E7) accent sections.

Before making ANY changes, read these spec files in the project root (or wherever they are placed). These are your single sources of truth:

1. **`CLAUDE.md`** — Project architecture, file structure, component tree, data flow
2. **`ArcAgent_Master_Blueprint_v2.md`** — All 55 design decisions, section-by-section specs
3. **`THEME_UPDATE_v2.1.md`** — The hybrid color system (dark bg + cream cards + blue accents)
4. **`ArcAgent_Layout_Specification.md`** — EXACT layout wireframes for every page and component, grid columns, flex directions, spacing values, responsive breakpoints

Read all four files completely before touching any code. The Layout Specification file is the most critical for this task — it contains ASCII wireframes showing exactly where every component should be placed.

---

## The Layout Rules (memorize these)

### Spacing Scale
```
Section padding (vertical):     120px desktop / 80px tablet / 64px mobile
Container max-width:            1400px, mx-auto
Container horizontal padding:  80px desktop / 40px tablet / 20px mobile
Card gap (between siblings):    24px
Card inner padding:             24-32px (small-large cards)
SectionHeader to content:       56-64px margin-bottom
Component inner gap:            16px (tight) / 24px (normal) / 32px (loose)
```

### The Container Pattern (EVERY section must follow this)
```html
<section className="w-full py-[120px] md:py-[80px] sm:py-[64px] bg-{varies}">
  <div className="max-w-[1400px] mx-auto px-[80px] lg:px-[40px] sm:px-[20px]">
    {content}
  </div>
</section>
```

If ANY section is missing this wrapper pattern, add it. If any section has different max-width or padding values, fix it to match.

### Typography Spacing
```
After overline (JetBrains Mono badge):  12px margin-bottom
After heading (Syne):                   20-24px margin-bottom
After subtext:                          40-56px margin-bottom (before content)
Between body paragraphs:                16px gap
After feature list item:                12-14px gap
```

### Card Sizing
```
Border radius:    16px (large cards, modals) / 12px (standard cards) / 10px (buttons) / 8px (pills, inputs)
Card shadow:      0 1px 3px rgba(10,15,44,0.06) (Level 1) / 0 2px 8px rgba(10,15,44,0.08) (Level 2)
Card hover:       shadow deepens + translateY(-2px), transition 0.25s
```

---

## What to Audit and Fix

Go through EVERY file in `pages/` and `components/` and check the following. Fix every violation you find.

### 1. Section Vertical Padding
- Every `<section>` or top-level page section div MUST have `py-[120px]` on desktop
- Check: are any sections cramped (less than 100px padding)? Fix to 120px
- Check: are any sections excessively padded (more than 140px)? Fix to 120px
- Responsive: sections must use `md:py-[80px]` and `sm:py-[64px]` (or Tailwind equivalents like `py-16 md:py-20 lg:py-[120px]`)

### 2. Container Centering & Max-Width
- Every section's inner content wrapper MUST be `max-w-[1400px] mx-auto`
- Horizontal padding MUST be `px-20` (mobile) → `md:px-10` (tablet) → `lg:px-20` (desktop 80px)
- Check: is any content touching the screen edges on mobile? Fix padding
- Check: is any content wider than 1400px on desktop? Fix max-width
- Exception: full-bleed backgrounds (hero, CTA banners, footer) span full width, but their CONTENT is still constrained to 1400px

### 3. Grid & Flex Layouts
For each page, cross-reference with `ArcAgent_Layout_Specification.md` and verify:

**Home Page:**
- H3 Role Tiles: `grid-cols-4` desktop → `grid-cols-2` tablet → `grid-cols-1` mobile, gap-24
- H4 Agent Carousel: single card max-w-[800px] mx-auto, navigation centered below
- H5 Before/After: max-w-[960px] mx-auto, stacks vertically on mobile
- H6 How It Works: `grid-cols-4` desktop → `grid-cols-2` tablet → flex-col mobile, gap-24
- H7 Lifecycle: same as H6
- H8 Industries: `grid-cols-3` desktop → `grid-cols-2` tablet → `grid-cols-1` mobile, gap-24
- H9 Tech Stack: `grid-cols-4` gap-40, max-w-[1000px] mx-auto
- H10 Case Studies: flex-col, gap-16 between accordion items
- H11 Testimonials: overflow-hidden, two rows, cards flex-shrink-0 w-[360px]
- Stats Row: flex justify-center gap-24, max-w-[800px] mx-auto → stacks on mobile

**Products Overview:**
- Agent blocks alternate: odd (visual left, content right) / even (content left, visual right)
- 50/50 split with gap-60

**Agent Deep-Dive:**
- Dashboard: sidebar 240px fixed + main fluid, collapses on tablet/mobile
- Feature grid: `grid-cols-2` with 3-4 rows, gap-24
- FAQ: flex-col, gap-12

**Pricing:**
- `grid-cols-4` desktop → horizontal scroll tablet → flex-col mobile, gap-24
- "Growth" tier card has a 2px primary border

**Blog:**
- Featured post: `grid-cols-2` (image left, content right) → stacks on mobile
- Post grid: `grid-cols-3` → `grid-cols-2` → `grid-cols-1`, gap-24

**Blog Post:**
- max-w-[720px] mx-auto for readable column

**Industries:**
- Tab bar: flex, overflow-x-auto on mobile
- Content panel: cream card, p-40

**About:**
- Team: `grid-cols-3` → `grid-cols-2` → `grid-cols-1`
- Values: `grid-cols-5` → `grid-cols-3` → `grid-cols-2`
- Mission/Vision: `grid-cols-2` side by side

**Contact:**
- Form: max-w-[640px] mx-auto

**Login:**
- Card: max-w-[400px] mx-auto, centered vertically

### 4. SectionHeader Consistency
Every section that has an overline + heading + optional subtext should use the `SectionHeader` component (or follow its exact pattern):
```
Overline: JetBrains Mono 11px, uppercase, tracking-widest, primary color, mb-3
Heading:  Syne Bold/ExtraBold 40px (or 48px for H1), mb-5
Subtext:  Figtree 16-18px, text-muted, max-w-[560px] mx-auto (if centered), mb-14
```
Check that the spacing between SectionHeader and the first content element below it is 56-64px (translate to Tailwind: `mb-14` or `mb-16`).

### 5. Card Internal Padding
- Standard content cards: `p-6` to `p-8` (24-32px)
- Modal: `p-10` (40px)
- Small pills/badges: `px-4 py-1.5` (16px × 6px)
- Input fields: `px-4 py-3` (16px × 12px)
- Buttons: `px-7 py-3` (28px × 12px) for primary, `h-12` (48px height)
- Metric cards inside carousel: `p-5` (20px)

### 6. Navbar
- Height: exactly `h-[72px]`, items vertically centered
- Logo cluster left, nav links center, buttons right — `justify-between`
- Nav link gap: `gap-8` (32px)
- CTA buttons gap: `gap-3` (12px)
- Mobile: hamburger replaces center links at `<768px`, bottom sheet slides up
- Mega-menu: absolute positioned, top-[72px], centered under "Products" link, w-[640px]

### 7. Footer
- Padding: `py-16 pb-6` (64px top, 24px bottom)
- 6-column grid: `grid-cols-6` → `grid-cols-3` tablet → `grid-cols-1` mobile
- Column gap: `gap-10` (40px)
- Newsletter row: max-w-[480px] mx-auto, mt-12
- Bottom bar: border-t, mt-12, pt-5, text-center
- Check all footer link spacing: `gap-2.5` (10px) between links

### 8. CTA Banners (3 instances on home page)
- Full width, bg primary (#2539E7)
- Inner: max-w-[1400px] mx-auto, flex justify-between items-center, py-8
- Mobile: flex-col text-center gap-4
- Check: are banners squeezed or too tall? Fix to py-8 (32px)

### 9. Modal Spacing
- Demo modal: max-w-[560px], p-10 (40px), rounded-2xl (16px)
- Video modal: max-w-[800px], p-2 (8px padding around video), rounded-2xl
- Input fields inside modal: gap-4 (16px) between fields
- Progress bar: mb-6 (24px) before first field
- Buttons: mt-5 (20px) after last field, full width

### 10. Background Alternation
Verify the home page follows this exact pattern:
```
H1  Hero         → bg-hero (#2539E7) or bg-base with blue glow
H2  Stats        → bg-base (#0A0F2C)
H3  Roles        → bg-base
H4  Carousel     → bg-base
H5  Before/After → bg-base
    CTA Banner 1 → bg-primary (#2539E7)
H6  How It Works → bg-alt (#0E1435)
H7  Lifecycle    → bg-base
H8  Industries   → bg-base
    CTA Banner 2 → bg-primary
H9  Tech Stack   → bg-base
H10 Case Studies → bg-alt
H11 Testimonials → bg-base
    CTA Banner 3 → bg-primary
H12 CTA Section  → bg-primary (gradient)
    Footer       → #070F1F
```
If any section has the wrong background, fix it.

---

## How to Execute

1. **Read all 4 spec files first** — do not skip this
2. **Start with `pages/index.jsx`** (home page) — it has the most sections and most layout complexity. Go section by section, top to bottom.
3. **Then global components** — `Navbar.jsx`, `Footer.jsx`, `DemoModal.jsx`, `MobileNav.jsx`, `CTABanner.jsx`
4. **Then each page** in this order: `/products/index.jsx`, `/products/[slug].jsx`, `/pricing.jsx`, `/industries.jsx`, `/case-studies.jsx`, `/blog/index.jsx`, `/blog/[slug].jsx`, `/about.jsx`, `/contact.jsx`, `/login.jsx`, `/security.jsx`, `/careers.jsx`, `/privacy-policy.jsx`, `/terms-of-service.jsx`, `404.jsx`
5. **After all fixes**, do a final pass checking that no section has less than 100px vertical padding and no container exceeds 1400px width

## Important Notes

- Do NOT change any content, copy, or functionality — only layout, padding, spacing, and grid structure
- Do NOT change colors or fonts — only spatial properties
- Do NOT change animation behavior — only static layout
- If a component or section doesn't exist yet, skip it (don't create new components)
- If you find a section that exists but isn't in the spec, leave it but ensure it follows the container pattern
- Prefer Tailwind classes over inline styles. Use arbitrary values `[]` only when Tailwind doesn't have the exact value
- After making changes to a file, save and move to the next — don't batch all changes at the end
