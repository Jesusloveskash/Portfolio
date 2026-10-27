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
- Scripted voice topic answers and honest unsupported-question fallback.
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

`npm run test:release` serves the packaged dist site locally under `/Portfolio/`, matching the GitHub Pages project path. It verifies module/asset loading, static article navigation and OS hash restoration, search arrow navigation, browser refresh, speech read/stop/fallback controls, and audio volume/seek. This is a local release simulation, not a public deployment.

## Earlier failures resolved

A generic ARIA label on the window layer was given a proper region role; a small accent label was darkened for contrast; scrollable text-only windows were made keyboard-focusable; whiteboard movement controls were enlarged; narrow layouts and low-height desktop composition were corrected. Test harness issues (browser-context requirement, hidden-nav selector, numeric attribute selector) were fixed without weakening behavior assertions.

## Boundaries / not claimed

- Production deployment and live GitHub Pages verification are intentionally not performed: owner review is required.
- No external journal/social availability, article attribution, peer-review status, or independent résumé metrics are claimed verified. External links are user-supplied and qualified.
- Browser voice support and voice-service availability vary; the scripted text fallback is verified. No actual generative voice agent, microphone, or voice clone exists.
- File-protocol opening is not supported for the ES-module build; use the HTTP server.
- Automated axe checks and keyboard workflows do not replace a comprehensive screen-reader/manual accessibility audit. CSS viewport reflow approximates browser 200% zoom.
- No unavailable demos, booking service, backend form delivery, or analytics were simulated.
