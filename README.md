# Happy Monthsary 💗 — a romantic React website

Built with **React + Vite**. Responsive on phones, tablets and desktops.

## Run it
```bash
npm install
npm run dev        # open the link it prints
```

## Deploy on Vercel (recommended)
**Option A — drag & drop via GitHub**
1. Push this folder to a GitHub repo.
2. On vercel.com choose **Add New → Project**, import the repo, and press **Deploy**.
   (Vercel reads `vercel.json`: Vite, `npm run build`, output `dist`. No settings to change.)

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```
Every page is reachable at its own link, e.g. `your-site.vercel.app/#letter`.

## Other hosts
```bash
npm run build      # creates the /dist folder
```
Upload `dist/` to Netlify (drag & drop), Vercel, GitHub Pages or Cloudflare Pages.

## Make it yours
- **All words** (title, captions, letter, song): `src/content.js`
- **Colours**: the `:root` variables at the top of `src/styles.css`
- **Photos**: open the Photos page and tap any heart to add a picture (saved on that device)
- **Song**: put your `.mp3` in `public/`, then in `src/content.js` set `audio: './song.mp3'`.
  Leave it `null` and the play button opens the song on Spotify.

## Flow
Landing (yes / no) → "pick and click!" → Photos · Letter · Flowers + song
