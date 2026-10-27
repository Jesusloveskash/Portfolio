# Kash OS verification report

Executed in the cloud workspace with Node 24.19.0 and system Chromium. Tests use the actual local server, real app behavior, and axe-core; no tests are disabled or assertions removed.

## Passed

- `npm ci --ignore-scripts --no-audit --no-fund --cache /tmp/kash-npm-cache`: lockfile installation.
- `npm run check`: JS syntax, identity/claim/privacy audit, required assets.
- `npm run build`: generated article routes and sitemap, runtime source scan, static packaging, packaged-output identity scan.
- `npm test`: 19 verification groups, results in review/test-results.json.
- All 20 apps open, contain useful content, and close.
- All 20 app bodies pass the selected WCAG A/AA axe rules.
- Drag/maximize/restore/minimize, dock recovery, focus-return, and Escape.
- Search finds case content; keyboard shortcut/arrows/Enter/Escape.
- Sticky creation, literal/safe visitor text, editing, movement, reload persistence, deletion, reset, malformed-storage recovery.
- Case folders, breadcrumbs/history, preview, list/card views, and back to case listing.
- Browser bookmark navigation, back, forward, refresh/home behavior.
- Searchable FAQ questions, category filters, accordion answers, expand-all, and honest empty states.
- Original music actual playback, pause, previous, next; playback starts only with user interaction.
- Companion click/mood, keyboard position change, bounds/reset; supplemental screenshot run checks no bubble over phone app content.
- Desktop icon movement, local persistence/reload, and reset.
- Day/Night/Dark desktop automated accessibility checks; mobile desktop and Projects accessibility.
- Nine viewport sizes: 320×568, 360×800, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080. No horizontal body/app overflow, windows within bounds, case content reachable. Desktop composition fits one screen at desktop sizes; tablet/phone launcher scrolls internally.
- Reduced motion and 200%-equivalent viewport reflow.
- Public page, scripts, fonts, résumé, imagery, music, three blog routes, robots and sitemap work locally.
- Local server blocks Git metadata, private implementation/config routes, and missing files.
- No uncaught browser exceptions or missing local browser assets.
- PDF text inspection: public web résumé has no phone number; approved email and experience remain. Original upload unmodified.

## Supplemental packaged-release verification

`npm run test:release` serves the packaged dist site locally under `/Portfolio/`, matching the GitHub Pages project path. It verifies module/asset loading, static article navigation and OS hash restoration, search arrow navigation, browser refresh, text-only FAQ search and answers, and audio volume/seek. This is a local release simulation, not a public deployment.

## Earlier failures resolved

A generic ARIA label on the window layer was given a proper region role; a small accent label was darkened for contrast; scrollable text-only windows were made keyboard-focusable; whiteboard movement controls were enlarged; narrow layouts and low-height desktop composition were corrected. Test harness issues (browser-context requirement, hidden-nav selector, numeric attribute selector) were fixed without weakening behavior assertions.

## Boundaries / not claimed

- Production deployment and live GitHub Pages verification are intentionally not performed: owner review is required.
- No external journal/social availability, article attribution, peer-review status, or independent résumé metrics are claimed verified. External links are user-supplied and qualified.
- The voice feature has been removed. The FAQ is text-only, with no microphone, agent, or narration. Original background music remains opt-in.
- File-protocol opening is not supported for the ES-module build; use the HTTP server.
- Automated axe checks and keyboard workflows do not replace a comprehensive screen-reader/manual accessibility audit. CSS viewport reflow approximates browser 200% zoom.
- No unavailable demos, booking service, backend form delivery, or analytics were simulated.

## Berkeley wallpaper revision

Owner requested the Campanile/campus in the existing warm Bay Area panorama. Revised wallpaper generated natively, optimized, and inspected in Day/Night/Dark desktop and phone screenshots. The phone crop retains Berkeley. `npm run build`, `npm run check`, and the clean desktop/mobile review screenshot script pass after the asset-only revision. Existing app behavior is unchanged; the full interaction suite was not redundantly rerun for this wallpaper change.

## FAQ replacement

The owner rejected the voice feature. Removed the generated MP3, narration/player, related styling and tests, voice screenshots, and the launcher. A “Quick questions?” launcher opens a text-only FAQ with eight canonical questions, categories, search, keyboard-native accordions, expand/collapse, related app links, and a contact fallback.

`npm run check`, `npm run build`, `npm run test:faq`, `npm run test:release`, and the full 19-group browser suite pass. FAQ-specific checks verify search/categories, keyboard Enter, expand/collapse, empty results, related contact links, desktop and narrow mobile layouts, no voice requests or player, and a missing generated clip in both the served site and packaged output. All 20 app bodies pass the automated accessibility audit.
