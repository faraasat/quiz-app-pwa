import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj_J6U9rTIUmv0_mZGhENnuQaiWy217G4",
  authDomain: "quizify-pwa.firebaseapp.com",
  projectId: "quizify-pwa",
  storageBucket: "quizify-pwa.appspot.com",
  messagingSenderId: "530539359413",
  appId: "1:530539359413:web:358c4193d53b163bd222fc",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export async function initNotifications() {
  await Notification.requestPermission()
    .then((permission: string) => {
      if (permission === "granted") {
        messaging.getToken().then((currentToken: any) => {
          if (currentToken) {
            console.log("🥰 Thanks For Allowing our notifications!!");
            console.log("TOKEN => ", currentToken);
          } else {
            console.log(
              "😢 Oops! no registration token available. Request permission to generate one."
            );
          }
        });
      }
    })
    .catch((err) => {
      console.log("🥴 An error occurred while retrieving token. ", err);
    });
}
