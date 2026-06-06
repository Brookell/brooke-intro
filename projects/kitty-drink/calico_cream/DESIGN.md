# Design System Strategy: The Tactile Brew

## 1. Overview & Creative North Star: "The Curated Comfort"
This design system departs from the sterile, rigid layouts of traditional utility apps to embrace a "Curated Comfort" aesthetic. Our North Star is the atmosphere of a high-end, independent boutique café—where every element feels organic, intentional, and warm. 

To move beyond a "generic kawaii" look, we employ **Organic Asymmetry**. We challenge the standard 8px grid by allowing elements to overlap slightly, using varying border radii, and treating the screen as a canvas for "latte art" compositions rather than a spreadsheet. By pairing high-end editorial typography with plush, oversized corner radii, we create a signature identity that feels both premium and approachable.

---

## 2. Color Philosophy: Tonal Immersion
The palette is rooted in earthy organics. We avoid harsh whites and blacks, opting instead for a spectrum of creams (`surface`) and espresso tones (`primary`).

*   **The "No-Line" Rule:** To maintain a soft, inviting feel, **1px solid borders are strictly prohibited** for sectioning. Boundaries must be defined solely through background shifts. For example, a `surface-container-low` card should sit on a `surface` background, creating a soft "puddle" effect rather than a hard edge.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers—like frothed milk atop a latte. Use the `surface-container` tiers (Lowest to Highest) to create depth. An inner content area should use a tier slightly higher (e.g., `surface-container-high`) than its parent container to signify importance.
*   **The "Glass & Gradient" Rule:** Floating elements, such as navigation bars or modal headers, should utilize Glassmorphism. Use `surface` colors at 80% opacity with a heavy `backdrop-blur` to allow the warm background tones to bleed through.
*   **Signature Textures:** For primary CTAs or hero sections, use subtle linear gradients transitioning from `primary` (#6f5b40) to `primary-container` (#bda485). This adds a "roasted" depth that flat colors cannot replicate.

---

## 3. Typography: The Friendly Editorial
We utilize **Plus Jakarta Sans** for its unique balance of modern geometric precision and friendly, rounded terminals.

*   **Display & Headline:** Use `display-lg` and `headline-lg` with tight letter-spacing (-0.02em) to create a bold, "hug-like" impact. These should feel like a signature on the page.
*   **Body & Labels:** Use `body-md` for legibility, but increase line-height (1.6) to provide "breathing room" consistent with our cozy atmosphere. 
*   **Hierarchy as Personality:** Titles should feel authoritative yet soft. By using `title-lg` in `on-primary-container`, we provide a sophisticated contrast against the cream backgrounds, moving away from standard black text.

---

## 4. Elevation & Depth: Tonal Layering
In this system, "up" does not mean "shadowed." It means "brighter" or "more textured."

*   **The Layering Principle:** Achieve depth by "stacking" surface tokens. Place a `surface-container-lowest` card on a `surface-container-low` background to create a soft, natural lift.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Purr" notification), shadows must be extra-diffused. Use a blur of 32px or higher at 6% opacity. The shadow color must be a tinted version of `primary` (#6f5b40), never a neutral grey.
*   **The "Ghost Border" Fallback:** For accessibility in input fields, use the "Ghost Border"—the `outline-variant` token at 15% opacity. Never use a 100% opaque border.
*   **Glassmorphism:** Use semi-transparent `surface-container` colors with a 20px backdrop-blur for elements that sit above the main content flow.

---

## 5. Components: Plush & Playful
All components must adhere to the rounding scale, primarily utilizing `xl` (3rem) and `full` (9999px) for a "squishy" tactile feel.

*   **Buttons:**
    *   **Primary:** Pill-shaped (`full`), using the `primary` to `primary-container` gradient. 
    *   **Secondary:** `surface-container-high` background with `on-secondary-container` text. Large `xl` corners.
*   **Cards:** Forbid divider lines. Separate content using vertical white space or a subtle shift to `surface-container-highest` for internal sections. Use `xl` (3rem) corners for the main container.
*   **Input Fields:** Use `surface-container-low` with a `full` radius. The focus state should transition the background to `surface-container-high` rather than changing the border color.
*   **Chips:** Always `full` radius. Use `secondary-container` for active states to provide a warm, "toasted" highlight.
*   **Signature Component: The "Froth" Tracker:** A custom progress bar that is extra thick (24px height) with `full` rounded ends. The unfilled track should be `surface-variant`, and the filled portion should have a subtle "bubble" pattern overlay.
*   **Cat-Themed Icons:** Icons should be thick-stroked (2px minimum) with rounded caps and joins. Incorporate "ear" motifs or "tail" curves into the iconography to reinforce the playful theme without being distracting.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Intentional Asymmetry:** Align a header to the left while a decorative cat-themed element sits slightly "off-grid" to the right.
*   **Embrace Whitespace:** Let the "cream" (`surface`) breathe. This is a cozy app; it shouldn't feel crowded.
*   **Nesting:** Put `surface-container-lowest` elements inside `surface-container` wrappers to create a sense of physical objects resting in a tray.

### Don’t:
*   **Don't use 1px lines:** Ever. Use tonal shifts or spacing to separate ideas.
*   **Don't use pure black:** Use `on-surface` (#1c1c19) or `primary` (#6f5b40) for text to keep the "warmth" intact.
*   **Don't use sharp corners:** The `none`, `sm`, and `md` tokens should be used sparingly for internal sub-elements only. The primary user interface should feel soft to the touch (xl to full).
*   **Don't use standard drop shadows:** Avoid the "floating on a void" look. If it doesn't look like it's resting on a soft surface, the shadow is too dark.