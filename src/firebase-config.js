/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
    apiKey: "AIzaSyA9RqtTyR6tT-z5cz1R7Z_9HS0XQC202Lk",
    authDomain: "friendlychat-675fd.firebaseapp.com",
    projectId: "friendlychat-675fd",
    storageBucket: "friendlychat-675fd.appspot.com",
    messagingSenderId: "741738517137",
    appId: "1:741738517137:web:b93ad2be5418c530006530"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
