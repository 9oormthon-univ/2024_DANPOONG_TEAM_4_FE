import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import fbConfig from './config/FirebaseConfig';

const firebaseConfig = fbConfig;

export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
