/* eslint-disable @typescript-eslint/no-unused-vars */

// Please create a .env file for both backend and frontend folders
// Follow the name of said .env file with its values
// - backend/.env
// - frontend/.env.development
// - frontend/.env.production

// -- BACKEND --
// These are loaded via 'dotenv' and use standard process.env names.
const _SAMPLE_BACKEND_ENV = [
  {
    // .env
    MONGODB_URI: "your mongodb connection string (e.g., mongodb://localhost:5000/home)",
    PORT: "the port number you want to use (e.g., 5000)",
    BACKEND_URL: "your server url with its port number (e.g., http://localhost:5000)",
    FRONTEND_URL: "the url of the frontend you are using for cors to allow it (e.g., http://localhost:5000)",
  },
];

// -- FRONTEND --
// Prefixed with VITE_ in order for browsers to reach it
const _SAMPLE_FRONTEND_ENV = [
  {
    // .env.development
    VITE_URL: "your dev url (e.g., http://localhost:5000/api)",
  },
  {
    // .env.production
    VITE_URL: "your production url (e.g., http://localhost:5000/api)",
  },
];
