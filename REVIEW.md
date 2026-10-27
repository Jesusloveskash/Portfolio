# Kash OS — ready for owner review

The replacement is on **kash-os** only. Main and the existing GitHub Pages source are unchanged. This is not a production deployment.

![Kash OS, day](review/desktop-day.png)

[See a case study](review/case-study.png) · [Night mode](review/desktop-night.png) · [Dark mode](review/desktop-dark.png) · [Phone launcher](review/mobile.png) · [Phone app](review/mobile-app.png)

## Try it

Download the **kash-os branch** ZIP from GitHub, extract it, and open Terminal in that extracted folder. Run:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000` in your browser. Node 20+ required. Do not double-click index.html; the app uses JavaScript modules and needs a local HTTP server.

Start with Projects, then open Kash.txt, Field Notes, or the Whiteboard. Ctrl/Cmd+K searches. Minimize a window and restore it from the dock. Try themes in Personalize. Music attempts to start on arrival (or first interaction if blocked), loops, and has a persistent pause control; FAQ provides searchable, categorized answers and links to relevant work. The voice feature and generated clip have been removed.

[Text-only FAQ](review/faq.png) · [Phone FAQ](review/faq-mobile.png)

[Email-a-time calendar](review/calendar.png) · [Travel Journal](review/travel.png)

## Review points

- Illustrated likeness, Pip, original app icons, and background art.
- Cinderella and FreeNow demo descriptions and their in-development limits/attribution.
- Calendar email drafts (proposals, not bookings), looping soundtrack, and curated Travel Journal.
- All reported metrics remain qualified rather than independently verified.
- Phone-free web résumé preserves qualifications; the private original upload is untouched.
- Client-facing positioning, travel personality, and the balance of professional proof with side quests.

No booking notifications, commercial songs, phone contact links, tracking, transcript, private travel itinerary, or invented project demos are included.

## Validation

Frozen dependency installation, build, content/privacy audit, and syntax checks pass. Browser suite: 19 verification groups including all 21 applications, all-app automated WCAG AA checks, Day/Night/Dark desktop checks, mobile Projects accessibility, nine viewport sizes, window management, search, persistent notes, folders, game, original audio, companion, malformed storage, and public route checks. Clean review screenshots additionally verify that companion bubbles stay clear of phone app content.

See [TEST_REPORT.md](TEST_REPORT.md), [CLAIM_LEDGER.md](CLAIM_LEDGER.md), and [ASSET_MANIFEST.md](ASSET_MANIFEST.md). Automated audits supplement, rather than constitute, a complete human accessibility certification. Speech output varies by browser/device; full text is always available.

After owner approval, merge/release can be a separate step. No public replacement URL is claimed yet.

## Owner-supplied photographs — October 27 update

Three supplied photographs are included unchanged: Cal Hacks in Field Notes and its article, London and Prague in the Travel Journal. Travel captions describe visible locations without inventing additional stories. Full photographs retain their original framing and use descriptive alt text. Development branch only; no public deployment.

Added three more owner-supplied, unchanged travel photos: Highland cow in Scotland (gallery and Scotland story), Cristo Rei in Almada, Portugal, and Eiffel Tower in Paris. Captions describe visible scenes without adding dates or invented experiences.

Added owner-supplied Open Intelligence Summit and FDE event photos to Field Notes, with neutral event labels and no speaker/organizer or sponsor affiliation claims. Added the supplied Campanile portrait to Kash.txt. All three photographs retain original framing.

Added the owner-supplied podium photograph to Field Notes, titled “Taking the mic.” No unverified event name, date, research topic or audience claim is attached. Original photograph retained.
