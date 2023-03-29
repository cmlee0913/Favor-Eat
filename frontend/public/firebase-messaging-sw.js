// /public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js"
);

// 이곳에 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
const config = {
  apiKey: "AIzaSyBkvLz36_zD93UwXx4wf8P101EeX1pDLyQ",
  authDomain: "test-pwa-7907d.firebaseapp.com",
  projectId: "test-pwa-7907d",
  storageBucket: "test-pwa-7907d.appspot.com",
  messagingSenderId: "11003173258",
  appId: "1:11003173258:web:c4468671141151e5141073",
  measurementId: "G-H66VD1BMY3",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const messaging = firebase.messaging();

// 백그라운드 상태에서 알림 수신 시 호출되는 이벤트 리스너
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
