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
- Use component APIs for recurring headings instead of raw one-off text utilities unless the treatment is genuinely unique.

## Ownership
- `components/ui`: low-level primitives only.
- `components/layout`: page and spacing primitives.
- `components/patterns`: reusable product-level composites.
- `features/*`: page/business sections only.
- `shared/content/*`: static copy and datasets.
- `widgets/*`: avoid for homepage-specific sections; absorb into `features/*` unless a widget is truly shared across pages/flows.

## Migration Rule
- New homepage work should start in `shared/content` and `components/layout` / `components/patterns`.
- Feature files should primarily compose primitives and select content, not hold large copy arrays or invent local spacing systems.
