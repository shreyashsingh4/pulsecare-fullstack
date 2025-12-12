# PulseCare – Full Stack Appointment Booking System

PulseCare is a full-stack web application for managing doctor appointment slots and bookings.

## Tech Stack
- Frontend: React + TypeScript (Vite)
- Backend: Node.js + Express
- Database: PostgreSQL
- Deployment:
  - Frontend: Netlify
  - Backend: Local / API-ready

---

## Repository Structure

pulsecare-fullstack/
│
├── pulsecare-backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── db.js
│ │ └── index.js
│ ├── schema.sql
│ ├── package.json
│ └── .gitignore
│
├── pulsecare-frontend/
│ ├── src/
│ ├── public/
│ ├── index.html
│ ├── package.json
│ └── vite.config.ts
│
└── README.md

---

## Backend Setup

```bash
cd pulsecare-backend
npm install

Create a .env file:
DATABASE_URL=postgresql://username:password@localhost:5432/pulsecare
PORT=4000

Run backend:
npm start

Backend runs at:
http://localhost:4000

Frontend Setup:
cd pulsecare-frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173

Features Implemented

View available doctor slots

Book appointment slots

Slot capacity auto-reduction

Prevent overbooking

Fully functional REST APIs

Frontend + Backend separation

Deployment

Frontend deployed on Netlify

Backend configured for API usage

Author

Shreyash Singh

SQL

```bash
git add README.md
git commit -m "docs: add project README"
git push
