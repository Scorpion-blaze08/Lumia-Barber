# Lumia Barber – Site Photos Swap

## Original Problem
"usa la repo che ti ho allegato e cambia le foto di questo sito con quelle che ti ho messo nella zip"
Repo: https://github.com/Scorpion-blaze08/Lumia-Barber

## Done
- Cloned Lumia-Barber repo into /app (React + FastAPI + Mongo)
- Added user's 7 photos to /app/frontend/public/images/:
  - fratelli-lumia.jpg, sala.jpg, sala-2.jpg, damiano.jpg,
    in-teoria.jpg, strumenti.jpg, nome.jpg
- Updated /app/frontend/src/data.js:
  - IMAGES.hero → fratelli-lumia.jpg
  - IMAGES.interior → sala.jpg
  - IMAGES.chair → sala-2.jpg
  - IMAGES.beard → damiano.jpg
  - IMAGES.shave → in-teoria.jpg
  - IMAGES.tools / craft → strumenti.jpg
  - GALLERY → new mix of the 5 shop photos
- Restart frontend/backend — both RUNNING, homepage 200, images 200

## Notes
- PRODUCTS section still uses original Unsplash placeholder pics (no product photos were provided in the zip)

## Backlog / Next
- Replace product photos with real bottles from the shop
- Add captions / credits on the gallery hover
