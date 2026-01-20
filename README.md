# TyreJack Limited – GTA Neon Static Web App

This repository contains a static, mobile‑optimized website with GTA‑style neon visuals, an animated logo, a carousel, and an Azure Functions API for booking.

## Structure
- `/index.html` + pages (Services, Tyre Repair, Wheel Alignment, About, Careers, Blog, Booking, Contact)
- `/css/style.css` – Neon theme, animations, responsive
- `/js/main.js` – Carousel, theme toggle, booking submit
- `/images/` – Animated logo (`tyrejack_logo.gif`, `tyrejack_logo.webp`), hero & gallery assets
- `/api/booking/` – Azure Functions HTTP POST endpoint
- `staticwebapp.config.json` – SWA routing config

## Local Development
You can open the `index.html` directly, but the booking form will only work when hosted under Azure Static Web Apps (which mounts `/api`).

## Deploy to Azure Static Web Apps
1. Push this folder to a new **GitHub** repository.
2. In Azure Portal, create **Static Web App** → Source: GitHub → Build Presets: **Custom**.
3. **App location**: `/` (root)  
   **API location**: `/api`  
   **Output location**: `/`  
4. Complete wizard; SWA will create a GitHub Actions workflow and deploy.

## Replacing Images
AI‑generated car images can replace `images/carousel_*.jpg` and `images/hero.jpg`. Use 16:9 landscape.
