# Vibium Demo: K11 Software Solutions

This repository contains **Vibium demo smoke scripts** that automate
`https://k11softwaresolutions.com`.

## Included scripts

- `scripts/vibium/k11-smoke-async.mjs` – Node.js async Vibium API
- `scripts/vibium/k11-smoke-sync.cjs` – Node.js sync Vibium API
- `scripts/vibium/k11_smoke.py` – Python sync Vibium API

Each script:

1. Starts a browser session with Vibium.
2. Navigates to `https://k11softwaresolutions.com`.
3. Captures screenshot artifacts in `artifacts/`.
4. Performs a minimal interaction suitable for a smoke check.

## Prerequisites

- Node.js 18+
- Python 3.9+
- Vibium runtime and browser dependencies (managed by Vibium install)

## Install

### JavaScript

```bash
npm install
```

### Python

```bash
python -m pip install -r requirements.txt
```

## Run

```bash
npm run vibium:k11:async
npm run vibium:k11:sync
python scripts/vibium/k11_smoke.py
```

## Output

Screenshots are saved to:

- `artifacts/k11-home-async.png`
- `artifacts/k11-home-sync.png`
- `artifacts/k11-after-click-sync.png`
- `artifacts/k11-home-python.png`

You can override the target URL with `K11_URL`, for example:

```bash
K11_URL="https://k11softwaresolutions.com" npm run vibium:k11:async
```
