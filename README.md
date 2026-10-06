# marql retail decision game

A static, bilingual (English/Russian) five-scenario retail operations game. It is designed for GitHub Pages and needs no build step or backend.

## Run locally

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173>.

Two game routes are available:

- Retail manager scenarios: <http://localhost:4173/>
- Decision velocity quiz: <http://localhost:4173/desigions/>

## Deploy to GitHub Pages

Publish the repository root from the `main` branch in **Settings → Pages**. The app uses only relative asset paths.
