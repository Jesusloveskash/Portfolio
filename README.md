# Kash OS

An original interactive personal desktop for **Kash Vinayak**: Berkeley Data Science student, builder, researcher, communicator, and explorer. Review build on `kash-os`; **do not merge to main or deploy the replacement without Kash’s review**.

[Review screenshots and the build](REVIEW.md) · [Test evidence](TEST_REPORT.md)

## Run locally

Node.js 20 or newer. In this checkout:

```sh
npm ci
npm run dev
```

Use the local server at port 3000; override with `PORT`. ES modules require HTTP serving: **do not double-click index.html**. On a Mac after downloading/extracting this branch, open Terminal in the extracted directory and run the commands above, then visit `http://localhost:3000` in your browser.

No backend, credentials, external APIs, tracking, or runtime package dependencies. Fonts, images, and music are self-hosted. Development dependencies are only for browser validation.

## Validate and package

```sh
npm run check
npm run build
npm test
# Optional packaged /Portfolio/ check (Python 3 required for its local static server):
npm run test:release
npm run test:faq
```

`npm run build` regenerates the three crawlable field notes and SEO files, audits content/identity, and prepares `dist/` containing only the static site. It does not publish. `npm test` launches its own local server and Chromium, exercises the actual workflow, runs axe accessibility checks, and saves current screenshots/results in `/tmp/kash-os-qa`. System Chromium defaults to `/usr/bin/chromium`; override `CHROMIUM_PATH` on other machines, or install Playwright Chromium and set its executable path. Tests require a working browser. They cover nine viewports from 320×568 through 1920×1080.

## What’s inside

20 applications: Projects, Experience, Journey, Field Notes, Contact, Proof, Kash Browser, Systems, Kash.txt, Case Files, Achievements, Calendar, FAQ, Whiteboard, Side Quest game, Personalize, Music, Reading Room, and All Apps. Draggable/minimizable/maximizable windows, dock restore, keyboard search, three themes, persistent notes, resettable layouts, and Pip the original companion.

- `content/owner-profile.js`: canonical biography, projects, résumé sources, evidence qualifications, stories, FAQ answers, links, and working method.
- `content/apps.js`: launcher and dock registry.
- `index.html`, `style.css`, `script.js`: first-paint desktop, styling, and interaction/window manager.
- `public/assets/`: local fonts/licenses, generated illustration sheets, original music, supplied résumé.
- `blog/`: generated standalone accessible articles, available without opening a desktop window.
- `tools/`: claim/identity audit, static packaging, article generator, original music source.

## Controls

Click/tap an app to open it. Window controls: × close, − minimize, □ maximize/restore. Minimized apps reopen from the dock. Desktop windows drag by title bar; focus a title bar and use Alt+arrows to move with the keyboard. Escape closes the focused app. Ctrl/Cmd+K opens search; arrow keys and Enter choose a result. Desktop app icons and Daily Transmission can move within a safe range; reset in Personalize. Phone layouts use predictable app grids and full-screen sheets.

Pip can be clicked, moved with arrow keys while focused, or dragged on desktop. Phone uses tap only. Settings includes moods, comments toggle, and position reset. A few extra moods reuse the four original illustrated poses; no claim that nine separate images exist.

Whiteboard notes can be added/edited/deleted, dragged on desktop, or moved with labeled arrow buttons. Notes are local-only, capped at 400 characters and 30 notes, never transmitted to Kash. Reset and clear-data actions are available.

## FAQ and music

The text-only FAQ replaces the removed voice feature. “Quick questions?” opens it from the desktop. Search questions, filter by Work/Projects/About me/Contact, expand/collapse answers, or follow a related project/contact link. Questions and answers live in `ownerProfile.faq`. There is no voice model, narration file, microphone, speech service, or chatbot in the site.

Music contains two original 32-second synthesized instrumental sketches, no samples or commercial songs, released under CC0. Play/pause, previous/next, seek, volume, and failure states work without autoplay. Closing the player leaves explicitly started music playing; reopen and Pause to stop. Only volume persists, never forced playback. Music sources: `tools/compose_music.py`; rebuilding audio requires Python 3 and ffmpeg, ordinary development does not.

## Accuracy and privacy

See `CLAIM_LEDGER.md`, `ASSET_MANIFEST.md`, `PERSONALIZATION_AUDIT.md`, `BASELINE_INVENTORY.md`, and `BUILD_CONTRACT.md`. Metrics are résumé-reported and pending independent verification. No private employer data, unsupported business outcomes, fabricated testimonials, booking pings, student identifiers, future travel plans, or transcript are included. The downloadable résumé is a privacy-safe web copy: only the phone number is redacted to honor the owner’s no-public-phone preference. The source upload is unchanged. Older private source documents are not packaged.

No approved public demos/repositories for individual employer projects were supplied; none are invented. The external journal reference is labeled as owner-supplied with unverified remote availability. No services are being sold, so there is no ProfessionalService schema or booking form.

## Review and release

Repository: https://github.com/Jesusloveskash/Portfolio, branch `kash-os`. Original main stays intact. Final owner approval is required for the illustrated likeness/assets, content, and replacement release. No public preview or production deployment is performed by this build.

After approval, publish `dist/` using GitHub Pages or merge the reviewed site to the configured Pages source. Canonical base is `https://jesusloveskash.github.io/Portfolio/`; assets use relative paths so the project subdirectory works. Keep `.nojekyll` in the published directory. Check the live site, résumé, article routes, FAQ navigation and music after deployment. Custom domain, DNS, and a real AI voice-provider integration are not configured.

## License

Application code: MIT, see LICENSE. Original synthesized music: CC0. Font licenses are bundled. Original generated illustrations are provided for Kash’s portfolio and await her final review; source-generation provenance is documented in ASSET_MANIFEST.md. The résumé, personal likeness, and biographical content are not licensed for unrelated impersonation or reuse.
