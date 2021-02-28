import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDVNPrIqyHTsCYezy0AQLJ4CsK3xpJTgVI',
  authDomain: 'buzzer-app-66571.firebaseapp.com',
  databaseURL: 'https://buzzer-app-66571-default-rtdb.firebaseio.com',
  projectId: 'buzzer-app-66571',
  storageBucket: 'buzzer-app-66571.appspot.com',
  messagingSenderId: '492565772955',
  appId: '1:492565772955:web:4ee6fa805d43d3982fa43e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();