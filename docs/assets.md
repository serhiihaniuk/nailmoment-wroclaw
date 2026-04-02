# Nail Moment Image Assets

Forward-looking image storage rules for this repo.

These rules apply to new uploads and replacements going forward. Existing legacy blob URLs can stay as they are until the owning slice is edited.

## Working Folder

- Use `process/` in the repo root as a temporary intake folder for raw client images before processing.
- `process/` is local-only and must stay gitignored.
- After an image set is processed, wired into the app, and verified, remove the consumed source files from `process/`.

## Asset Types

- Decorative and UI assets
  - backgrounds
  - leaves
  - ticket decor
  - logos
  - icons that are part of the page chrome
  - keep these under `public/images/<year>/...`
- Real content images
  - speaker photos
  - winner works
  - battle photos
  - gallery photos
  - any non-decorative image that should open in the shared fullscreen viewer
  - prefer `public/content/<year>/<slice>/...` when the file should live in the repo
- Remote processed content images
  - use `project-asset-pipeline` when the asset should be processed and uploaded to blob storage
  - use blob storage for real content images, not decorative UI art

## Local Folder Structure

Use event year first, then the owning slice or collection.

```text
public/
  images/
    2026/
      decorative-bg-1.png
      decorative-leaf-1.png
      hero-main.png
      ticket-vip-decor.png
  content/
    2026/
      battle/
      festival-speakers/
      people-speaker/
      past-event-gallery/
```

Rules:

- `public/images/<year>/...` is for bundled decorative and UI-supporting assets.
- `public/content/<year>/<slice>/...` is for real photos and other non-decorative content images.
- New real content images should not be mixed back into `public/images/...`.
- Keep file names readable and kebab-case. Do not encode section logic into long ad hoc names when a slice folder already exists.

## Blob Upload Structure

When using `project-asset-pipeline`, use:

- `project = "nailmoment-wroclaw"`
- `outputNamespace = "content/<year>/<collection>"`

Keep namespaces flatter when images are reused across multiple blocks in the same area. Prefer readable file name prefixes over creating many one-off subfolders.

Recommended namespaces:

- `content/2026/festival-speakers`
- `content/2026/people-speaker`
- `content/2026/battle`
- `content/2026/past-event-gallery`

Recommended source names:

- `battle-winner-1`
- `battle-winner-2`
- `battle-winner-3`
- `battle-atmosphere-1`
- `people-speaker-hero`
- `festival-speaker-anna-kowalska`

Notes:

- The MCP adds a content hash to the uploaded file name, so source names can stay human-readable.
- Do not use the blob pipeline for decorative leaves, backgrounds, ticket decor, or similar UI-only art unless there is a specific delivery reason.
- Prefer WebP or JPEG for photos, and PNG only when alpha is required.
- If the source arrives as `HEIC`, convert it first, then process the converted file through `project-asset-pipeline`.

## Code Ownership

- Shared reusable asset constants belong in `shared/config/const.ts`.
- Feature-specific image URLs and image arrays belong in `features/<slice>/model/content.ts[x]`.
- Do not scatter raw blob URLs through random JSX when a feature model already exists.
- If an image is used in exactly one feature, keep the reference feature-local.

## Rendering Rules

- All non-decorative images should use the shared `Image` or `ImageCarousel` path.
- Non-decorative images should stay on the shared fullscreen viewer flow.
- Decorative assets stay non-clickable.
- The image crop ratio should match the actual block design. Do not assume every content image should use the shared default `aspect-video`.
- For portrait source photos, inspect the target UI block first and choose the ratio intentionally, for example `9:16`, `4:5`, or `3:4` when the design calls for a vertical crop.

## Workflow

1. Check whether the image is decorative or real content.
2. Put raw incoming files into `process/`.
3. Inspect what the image actually is, where it will render, and the minimum/maximum rendered size on the page.
4. For decorative assets, place the final file under `public/images/<year>/...`.
5. For repo-local content images, place the final file under `public/content/<year>/<slice>/...`.
6. For uploaded content images, process the image to a sensible delivery size instead of uploading the original blindly.
7. Upload with `project-asset-pipeline` using `project = "nailmoment-wroclaw"` and `outputNamespace = "content/<year>/<collection>"`.
8. Use readable filename prefixes such as `battle-winner-*` or `festival-speaker-*` rather than creating many tiny blob folders.
9. Store shared paths in `shared/config/const.ts` and feature-specific paths in the owning `features/*/model/content.ts[x]`.
10. Render through the shared fullscreen-capable image components.
11. Delete the consumed raw files from `process/` after verification.
