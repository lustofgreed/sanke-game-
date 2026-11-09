# Zmey Gorynych Royal — Web Edition

A standalone Christmas-themed Three.js snake battle royale for normal browser hosting.

## Run or deploy

The entire game is contained in one file:

```text
index.html
```

Three.js r158, the logo, and all five font weights are embedded in `index.html`. Textures, sounds, music, and 3D models are generated in code. There are no external assets, SDKs, ads, login services, or backend.

Upload `index.html` to any static host, including Cloudflare Pages, Netlify, GitHub Pages, or your own web server.

For local testing, you can open `index.html` directly in a modern browser. A local server also works:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Features

- Christmas snowfield, treats, village decorations, train, Santa car, snowfall, and neon ring
- Mouse, keyboard, and touch controls
- Procedural music and sound effects
- Power-ups, combos, coins, unlockable skins, and match modifiers
- Automatic quality reduction on slower devices
- Local progress using browser `localStorage`

## Controls

- Mouse: move to steer; hold the left button to boost
- Keyboard: WASD or arrow keys to steer; hold Space to boost
- Touch: drag to steer; hold BOOST to accelerate
- Pause: P, Escape, or the pause button

## Privacy

The game has no analytics, advertising, account system, or backend. Player name, selected skin, coins, unlocked skins, mute state, and quality setting stay in the browser through `localStorage`.

## Source editions

This repository is the standalone web edition. The CrazyGames integration remains separately preserved in `lustofgreed/zmey-gorynych-royal` on its `submission` branch.
