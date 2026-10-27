# Kash OS asset manifest

All original illustrations were generated with the native image-generation tool during this build. They are illustrations, not photographs or evidence of employer systems. Final owner approval is required before public release.

| Public asset | Dimensions | Purpose / generation brief | Source master |
|---|---|---|---|
| illustrations/wallpaper.webp | 1536 × 1024 | Original editorial gouache Bay Area landscape, Berkeley campus and Campanile, sage hills, warm ivory sky, peach flowers; no people/text/logos | exec-eec2f3f3-cd1d-42bf-9753-488a0325a695.png |
| illustrations/kash-portrait.webp | ≤512 × 512 | Illustrated Kash portrait based solely on owner-supplied photo: smile, dark wavy hair, white top, earrings; transparent, no invented setting | exec-2a16a9fd-bdb6-4f6c-a8d1-00cc3e239ab6.png |
| illustrations/pip-states.webp | 640 × 640 | Original 2×2 companion sheet: curious/idle, happy/wave, sad, excited; green seed-shaped traveler with small gold satchel | exec-c247ffda-45a7-49f2-bcf5-d584add5fb31.png |
| icons/apps.webp | 1024 × 1024 | Original 4×4 icon family: folders, document, map, notebook, mail, microscope, browser, tools, conversation, cases, award, calendar, voice, sticky, leaf game, palette | exec-ac0cf2d3-0bda-4023-acc0-0456a1779b04.png |
| projects/cases.webp | 2172 × 724 | Conceptual triptych for reconciliation, suspicious-site investigation, and surplus meals; no actual company interface, metrics, or logos | exec-502e3c85-635f-4cb1-a502-540f65a56bab.png |

Native tool metadata does not expose a model identifier or seed. No external image API/provider key was used. High-resolution masters are committed in design/masters/ (friendly filenames) and the original native outputs remain in /workspace/generated_images; their prompts and provenance are recorded here. Masters are excluded from the deployment package. WebP versions are optimized and transparent where needed. CSS uses aligned sprite cells, not multiple copies of the same large image. Images were inspected before integration; page screenshots validate their actual rendered sizes. CSS backgrounds are decorative except case art, which has an explicit conceptual-illustration accessible label. Portrait has descriptive alt text.

Day, Night, and Dark treatments are explicitly authorized variations of the new wallpaper. No prior background media was protected under the approved contract.

## Original sound

- music/a-good-conversation.ogg and music/the-scenic-route.ogg: 32-second original synthesized instrumental sketches.
- Generated locally by tools/compose_music.py using mathematical oscillators and original note/chord arrangements; no samples, commercial recordings, or external melodies.
- Audio and composition supplied under CC0; no attribution required. Not a claim about third-party music rights.
- Playback always opt-in; no sound or speech during boot. Volume only is persisted.

## Fonts

DM Sans and DM Serif Display: self-hosted Latin webfonts obtained from the @fontsource packages; SIL Open Font License copies in public/assets/fonts. DejaVu symbol subset: DejaVu font license included. Fonts are not fetched from third-party services at runtime.

## Documents and privacy

The supplied October 24 résumé has a web copy with only its phone number redacted, saved to public/assets/documents/Kash-Vinayak-Resume.pdf. It retains the approved email and all qualifications. The source upload is unchanged. Transcript, student IDs, other private source files, and source portrait metadata are not published. No employer logos or actual internal screenshots are used.

Wallpaper revision: owner requested a visible Berkeley campus/Campanile. The native image tool edited the prior approved-direction artwork, preserving its warm palette and landscape composition. This is a stylized Bay Area panorama, not a cartographically exact viewpoint. Phone crop shifts to 65% to retain the landmark. Original prior master remains in cloud generated-image history.

## Owner-approved cloned introduction

`public/assets/voice/kash-introduction.mp3`: 13.12-second pre-generated AI introduction using the owner-supplied voice sample and Chatterbox Nano. User accepted the no-cost cloned-introduction plus text-guide approach in chat. The raw 43-second recording, conditioning WAV, model weights, inference environment, and private generation logs remain outside the repository. Only the resulting MP3 is included in the review branch; main/public replacement deployment still requires review.

Model: ResembleAI/chatterbox-nano at 71ccd1d0081b430592cea481f4307e764e07bc64, public/ungated with MIT license per model metadata. Official code: 5de7a54aa4e5e2baadb0182dde554908b48b85c2. Generated on CPU with torch 2.6.0; model-file SHA-256/Git blob checks verified. Model watermark retained in source output; MP3 is a review/web derivative. No paid API or hosting subscription is used. Clearly labeled AI-generated; not a live conversation. Transcript is centralized in ownerProfile.narration.
