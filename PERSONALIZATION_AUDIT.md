# Personalization audit

## Reference inventory

No third-party reference implementation or source repository was supplied. The existing site belongs to Kash. The master specification contains illustrative third-party tokens; these must not enter runtime source or generated pages.

| Reference token | Action |
|---|---|
| RajNet | REPLACE with Kash Browser |
| Founder.txt | REPLACE with Kash.txt |
| UK Realty; Investors Propmart; Imperium Marketing | REMOVE, including sample case claims |
| Sample rupee pipeline metric / founder revenue examples | REMOVE |
| Sample booking ping and inherited owner name | REMOVE; no booking system or pings |
| Reference owner face, avatar, wallpaper, domain, contact | Not supplied; no inheritance possible |
| Existing Kash name, email, GitHub, LinkedIn | RETAIN from approved owner profile |
| Old literal generic name placeholders | REMOVE |

## Checks

`npm run build` regenerates the crawlable blog output then runs `node tools/audit.mjs`. `npm run check` checks JavaScript and repeats the content/identity/privacy audit. The audit scans runtime HTML/CSS/JS/data and every generated blog HTML/CSS file for forbidden sample identities and secret/private strings. Historical specification and documentation are intentionally excluded from runtime scans; they are not shipped as site assets by the deployment packager/local server.

All current biography, project data, dates, links, methods, notes, and claims live in content/owner-profile.js. App registry lives in content/apps.js. Static first-paint identity copy in index.html is deliberately reviewed against that profile. There is no automatic domain greeting, copied avatar, fake notification, or external owner branding.

Asset-level inspection: all generated assets were visually inspected; contain no inherited identity, company logo, fake metric, or embedded personal name. The owner portrait uses only the supplied approved likeness photo. Browser screenshots cover desktop, mobile, themes, and app windows.

Canonical URL: https://jesusloveskash.github.io/Portfolio/. External approved social URLs: owner-supplied LinkedIn and GitHub only. Email: Berkeley primary, Gmail alternate. External journal PDF is labeled owner-supplied with unverified availability.

The final build is a branch for owner review. No production replacement is published.
