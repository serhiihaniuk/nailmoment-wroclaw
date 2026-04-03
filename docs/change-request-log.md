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

- Page / section: `/battle` atmosphere section, after winner cards
- Request: Add a new block:
  - `🔥 Можливо, цього року саме ти піднімеш кубок переможця «Битви Майстрів»`
  - slider of `3` photos
  - use placeholder images for now
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\model\content.ts)
  - [battle-atmosphere-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\ui\battle-atmosphere-section.tsx)

- Page / section: `/battle` structure
- Request: Place `Атмосфера «Битви Майстрів» на фестивалі Nail Moment 2025` directly after the brown intro card, before the participation steps
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [battle-page.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\widgets\battle-page\ui\battle-page.tsx)

- Page / section: `/battle` steps, step 1
- Request: Adjust the first step paragraph to:
  - `Уважно прочитай повні умови участі у конкурсі.`
  - `Подавши заявку, ти підтверджуєш, що ознайомився та погоджуєшся з усіма правилами конкурсу.`
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 2 and step 3
- Request: Update the ticket wording to:
  - step 2: festival ticket is required to participate
  - step 3: explain that the participant must buy a festival ticket, list `Standard` / `VIP`, and add the warning `Без квитка на фестиваль участь у конкурсі неможлива.`
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 3
- Request: Replace the old participant-ticket explanation with nomination-ticket pricing:
  - `1 номінація = 1 квиток`
  - explain separate ticket per nomination
  - add multi-nomination discount note
  - show pricing examples for 1-5 nominations
  - add italic note that extra nominations can be bought via Instagram direct
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 4
- Request: Update the submission step to:
  - send `1-3` photos of one work
  - emphasize the deadline `10 травня`
  - explain that valid works go to public Telegram bot voting
  - clarify that top `3` works in each nomination move to the final
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 4
- Request: Replace step 4 with the exact forwarded wording:
  - `1–3 фотографії`
  - `10 травня` as colored emphasis
  - public voting in Telegram bot
  - top `3` works from each nomination go to the final
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 5
- Request: Update the final-round step to:
  - explain arrival to the final in Warsaw
  - add a highlighted warning that the final is one day before the festival
  - list what the finalist receives and the timing for work/photo/presentation
  - add a button that links directly to the final rules block in `/battle/regulamin`
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [battle-rules-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-rules\ui\battle-rules-section.tsx)

- Page / section: `/battle` steps, step 5
- Request: Rewrite the final-round step from the forwarded message as the source of truth:
  - keep the warning as a highlighted block
  - use the exact text structure from the message
  - keep only the two warning dates
  - keep the final-rules reminder and CTA
  - keep the CTA pointing to the final-rules block in `/battle/regulamin`
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 6
- Request: Update the winner-announcement step to:
  - say results are announced on `7 липня` on the Nail Moment festival stage in Warsaw
  - make that announcement text more prominent
  - repeat the full winners/finalists prize list inside this card
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 2 and step 3
- Request: Restore `(Standard або VIP)` in the festival-ticket title and replace the raw pasted Instagram note with clean linked copy
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

- Page / section: `/battle` steps, step 2
- Request: Replace step 2 body with the exact festival-ticket requirement text and keep the no-ticket warning as a separate emphasized block
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)

## Historical recap from this thread

- `/battle`: migrated to current design system, brown theme, single-column layout, rules/success pages migrated
- `/speaker`: migrated to green theme, single-column layout preserved, winner photo/content restored
- `/polityka`: migrated to shared article layout, footer link fixed
- Shared system:
  - title hierarchy reduced to 4 orders
  - olive decorated cards extracted into shared UI
  - battle/speaker/footer decorative styling normalized

- Page / section: /battle criteria block after atmosphere section
- Request: Replace moved criteria block with literal two-stage explanation text for online stage and final stage
- Status: Done
- Files:
  - [criteria-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-criteria\ui\criteria-section.tsx)

## 2026-04-02

### Battle winners

- Page / section: `/battle` atmosphere section, winner cards
- Request: Replace the placeholder/incorrect winner images with the provided 1st, 2nd, and 3rd place work photos, process them for upload, keep portrait orientation readable, and switch to a flatter blob namespace with prefixed file names
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\model\content.ts)
  - [battle-atmosphere-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\ui\battle-atmosphere-section.tsx)
  - [assets.md](C:\Users\Serge\Desktop\nailmoment-wroclaw\docs\assets.md)

- Page / section: battle decorative logo image, including `ticket-highlight-image-trigger`
- Request: Revert the shared battle decorative art back to `ticket-battle-decor.png` and treat it as the main battle logo
- Status: Done
- Files:
  - [const.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\shared\config\const.ts)

- Page / section: battle decorative logo image, including `ticket-highlight-image-trigger`
- Request: After cropping the battle decorative logo, update the layout to use the real asset proportion and fit it cleanly in the existing battle blocks
- Status: Done
- Files:
  - [battle-ticket-highlight-card.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\ticket-sales\ui\battle-ticket-highlight-card.tsx)
  - [battle-success-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-success\ui\battle-success-section.tsx)
  - [battle-rules-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-rules\ui\battle-rules-section.tsx)

- Page / section: `/battle` cup slider under `🔥 Можливо, цього року саме ти піднімеш кубок переможця «Битви Майстрів»`
- Request: Replace the placeholder slider images with the provided 3 new photos from `process/`, keep them in `3:4`, and process/upload them under the battle namespace
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-atmosphere\model\content.ts)
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [image-carousel.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\shared\ui\image-carousel.tsx)

- Page / section: homepage festival speakers cards
- Request: Replace the current speaker photos with the provided cropped `3:4` photos from `process/`, upload them under the festival-speakers namespace, and make the shared speaker card match the new `3:4` ratio
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)
  - [speaker-card.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\entities\speaker\ui\speaker-card.tsx)

## 2026-04-03

### Homepage tickets

- Page / section: `/` tickets block
- Request: Add a real `Maxi` ticket tier between `Standard` and `VIP`, with visuals more premium than `Standard` but less premium than `VIP`, reusing the `БОКСОПАД` gold-green gradient language
- Status: Done
- Files:
  - [ticket-card.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\entities\ticket\ui\ticket-card.tsx)
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\ticket-sales\model\content.ts)

- Page / section: `/` tickets block
- Request: Remove crossed-out perks from all ticket cards: `доступ до Малої Зали з МК` and `afterparty на терасі`
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\ticket-sales\model\content.ts)

### Festival speakers

- Page / section: `/` speakers section, Олеся Кушнірук card
- Request: Replace the old one-line talk title with the provided full bio
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)

- Page / section: `/` speakers section, Галина Орябінська card
- Request: Replace the old one-line talk title with the provided full bio
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)

- Page / section: `/` speakers section, JUDI card
- Request: Replace the old one-line talk title with the provided full bio
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)

- Page / section: `/` speakers section, Ангеліна Рогоза card
- Request: Replace the old one-line talk title with the provided short bio
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)

### Battle partner naming

- Page / section: `/battle` intro prize copy, `/battle/regulamin` awards, homepage battle promo
- Request: Replace the old sponsor wording with explicit partner naming: `від партнера конкурсу XNail`
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-rules\model\content.ts)
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\ticket-sales\model\content.ts)
  - [competition-prize-banner.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\competition-promo\ui\competition-prize-banner.tsx)

- Page / section: `/battle` and `/battle/regulamin` first-place prize bullet
- Request: Change the line from `Цінні подарунки від партнера конкурсу XNail` to exact phrasing `Від партнера конкурсу XNail`
- Status: Done
- Files:
  - [battle-info-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-info-section.tsx)
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-rules\model\content.ts)
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\ticket-sales\model\content.ts)

### Battle step 2 ticket list

- Page / section: `/battle` steps, step 2
- Request: Add `Maxi` to the festival-ticket title and to the ticket list under it
- Status: Done
- Files:
  - [battle-step-2-card.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-step-2-card.tsx)

### Battle step 4 deadline

- Page / section: `/battle` steps, step 4
- Request: Change the `Останній день прийому робіт — 10 травня` line from a highlighted callout into a normal paragraph
- Status: Done
- Files:
  - [battle-step-4-card.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-info\ui\battle-step-4-card.tsx)

### Speaker page year fix

- Page / section: `/speaker` winner selection list
- Request: Change the year in `Найбільша кількість голосів визначає Народного спікера 2025.` to `2026`
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\people-speaker-hero\model\content.ts)

### Speaker winner link

- Page / section: `/speaker` 2025 winner block
- Request: Add a clearly labeled Instagram link for Валентина Козлова so users understand it is clickable
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\people-speaker-hero\model\content.ts)
  - [peoples-speaker-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\people-speaker-hero\ui\peoples-speaker-section.tsx)

### Festival speaker Shark description

- Page / section: homepage festival speakers, Дарья Shark card
- Request: Replace the temporary one-line placeholder with the forwarded business bio text about her beauty-business path, conferences, Poland market experience, and training scale
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)

### Battle regulamin ticket lineup

- Page / section: `/battle/regulamin`
- Request: Add `Maxi` anywhere the festival ticket lineup is listed so it matches the live battle page
- Status: Done
- Files:
  - [content.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-rules\model\content.ts)

### Main sponsor visibility

- Page / section: homepage hero and `/battle` hero
- Request: Reflect DNKa as the general festival sponsor in the app, separate from the battle-specific XNail sponsor
- Status: Done
- Files:
  - [const.ts](C:\Users\Serge\Desktop\nailmoment-wroclaw\shared\config\const.ts)
  - [main-sponsor-badge.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\shared\ui\main-sponsor-badge.tsx)
  - [hero-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\hero\ui\hero-section.tsx)
  - [battle-section.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\battle-hero\ui\battle-section.tsx)

### Extra festival speaker placeholder

- Page / section: homepage festival speakers
- Request: add one more separate unknown speaker card with `Coming soon`, matching the extra TBD slot in the schedule and keeping `Народний спікер` as its own card
- Status: Done
- Files:
  - [content.tsx](C:\Users\Serge\Desktop\nailmoment-wroclaw\features\festival-speakers\model\content.tsx)

