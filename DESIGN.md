# alizee.me — Visual direction, second pass

## Goals
Clean, light blue-white, visually distinctive through actual engineering work. Do not replace the existing home hero or the animated neural network. Keep the English/French translation system, routes, and content.

## Design decisions
- No gradients below the homepage hero; no decorative color stripes or mismatched colored links.
- Page sections are composed using text hierarchy, breathing room, image scale and fine dividing rules, not cards and shadows.
- Featured work is image-led with original images and existing carousel controls. Avoid adding ornamental scroll effects before a concrete use case exists.
- Professional Experience is a scan-friendly five-entry editorial index: original logos and descriptions; one consistent link treatment.
- About uses a compact two-column composition rather than a colored left bar.
- My Work uses horizontal navigable rows instead of three feature cards.
- Collaboration area uses a flat navy canvas and understated text action.
- Backgrounds: #f3f6f8, #edf3f7 and #1c3047. Text: #172c43, #4d6073. Accent: #235c91.

## Implementation scope
Only `app/page.tsx` and `app/work-experience/page.tsx` changed. Existing hero, neural network components and translation components are not modified. Other detail pages remain unchanged; those can be addressed after this pass is reviewed.

## Verification checklist
Check existing project carousel image/video handling and links; five work-experience routes; mobile layout; FR translation; keyboard focus; reduced motion; project images; Next.js build before deployment.
