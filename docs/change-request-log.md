# Change Request Log

Brief tracker for non-technical content/design asks coming from chat messages, screenshots, and forwarded notes.

## Format

- `Date`
- `Page / section`
- `Request`
- `Status`
- `Files`

## 2026-03-24

### Battle landing

- Page / section: `/battle` intro block, main CTA, battle ticket highlight card
- Request: Make the first landing message clearer:
  - `Битва Майстрів — конкурс, де може перемогти саме твоя робота`
  - `«Битва Майстрів» — це конкурс для майстрів манікюру, де головне не титули та не популярність.`
  - `Головне — твій дизайн, твоя креативність та твоя майстерність.`
  - `Роботи оцінюють самі майстри nail-індустрії, тому перемагає не ім'я, а робота, яка дійсно вражає.`
  - Hero button text: `Взяти участь у конкурсі`
  - Prize text should be grouped by `1 місце`, `2 та 3 місце`, `Фіналісти конкурсу`
- Status: Done
- Files:
  - [battle-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-hero\ui\battle-section.tsx)
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\ticket-sales\model\content.ts)
  - [buy-battle-ticket-button.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\entities\ticket\ui\buy-battle-ticket-button.tsx)

- Page / section: `/battle` intro brown card
- Request: Also include the winner / finalists prize list inside the brown intro card
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` hero + intro brown card
- Request: Apply the whole forwarded prize message literally:
  - `🏆 Переможці отримують`
  - grouped blocks for `1 місце`, `2 та 3 місце`, `Фіналісти конкурсу`
  - note about the gift list being updated after partner confirmations
  - large line `Можливо, цього року переможе саме твоя робота`
  - button text `Взяти участь у конкурсі`
- Status: Done
- Files:
  - [battle-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-hero\ui\battle-section.tsx)
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` hero + intro brown card
- Request: Move `Можливо, цього року переможе саме твоя робота` out of hero and place it at the bottom of the brown card before the gold buy button
- Status: Done
- Files:
  - [battle-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-hero\ui\battle-section.tsx)
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` intro brown card image
- Request: Replace decorative image with the real provided photo, move it out of the project root, and start a separate folder for non-decorative public images
- Status: Done
- Files:
  - [const.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\shared\config\const.ts)
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [battle-intro-photo.jpg](C:\Users\Serge\Desktop\nailmoment-wroclaw\public\content\2026\battle-intro-photo.jpg)

- Page / section: `/battle` after intro / steps
- Request: Add one more section with two parts:
  - atmosphere carousel from previous battle
  - cards for previous winners `1`, `2`, `3`
  - use placeholders for now and replace later
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\model\content.ts)
  - [battle-atmosphere-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\ui\battle-atmosphere-section.tsx)
  - [battle-page.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\widgets\battle-page\ui\battle-page.tsx)

## Historical recap from this thread

- `/battle`: migrated to current design system, brown theme, single-column layout, rules/success pages migrated
- `/speaker`: migrated to green theme, single-column layout preserved, winner photo/content restored
- `/polityka`: migrated to shared article layout, footer link fixed
- Shared system:
  - title hierarchy reduced to 4 orders
  - olive decorated cards extracted into shared UI
  - battle/speaker/footer decorative styling normalized
