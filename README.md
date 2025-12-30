# Photography E-commerce Web Application

A professional, production-ready web application for a photography studio selling wooden frames and polaroid sets.

## Tech Stack
- **Frontend:** React (Vite), React Router, Lucide React, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Integration:** WhatsApp Checkout

## Features
- **Home:** Hero section with brand story.
- **Products:** Dynamic product listing from MongoDB.
- **Cart:** PERSISTENT cart with quantity management.
- **Checkout:** Generates a formatted order message and opens WhatsApp.
- **Gallery:** Minimalist masonry-style photo gallery.
- **Contact:** Business info and direct WhatsApp CTA.

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local or Atlas)

## Getting Started

### 1. Backend Setup
1. Navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the `.env` file with your `MONGO_URI` and `WHATSAPP_NUMBER`.
4. Seed the database with initial products:
   ```bash
   node seed.js
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure
- `/backend`: Express server, Mongoose models, and API routes.
- `/frontend`: React application with Context API for state management.
- `/frontend/src/context`: Cart logic and localStorage persistence.
- `/frontend/src/pages`: Individual page components.
- `/frontend/src/services`: API communication layer.
