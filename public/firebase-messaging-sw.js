importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDj_J6U9rTIUmv0_mZGhENnuQaiWy217G4",
  authDomain: "quizify-pwa.firebaseapp.com",
  projectId: "quizify-pwa",
  storageBucket: "quizify-pwa.appspot.com",
  messagingSenderId: "530539359413",
  appId: "1:530539359413:web:358c4193d53b163bd222fc",
});

firebase.messaging();
