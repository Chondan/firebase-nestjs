import firebase from 'firebase';
import admin from 'firebase-admin';
import { config } from '@src/config/config';
import { Environment } from '@src/type/environment';

const getFirebaseServices = () => {
  const environment = config.common.environment;

  // Initialize firebase app
  firebase.initializeApp(config.firebase);
  admin.initializeApp();

  // Services
  const auth = firebase.auth();
  const adminAuth = admin.auth();
  const db = firebase.firestore();

  // Setup emulators for dev environment
  if (environment === Environment.development) {
    // Auth
    auth.useEmulator(
      `http://${config.firebaseEmulators.host}:${config.firebaseEmulators.authPort}`,
    );

    // Firestore
    db.useEmulator(
      config.firebaseEmulators.host as string,
      Number(config.firebaseEmulators.firestorePort),
    );
  } else {
    console.info('You are not running in development environment!!!!');
  }

  return {
    client: {
      auth,
      db,
    },
    admin: {
      auth: adminAuth,
    },
  };
};

export const firebaseServices = getFirebaseServices();
