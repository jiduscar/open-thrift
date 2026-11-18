/**
 * Single place that touches the native Firebase SDK, using the modular API.
 * Config comes from android/app/google-services.json (not committed).
 */
import { getApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
import { getFirestore } from '@react-native-firebase/firestore';
import { getStorage } from '@react-native-firebase/storage';
import { getFunctions } from '@react-native-firebase/functions';

export const app = () => getApp();
export const auth = () => getAuth();
export const db = () => getFirestore();
export const storage = () => getStorage();
// Region must match where Cloud Functions are deployed (see firebase/README).
export const FUNCTIONS_REGION = 'europe-west1';
export const functions = () => getFunctions(getApp(), FUNCTIONS_REGION);
