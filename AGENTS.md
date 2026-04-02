# Nail Moment Agent Guide

This file is the repo-specific operating guide for AI agents and other automated contributors.

Use it together with:
- [docs/architecture.md](docs/architecture.md)
- [docs/assets.md](docs/assets.md)
- [docs/design-system.md](docs/design-system.md)
- [docs/change-request-log.md](docs/change-request-log.md)

## 1. Core Rules

- Do not redesign sections unless the user explicitly asks for redesign.
- Preserve the existing visual language of each page.
- Battle pages use the brown theme.
- Speaker-related pages and cards use the olive/green theme.
- Decorative assets are not content images.
- Real content changes should be made literally from the forwarded text, not inferred from screenshots.

## 2. Source Of Truth

When the user sends:
- screenshot + text

Interpret it like this:
- the screenshot identifies the block or location
- the forwarded text is the source of truth for the new content

Do not copy wording from the screenshot unless the user explicitly says to.

If the user provides corrected text later, the latest text wins.

## 3. Content Rules

- Feature-specific copy belongs in `features/<slice>/model/content.ts[x]`.
- Do not scatter business copy through random JSX when a feature model already exists.
- Keep phrasing natural in Ukrainian and prefer exact user wording where possible.
- Normalize pasted raw notes into clean UI copy only when the user has not explicitly asked for literal rendering.
- If the user asks to do it literally, keep structure and wording literal.

## 4. Change Tracking

For non-technical requests coming from chat messages, screenshots, or forwarded notes:
- update [docs/change-request-log.md](docs/change-request-log.md)

Track briefly:
- page / section
- request
- status
- files

Do this for meaningful content/design requests, not every tiny refactor.

## 5. Architecture Rules

Follow the FSD structure already established in the repo:
- `app/*` for route entrypoints only
- `widgets/*` for route/page composition
- `features/*` for page/business sections
- `entities/*` for reusable domain objects
- `shared/*` for common UI, utilities, config, and assets

Do not reintroduce:
- large page composition in `app/*`
- generic shared copy buckets
- old alias layers or ad hoc component trees

## 6. Styling Rules

- Prefer shared primitives first.
- Typography should inherit color by default.
- Color should usually be controlled by page, section, card, or block wrapper.
- Do not hardcode one-off text colors inside reusable typography unless a true semantic tone is needed.
- Use shared card/button/image patterns before inventing local ones.
- If a pattern repeats, extract it. If it is truly unique, keep it feature-local.

## 7. Image Rules

- All non-decorative images should use the shared fullscreen-viewer flow.
- Decorative images must stay non-clickable.
- Real content images should prefer the shared `Image` / `ImageCarousel` path.
- Decorative assets stay under `public/images/...`.
- Real content photos can live under `public/content/...` or external storage if already used that way.
- For new folder and blob namespace decisions, follow [docs/assets.md](docs/assets.md).
- Use the repo-root `process/` folder as a temporary local intake area for raw image files. It must stay gitignored.
- Do not upload original oversized files blindly. Inspect the source image, identify the target block and rendered size range, then process to a sensible delivery size first.
- Prefer flatter blob namespaces plus readable filename prefixes over many tiny one-off folders.
- If the source arrives as `HEIC`, convert it before using `project-asset-pipeline`.
- Match crop ratio and positioning to the block design, especially for portrait source images.

## 8. Battle Page Rules

- Battle content has changed often. Do not assume old wording is still valid.
- The battle landing page is the current content reference unless the user provides new replacement text.
- `/battle/regulamin` must stay consistent with the current battle page for:
  - dates
  - steps
  - rules
  - prizes
- Battle step cards should remain simple and explicit. Prefer one component per step over generic “step engine” abstractions when content is highly custom.

## 9. FAQ Rules

- FAQ answers must not contradict the current page content.
- If schedule, pricing, or participation flow changes, review related FAQ entries too.
- Remove or soften outdated commitments rather than leaving conflicting copy.

## 10. Verification

After meaningful code or content changes, run:
- `npm run lint`
- `npm run build`

If the user asks only for review and no edits, do not change files.

## 11. Git Workflow

- Commit only the changes relevant to the current task.
- Do not bundle unrelated local edits into the same commit.
- If the user asks to push, push to `main` unless they say otherwise.
- Keep commit messages short and descriptive.

## 12. Preferred Working Style

- Be literal with content requests.
- Be conservative with design changes.
- Be opinionated about architecture quality.
- Avoid over-engineered abstractions for highly custom content blocks.
- When in doubt, choose the simpler implementation that matches the current design system.
