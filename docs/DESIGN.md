---
name: Clima Certo
description: A mid-century Brazilian magazine appliance ad, drawn in cutaway and printed on turquoise.
colors:
  field: "#1f6f6b"
  field-deep: "#1a5f5b"
  coral: "#e2553b"
  mustard: "#e8b23a"
  lettering: "#f2c454"
  copper: "#c8743f"
  ink: "#1d2326"
  ink-soft: "#3d4a4c"
  paper: "#f3f4f1"
  enamel: "#e2e6e3"
  on-field-soft: "#d3e6e2"
  display-glow: "#8fd6cc"
typography:
  display:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(3.2rem, 1rem + 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  headline:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 4vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.01em"
  headline-symptoms:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 1.4rem + 4vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline-symptoms-phone:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 4vw, 2.8rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  title:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 1.4rem + 2.6vw, 4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  step-numeral:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 3rem + 3vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.8
    fontFeature: "tnum"
  rail-note:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "clamp(1.7rem, 1.2rem + 1vw, 2.3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.01em"
  coupon-title-full:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "2.2rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.03em"
  step-title:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.02em"
  coupon-title:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.03em"
  coupon-title-phone:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.03em"
  callout-numeral:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tnum"
  button-lg:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  button:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  index-head:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    letterSpacing: "0.06em"
  button-bar:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  callout:
    fontFamily: "League Gothic, Arial Narrow, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.05em"
  lettered:
    fontFamily: "Yellowtail, cursive"
    fontSize: "clamp(2.3rem, 1rem + 4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
  wordmark:
    fontFamily: "Yellowtail, cursive"
    fontSize: "1.85rem"
    fontWeight: 400
    lineHeight: 1
  wordmark-foot:
    fontFamily: "Yellowtail, cursive"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1
  wordmark-phone:
    fontFamily: "Yellowtail, cursive"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1
  body-lg:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.22vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 0.84rem + 0.18vw, 0.95rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Libre Franklin, system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.82rem)"
    fontWeight: 600
    letterSpacing: "0.02em"
rounded:
  print: "4px"
  tag: "3px"
  appliance: "30px"
  pill: "50%"
spacing:
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  gutter: "clamp(1.25rem, 5vw, 5.5rem)"
  section: "clamp(4.5rem, 9vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.print}"
    padding: "0.7rem 1.3rem 0.62rem"
  button-primary-hover:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.ink}"
  button-primary-hover-on-mustard:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button-bar}"
    rounded: "{rounded.print}"
    padding: "0.5rem 0.95rem 0.42rem"
  button-bar-hover:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.ink}"
  button-lg:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.print}"
    padding: "0.85rem 1.7rem 0.75rem"
  coupon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.print}"
    padding: "1.25rem 1.4rem 1.3rem"
  coupon-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0"
    height: "2.6rem"
  choice:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.print}"
    padding: "0.4rem 0.75rem"
    height: "2.4rem"
  choice-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  callout-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.callout}"
    rounded: "{rounded.tag}"
    padding: "6px 10px 4px"
  step-text:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "2rem 1.5rem"
    width: "clamp(13rem, 16vw, 15.5rem)"
  step-scene:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    padding: "2rem 1.5rem"
    width: "clamp(22rem, 34vw, 31rem)"
  step-numeral:
    textColor: "{colors.field}"
    typography: "{typography.step-numeral}"
  step-callout-numeral:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.callout-numeral}"
    rounded: "{rounded.pill}"
    size: "2.6rem"
  top-bar:
    backgroundColor: "{colors.field}"
    textColor: "{colors.paper}"
    padding: "0.65rem clamp(1.25rem, 5vw, 5.5rem)"
---

# Design System: Clima Certo

## Overview

**Creative North Star: "Anúncio em corte"**

The page is a Brazilian appliance advertisement from a 1950s-60s magazine, printed on a turquoise field and drawn in cutaway. One split air conditioner, drawn flat in enamel white with ink outlines and halftone dot shading, is the hero picture. It works, it shows its fault, it comes apart part by part with a printed callout pointing at each piece, and it goes back together. Everything else (type, controls, rules, the visit strip) is set as print: condensed caps, ruled lines, enamel plates, dashed mail-in coupons.

Density is low and the tone is calm. Colour arrives as flat printed areas, never as glow or gradient light: a turquoise field for the story acts, a cool white page for the visit, a mustard page for the coupon. Depth comes from the drawing conventions of the period (outline weight, halftone, phantom lines), not from shadows. Motion is scroll-only and smoothed; parts travel on an exponential ease and seat, copy crossfades in place, one thing appears only after the last has left, and a single copper line draws itself down the page linking the acts.

The system rejects the blue-and-white "assistência técnica" site (stock technician, snowflake icons) and the dark, glowing tech landing.

**Key Characteristics:**
- Flat printed colour fields, one per act: turquoise, cool white, mustard.
- Drawn pictures only: inline SVG outlined in ink and shaded with halftone dots.
- Condensed caps for everything that announces; script reserved for the wordmark and one lettered phrase.
- Controls are mail-in coupons: dashed border, scissors mark, ruled answer lines.
- Coral marks only what is happening now.
- A continuous copper line runs down the page.

## Colors

A printed four-colour palette: turquoise field, ink, cool white paper, with mustard and copper as spot colours and coral held back for the present moment.

### Primary
- **Printed Turquoise** (field): the page ground for the hero, symptoms and teardown acts, the top bar, the theme colour and favicon. On paper it is a spot ink: the large typeset step numerals, the closing rail note, fills in the step scenes.
- **Turquoise Deep** (field-deep): engine surface tone one step under the field.

### Secondary
- **Spot Mustard** (mustard): the coupon page's ground, the hover fill of every button outside that page, selection highlight, the checked-choice dot and the trace lines on the drawn circuit board.
- **Lettering Gold** (lettering): the script hero phrase and the bold "Quando chamar:" lead-ins on the field. A warmer, lighter cousin of mustard for type on turquoise.

### Tertiary
- **Opening Coral** (coral): the outline of the part that is opening now, the current-step dot in the parts index, and the attention state of a coupon line (focus and invalid underline, choice focus ring).
- **Pipe Copper** (copper): the copper line down the page, and the refrigerant pipes and coil returns in the drawings.

### Neutral
- **Print Ink** (ink): every outline, rule, border, button fill and the text on paper and mustard.
- **Soft Ink** (ink-soft): secondary text on paper, enamel and mustard (field labels, status lines, step descriptions).
- **Cool Paper** (paper): the visit page, coupon card, callout tags, the enamel-white cover of the unit. Near-zero chroma.
- **Enamel** (enamel): the ground of the wide scene plates in the visit strip, filter frames and flap in the drawing, hover fill on coupon choices.
- **Pale Teal** (on-field-soft): body text and secondary UI on the turquoise field.
- **Display Glow** (display-glow): the temperature digits and LED on the unit's own display, inside the drawing only.

Drawing-only greys (#9aa6a6 chassis, #5c6869 interior, #8d9898 drum, #2a3336 vent, #c3cbca fins) and the board green (#2f6b4f) live inside the SVG illustration and are not UI colours.

### Named Rules
**The Present Tense Rule.** Coral marks what is happening now and nothing else: the part opening, the step you are on, the field you are typing in. It never fills a surface, a button or a heading, and it is never a hover colour.

**The Printed Field Rule.** Each act sits on one flat printed colour. No gradients across a field except the scrim that keeps teardown copy legible over the drawing, and no glow.

## Typography

**Display Font:** League Gothic (with Arial Narrow, sans-serif)
**Body Font:** Libre Franklin (with system-ui, sans-serif)
**Lettered Font:** Yellowtail (with cursive)

**Character:** Condensed advertising caps for everything that announces, a sober grotesque for everything that explains, and a sign-painter's script used only for the name and one phrase. All fonts are self-hosted woff2.

### Hierarchy
The ramp is set per role, not on a modular scale. Fluid clamps carry the scene headings and body; fixed rem sizes carry print furniture (buttons, coupon titles, step titles, wordmark) that should not swing with the viewport. Every size below is in the frontmatter and in use.

League Gothic, weight 400, uppercase:
- **Display** (clamp(3.2rem, 1rem + 8vw, 6rem), 0.9): the hero "AR-CONDICIONADO".
- **Step numeral** (clamp(4.5rem, 3rem + 3vw, 7rem), 0.8, tabular): the large turquoise figure that heads each typeset step in the visit strip.
- **Headline** (clamp(3rem, 1.6rem + 4vw, 5.6rem), 0.92): visit and coupon act titles, teardown intro and outro.
- **Symptoms headline** (clamp(2.6rem, 1.4rem + 4vw, 5rem), 0.95; on phones clamp(2.1rem, 1.3rem + 4vw, 2.8rem)): the three-symptom line.
- **Title** (clamp(2.4rem, 1.4rem + 2.6vw, 4rem), 0.95): one per service panel in the teardown.
- **Rail note** (clamp(1.7rem, 1.2rem + 1vw, 2.3rem), 1.05, turquoise): the closing line of the visit strip.
- **Coupon title, full** (2.2rem) and **coupon title** (1.7rem; 1.45rem on phones), 0.03em.
- **Step title** (2rem, 0.02em).
- **Callout numeral** (1.7rem, tabular): the circled figure beside a scene step's heading.
- **Button large** (1.6rem), **button** (1.35rem), **bar button** (1.15rem), all 0.04em.
- **Index head** (1.2rem, 0.06em): the "Peças" heading over the parts index.
- **Callout** (19px in drawing units, 0.05em): tags pinned to parts of the unit; scales with the rig.

Yellowtail, weight 400:
- **Lettered** (clamp(2.3rem, 1rem + 4vw, 4rem), 1.1): the hero phrase "no clima certo." in Lettering Gold.
- **Wordmark** (1.85rem in the bar, 1.6rem on phones, 1.7rem in the footer).

Libre Franklin, sentence case:
- **Body large** (400, clamp(1.2rem, 1.1rem + 0.5vw, 1.5rem), 1.45 to 1.5): act intros and symptom text, 28ch to 38ch.
- **Body** (400, clamp(1rem, 0.96rem + 0.22vw, 1.125rem), 1.55): panel and hero copy, max 40ch, pretty wrap.
- **Small** (400, clamp(0.875rem, 0.84rem + 0.18vw, 0.95rem), 1.5 to 1.55): step descriptions, "Quando chamar" notes, nav links (500), choices, status lines.
- **Label** (600, clamp(0.75rem, 0.72rem + 0.15vw, 0.82rem), 0.02em): coupon field names and the choices legend.

### Named Rules
**The Two Signatures Rule.** Yellowtail appears only as the Clima Certo wordmark (bar, footer, on the drawn unit) and in one lettered hero phrase. Never for headings, buttons or labels.

**The Caps Carry Rule.** Every heading, numeral and button is League Gothic uppercase at weight 400; hierarchy comes from size alone. Libre Franklin is never set in caps.

## Layout

Each act is a full-viewport scene from the scroll engine: the hero pins for 1.5 viewports, symptoms flow at 140svh, the teardown pins for 8 viewports, the visit pans horizontally across 4.6 viewports, and the coupon act flows. The fixed rig holds the unit behind the copy for the whole page; copy sits at the left gutter (hero up to min(36rem, 46vw), teardown panels min(27rem, 31vw)) with the unit to the right.

Side gutters are fluid (spacing.gutter) and section padding is spacing.section. Internal rhythm uses the 0.5 / 0.75 / 1 / 1.5 / 2 / 3rem steps.

The visit is one horizontal printed band with an uneven rhythm: a lead column, then narrow typeset steps (clamp(13rem, 16vw, 15.5rem)) alternating with two wide scene plates (clamp(22rem, 34vw, 31rem)) for the two moments the brand rests on, diagnosis and the final test, then a closing note in turquoise caps. The coupon act is a two-column grid (0.9fr / 1.1fr) that becomes one column at 860px.

Breakpoints: at 1100px the parts index hides. At 860px the bar drops its nav links, hero and teardown copy move to the bottom of the viewport under the unit, the teardown scrim turns to a bottom-up fade, symptoms copy starts at 36svh, typeset steps size to min(58vw, 14rem) and scene plates to min(82vw, 21rem), coupons go single column and their buttons go full width. At 860px wide and under 700px tall the hero subtext and "Quando chamar" notes hide.

The teardown text block never moves: panels are stacked at the same position and crossfade in place as each part opens.

## Elevation & Depth

The system is flat. There are no drop shadows on UI. Depth is drawn: heavier outlines for nearer objects, halftone dot patterns (7px and 5px ink dots at 30 to 38% opacity) for shading, hatch and mesh patterns for fins and filters, and a 3D tilt on the rig as the unit opens. The only shadows in the stylesheet are an inset ink keyline on the copper pipe and a 2px coral underline thickening on a focused coupon line; neither creates elevation. A faint engine grain sits over everything at 6% opacity.

### Named Rules
**The Phantom Line Rule.** When a part is not the one opening, only the assembly's outer silhouette (cover and chassis outlines) is redrawn as a dashed phantom line: paper at 55%, 2.4px, dash 9 6, fills, inner paths and text removed. Inner parts recede to a 1.4px solid hairline at 16%. Never show inactive parts as translucent or blurred layers.

**The One Then The Other Rule.** A thing leaves before its successor arrives: a part's art fades out fully before its phantom fades in, and a callout tag is gone before the next part is announced. Never hold two half-visible states at once.

**The Halftone Shade Rule.** Shade with printed dots, not gradients or shadows.

## Shapes

Corners are small and printed: 4px on buttons, coupons, choices and the focus ring; 3px on callout tags; 0 on coupon answer lines and the visit plates. Round shapes are reserved for markers: the circled callout numerals, the parts-index dots, the leader-stem dot under each callout, and choice dots. The appliance itself is the one soft form (30px corners on the cover).

Borders are ink and do the work shadows would: 2px solid on buttons and choices, 2px dashed on coupons, 2px ink rule under the bar and on top of each paper or mustard act, 3px top and bottom rules on the visit band with 1px hairlines between columns.

## Components

### Buttons
Printed caps on an ink block; steady and plain.
- **Shape:** gently squared (4px), 2px ink border.
- **Primary:** ink fill, paper text, button type, padding 0.7rem 1.3rem 0.62rem.
- **Hover / Active:** fill turns mustard with ink text over 160ms; on the mustard page it turns paper instead. Active nudges down 1px. Disabled at 50% opacity.
- **Bar variant:** paper fill, ink text, bar-button type; hover mustard.
- **Large variant:** button-large type, padding 0.85rem 1.7rem 0.75rem; full width on phones.

### Coupon (signature)
The mail-in form, dashed and ready to cut.
- **Shape:** paper card, 2px dashed ink border, 4px corners, a 6px solid outline in the ground colour so the dashes sit on a clean margin.
- **Cut mark:** an inline SVG scissors on the top border, right side, knocked out of the dashes.
- **Title:** coupon title (mini) or coupon title full (closing act).
- **Answer lines:** no box; a 2px ink underline, transparent ground, 2.6rem min height, label in Soft Ink above.
- **Focus / Error:** the underline turns coral and thickens by 2px. No glow.
- **Mini** (hero): name and WhatsApp side by side, one button. **Full** (closing act): two-column grid with service choices, area and message spanning full width.

### Choices
- **Style:** 2px ink outline, 4px corners, Small type, with a round ink-outlined dot before the label.
- **State:** hover fills enamel; checked fills ink with paper text and a mustard dot; keyboard focus draws a coral ring 2px out.

### Callout Tag (signature)
Printed label pinned to a part of the unit, as in a period cutaway ad.
- Paper label, 2px ink border, 3px corners, callout type, all sizes divided by the rig scale so tags stay the same on screen.
- A 2px ink leader stem drops 30px from the label's left edge and ends in a 10px ink dot on the part's top edge. Labels sit in clear field above their part.
- The opening part also gets a 7px coral outline. A tag fades out fully before the next part is announced.

### Parts Index
- A right-aligned list of the six parts in Small type on Pale Teal, each with a 10px ring marker, under an index-head label.
- The next part to open is announced before it moves: its text brightens and its ring turns dashed. The current part's ring fills coral with an ink edge and its label goes semibold. Hidden below 1100px.

### Visit Band (signature)
One continuous printed band, ruled 3px top and bottom, columns split by 1px hairlines, in two cell types:
- **Typeset step:** narrow paper cell. A large turquoise step numeral sits at the top; the step title and Small body in Soft Ink sit at the bottom.
- **Scene plate:** wide enamel cell holding a drawn scene (ink stroke 2.5, round caps and joins, halftone and spot fills: a manifold gauge set for diagnosis, the split unit with a probe thermometer for the test). Beneath it, a 2.6rem circled callout numeral (paper, 2px ink ring) beside the step title, then the body.
- **Progress:** steps not yet reached recede only in picture and numeral, down to 35% opacity. Their text stays at full contrast.

### Copper Line (signature)
- One 6px copper bar with an inset ink keyline, set at 42% of the gutter from the left edge, running the full height of main behind the paper pages. A 2px dashed ink track shows where it will go; the copper fill scales down from the top with scroll progress.

### Navigation
- Fixed bar on the turquoise field with a 2px ink rule beneath; Yellowtail wordmark left; two text links (Small, 500) whose underline fades in on hover; a paper bar button right. On phones the links hide and the button stays.

## Do's and Don'ts

### Do:
- **Do** set each act on one flat printed ground: turquoise for the story, cool white for the visit, mustard for the coupon.
- **Do** draw illustrations as inline SVG in ink outline with halftone dot shading and the spot colours.
- **Do** use coral only for what is happening now: the opening part, the current step, the active coupon line.
- **Do** draw only the outer silhouette as a dashed phantom (dash 9 6) and let inner parts recede to a faint solid hairline.
- **Do** let one state leave fully before the next arrives.
- **Do** build forms as coupons: dashed ink border, scissors cut mark, underlined answer lines.
- **Do** keep text panels fixed and crossfade content in place; move the drawing, not the copy.
- **Do** dim progress through pictures and numerals only; keep reading text at full contrast.
- **Do** smooth scroll with Lenis (lerp 0.085) and seat moving parts on an exponential ease; keep reduced-motion users on settled states.

### Don't:
- **Don't** use blue-and-white "assistência técnica" styling, stock photography, snowflake icons or a smiling-technician image.
- **Don't** add drop shadows, glows or glassy translucency to show depth.
- **Don't** set Yellowtail anywhere but the wordmark and the one lettered hero phrase.
- **Don't** use coral as a fill, background, hover or decorative accent.
- **Don't** use bounce, jitter, or a staggered entrance on every section.
