ZOMATO-CLONE
=============

A simple full-stack Zomato-like clone (food ordering / listing) with separate BACKEND and FRONTEND folders.

Quick overview
--------------
- Backend: Node.js / Express app located in `BACKEND/`.
  - Entry: `server.js` and `src/app.js`.
  - Routes: `src/routes/` (authentication + food routes).
  - Models: `src/models/` (users, food, foodpartner).
  - Controllers: `src/controllers/`.
  - Services: `src/services/` (e.g., storage.service.js).
  - Database helper: `src/db/db.js`.
  - Middlewares: `src/middlewares/` (authentication middleware).

- Frontend: React + Vite app located in `FRONTEND/`.
  - Entry: `src/main.jsx`, `src/App.jsx`.
  - Pages/components: `src/pages/`, `src/components/`.
  - Styling: `src/styles/`.

Requirements
------------
- Node.js (v16+ recommended)
- npm or yarn
- (Optional) MongoDB or the database configured by the backend (check `src/db/db.js`).

Environment files
-----------------
This project expects environment configuration. Placeholder .env files are included in the repository root for both BACKEND and FRONTEND (if not present, create them with values below).

Recommended environment variables (BACKEND/.env)
- PORT=5000
- MONGO_URI=<your_mongodb_connection_string>
- JWT_SECRET=<a_strong_jwt_secret>
- CORS_ORIGIN=http://localhost:5173
- STORAGE_API_KEY=<if using third-party storage>

Recommended environment variables (FRONTEND/.env)
- VITE_API_BASE_URL=http://localhost:5000/api

Setup & Run (Backend)
---------------------
1. Open a terminal in `BACKEND/`.
2. Install dependencies:

   npm install

3. Create `BACKEND/.env` (see recommended variables above).
4. Start the server in development:

   npm run dev

or

   node server.js

Check `package.json` in `BACKEND/` for exact scripts.

Setup & Run (Frontend)
----------------------
1. Open a terminal in `FRONTEND/`.
2. Install dependencies:

   npm install

3. Create `FRONTEND/.env` with `VITE_API_BASE_URL` set to your backend URL (e.g., `http://localhost:5000/api`).
4. Start the dev server:

   npm run dev

Frontend runs on Vite default port (e.g., `5173`) unless configured otherwise.

Project structure
-----------------
Top-level folders:
- `BACKEND/` — server code, models, controllers, routes.
- `FRONTEND/` — React app built with Vite.
- `vdeos/` — (appears to contain media assets)

Notes for developers
--------------------
- API endpoints are defined in `BACKEND/src/routes/` — inspect `auth.routes.js` and `food.routes.js` to learn available routes and required request shapes.
- Authentication uses JWT — see `src/middlewares/auth.middleware.js` and `src/controllers/auth.controller.js`.
- Storage helpers live in `src/services/storage.service.js` (e.g., for file uploads).
- Database connection settings are in `src/db/db.js` — update `MONGO_URI` in your `.env`.

Testing & Linting
-----------------
- See `package.json` scripts in each folder for test/lint commands. If missing, you can add scripts like `test`, `lint` as needed.

Deployment hints
----------------
- Build the frontend (`npm run build` in `FRONTEND/`) and serve static files or host separately (Netlify/Vercel for frontend, Render/Heroku/Azure/GCP for backend).
- Ensure secure storage of `JWT_SECRET` and database credentials in production secrets manager.

Contributing
------------
- Fork the repo, create feature branches, and submit pull requests.
- Keep backend and frontend changes isolated to their folders where possible.

License
-------
Add a license file (e.g., `LICENSE`) or specify the license of your choice here.

Contact
-------
For questions about this codebase, inspect the files and open issues or contact the repository owner.

---
This README was auto-generated to help you get started. Update any placeholders and add further docs as the project grows.
