# Nail Moment Architecture

## Layer map
- `app/*`
  - route entrypoints only
  - imports route widgets or shared-only helpers
- `widgets/*`
  - page and route composition
  - decides section order and route shell
- `features/*`
  - business and page sections
  - owns local copy in `model/`
  - owns local UI in `ui/`
- `entities/*`
  - reusable domain objects
  - current entities: `speaker`, `ticket`
- `shared/*`
  - design system, utilities, config, and assets

## Canonical shared locations
- `shared/ui/*`
  - generic UI primitives and reusable visual patterns
- `shared/ui/layout/*`
  - `PageShell`, `Section`, `Stack`, `Cluster`
- `shared/lib/*`
  - generic helpers like `cn` and `mergeUi`
- `shared/config/*`
  - global app constants and asset maps
- `shared/assets/*`
  - icons and shared asset components

## Entity ownership
- `entities/speaker`
  - speaker cards and reusable speaker model types
- `entities/ticket`
  - ticket cards, ticket CTA buttons, reusable ticket model types

## Feature ownership
- Homepage
  - `features/hero`
  - `features/festival-info`
  - `features/warsaw-announcement`
  - `features/market-showcase`
  - `features/competition-promo`
  - `features/festival-speakers`
  - `features/festival-schedule`
  - `features/ticket-sales`
  - `features/afterparty`
  - `features/past-event-gallery`
  - `features/faq`
  - `features/location`
  - `features/footer-info`
- Battle flow
  - `features/battle-hero`
  - `features/battle-info`
  - `features/battle-criteria`
  - `features/battle-faq`
- Master class flow
  - `features/master-class-hero`
  - `features/master-class-info`
  - `features/master-class-schedule`
  - `features/master-class-sales`
- People speaker flow
  - `features/people-speaker-hero`

## Route widgets
- `widgets/home-page/ui/home-page.tsx`
- `widgets/battle-page/ui/battle-page.tsx`
- `widgets/master-class-page/ui/master-class-page.tsx`
- `widgets/people-speaker-page/ui/people-speaker-page.tsx`
- `widgets/success-page/ui/success-page.tsx`
- `widgets/battle-success-page/ui/battle-success-page.tsx`
- `widgets/battle-rules-page/ui/battle-rules-page.tsx`
- `widgets/privacy-page/ui/privacy-page.tsx`

## Import rules
- `app` may import `widgets` and `shared`
- `widgets` may import `features`, `entities`, and `shared`
- `features` may import `entities` and `shared`
- `entities` may import `shared`
- `shared` may import only `shared`

## Content rules
- Feature-specific copy belongs in `features/<slice>/model/content.ts[x]`
- Global constants belong in `shared/config`
- Do not reintroduce `shared/content/home/*`

## Navigation rule of thumb
- Looking for a page: start in `widgets/*`
- Looking for a section: start in `features/*/ui`
- Looking for section copy: open `features/*/model`
- Looking for a reusable card/button/layout primitive: open `shared/ui` or `entities/*/ui`
