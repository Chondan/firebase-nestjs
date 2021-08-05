import path from 'path';
import customEnv from 'custom-env';

// Loads environment variables
const environment = process.env.NODE_ENV;
customEnv.env(environment, path.resolve(__dirname, '../../env'));

export const config = {
  common: {
    environment: environment,
  },
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
  firebaseEmulators: {
    host: process.env.FIREBASE_EMULATOR_HOST,
    authPort: process.env.FIREBASE_AUTH_EMULATOR_PORT,
    firestorePort: process.env.FIREBASE_FIRESTORE_EMULATOR_PORT,
  },
  token: {
    accessTokenSecret: process.env.FIREBASE_ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.FIREBASE_REFRESH_TOKEN_SECRET,
  },
  frontEnd: {
    origin: process.env.FIREBASE_FRONTEND_ORIGIN,
  },
};
