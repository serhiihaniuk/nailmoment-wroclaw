# Nail Moment UI System

## Foundations
- Tailwind is the source of truth for spacing, sizing, radius, shadows, and breakpoints.
- Custom CSS variables are reserved for semantic brand values only:
  - brand colors
  - surfaces
  - text tones
  - border tone
  - display/body font families
- The page uses a single shell and section-driven rhythm. Avoid page-level `space-y-*` wrappers for main layout.

## Layout
- `PageShell` owns the global panel width, overflow, background, and outer shadow.
- `Section` owns vertical rhythm and horizontal gutters.
- Approved `Section` variants:
  - `density`: `hero`, `default`, `compact`
  - `container`: `narrow`, `default`, `wide`, `full`
  - `surface`: `transparent`, `subtle`, `accent`
- Use `Stack` for vertical spacing and `Cluster` for inline groups instead of repeating ad hoc `flex flex-col gap-*` and `flex flex-wrap gap-*` patterns everywhere.

## Typography
- `SectionHeader` is the standard heading stack for section titles.
- Approved `SectionHeader` variants:
  - `size`: `sm`, `default`, `display`
  - `align`: `left`, `center`
  - `tone`: `default`, `inverse`, `accent`
- `TypographyDisplay` is for large display text (ticket titles, hero callouts) — Montserrat, black weight, uppercase, normal tracking.
- Approved `TypographyDisplay` variants:
  - `size`: `sm`, `default`, `lg`
  - `align`: `left`, `center`
  - `tone`: `default`, `inverse`, `accent`, `olive`, `gold`
- Use component APIs for recurring headings instead of raw one-off text utilities unless the treatment is genuinely unique.

## Ownership
- `shared/ui`: low-level primitives, layout primitives, and reusable visual compositions.
- `shared/lib`: generic helpers only.
- `shared/config`: global constants and asset maps.
- `entities/*`: reusable business objects such as speaker and ticket.
- `features/*`: page/business sections with local `ui/` and `model/`.
- `widgets/*`: route composition only.

## Migration Rule
- New UI work should start from `shared/ui`, `entities/*`, or the owning `features/*` slice.
- Route composition belongs in `widgets/*`, not `app/*`.
- Feature files should compose primitives and select content, not hold large copy arrays or invent local spacing systems.
