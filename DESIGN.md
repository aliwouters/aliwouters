# alizee.me — V4 review checkpoint

Branch: redesign/v4-editorial. Local review only; no deployment or remote push.

## Direction
White and pale blue surfaces, navy text, consistent sans-serif typography, generous spacing and editorial rows. Original portrait and engineering media carry the identity. No ornamental gradients, glow, bento grids, or arbitrary decorative icons.

The homepage retains its animated neural network and uses a circular portrait on the right. Featured projects remain manually controlled. Section reveals respect reduced-motion preferences.

## Changes
- Shared desktop/mobile navigation across the site, with a Projects dropdown, active links, outside-click/Escape dismissal and a skip link.
- Project, research and community directories use consistent typographic rows. Experimental Design is reachable from the project directory and menu.
- Project details, community offshoots, research details and work experience pages share the white/soft-blue palette, readable headings and restrained borders. Original paragraphs, lists, project links and media remain.
- Resume restores original content, including all six certifications, with research in reverse chronological order and the plain title Resume.
- Resume download matches the supplied PDF byte-for-byte: SHA256 dd67a2ad721caf14c95c69bdcb543a32666e791e6a2e19d5861ccf201712176d.
- EN/FR choice persists between pages. Translation loading failures now expose a retry action. Actual French output could not be verified in this local preview because the external Google translation script did not load.
- Three.js viewers retain their original models and controls, with a model download fallback when WebGL is unavailable.
- The phosphene simulator retains its original external embed and source-code link.

## Validation
Production build succeeds with the repository's existing type/lint skipping configuration. Standalone TypeScript checking still reports three pre-existing Three.js typing errors; MATLAB project typing errors were repaired.

Desktop browser route checks covered project categories, research, community, resume and work experience pages without horizontal overflow. Local page/document links and project anchors resolved in a source-level audit. Original paragraphs, lists and local media references were compared against the pre-change source. Dropdown links, Escape dismissal, and persistent EN/FR selection were exercised.

Limitations: actual French translation, real phone viewport rendering, WebGL rendering and every external media source were not verified. The preview browser has no WebGL support, so model fallback behavior was checked instead. No deployment, merge or remote push was performed.

## References
https://impeccable.style/slop/
https://dev.to/laurilllll/is-your-website-ai-slop-how-to-tell-and-how-to-fix-it-1fn5
https://wearebraave.co/
https://neuralink.com/technology/

## Navigation and directory refinement
- Research, Work Experience, Projects and Community use identical split controls: section text opens the overview; its chevron opens the child-page list. Mobile uses the same groupings as expandable lists.
- Explicit Home links, linked parent breadcrumbs and persistent navigation keep return paths visible on long detail pages. Escape closes a dropdown and returns focus to its trigger; leaving a group or clicking outside closes it.
- Projects, Community, Work Experience and Research directories now pair their original entries with a sticky media preview that responds to pointer entry and keyboard focus. On narrow screens, each entry displays its own media inline. Original directory descriptions and destinations are retained.
- Actual project images and organization photographs replace text-only landing-page rows. Where no matching image exists, a text preview uses existing content rather than unrelated imagery.
- Verified the data-science detail-to-Home route, all four desktop disclosures, keyboard-driven preview changes and source-level directory content/media checks. Real mobile viewport QA remains unverified.

## V6 focused refinements
- Preserved the approved directories, homepage composition and portrait size.
- Neural edges/nodes now use lighter blue ink and avoid measured text/button bounds. Entire intersecting edges are omitted rather than clipped; animation and reduced-motion support remain.
- Desktop section words reveal child lists on hover; clicking a section word still opens its overview. Keyboard ArrowDown and the focusable disclosure control expose the same lists. Touch menus retain explicit controls. Anatomical Engineering is first in the Projects dropdown.
- Terminal pages now use plain sections and labelled notes instead of nested tinted panels, with consistent headings, contrast and text links. Media, project controls and content remain on those pages, except the two deliberate editorial revisions below.
- Psyonic was recomposed around actual responsibilities and original lab/product imagery. Generic promotional phrasing and duplicated role summaries were condensed; original project duties and external links remain.
- Experimental Design existed on main from the original repository initialization. The previous pass had promoted it in navigation. Its broad claims had no project-specific evidence; replaced them with five concrete MATLAB/Psychtoolbox experiments copied from the site's existing Computer Science content, preserving their original code links and videos. Fixed the faint-on-pale text across other detail pages as well.
- Browser checked homepage readability, active neural edges, keyboard-opened menu ordering, direct section navigation, Psyonic, Auli Tech and the rebuilt Experimental Design page. TypeScript still reports only the three previously recorded Three.js errors.

## V7 media and education refinement
- Anatomical Engineering is now first in the All Projects directory as well as its dropdown.
- Preview media uses the first project on each destination page: ankle exoskeleton, U-Net poster, phosphene simulator, Monster Maze ASCII game video, and audiovisual perception demo video. Preview videos are muted and respect reduced-motion preferences.
- Added the official Zili Lab banner and the user-supplied attribution to Dr. Zili Liu and Lucy Cui. Added UCLA Residential Life's Olympic Hall Makerspace team photo and identified the location accurately. Source links/credits are included on the pages; asset provenance is in public/images/sourced/SOURCES.md.
- Confirmed the original School Outreach page had no images. Added the Summer Discovery program logo sourced from its official website.
- Added official institutional logos alongside all formal education entries; restricted ceremonial seals were not substituted for these identity marks. Resume content remains unchanged.
- Replaced the resume's blob-generation download handler with a direct PDF download link. The served PDF opened successfully in the browser's PDF viewer and its local bytes match the supplied attachment (SHA256 recorded above). The browser automation's download events timed out, so a save-to-disk completion could not be verified here.
- All four anatomical model files have valid GLB headers and expected lengths. Existing OrbitControls still enable rotation, zoom and pan. GPU/WebGL interaction remains unverified in this preview environment.
