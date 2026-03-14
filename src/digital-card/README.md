# Digital Card Template (repeatable)

## Files to keep
- `digital-card.html`
- `src/digital-card/main.tsx`
- `src/digital-card/DigitalCard.tsx`
- `src/app/components/slide-reveal.tsx`
- Assets expected by the card:
  - `portrait.PNG`
  - `logo.png`
  - `John_D.vcf`

## How to create a new card
1. Replace `portrait.PNG` with the new portrait (keep the filename).
2. Replace/update `John_D.vcf` (keep the filename, or update the import + download name in `slide-reveal.tsx`).
3. Update the text inside `src/app/components/slide-reveal.tsx` only:
   - name line
   - title line
   - section heading (e.g., CONSULTING SERVICES)
   - bullet list items
4. Deploy.

## Conventions
- Keep asset names the same unless you update imports/routes.
- Layout & typography are already standardized.
