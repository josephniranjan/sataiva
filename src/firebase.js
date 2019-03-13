import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBrOcP6xniw0sD5QZcFvCSlCXMFd3kDqT8",
    authDomain: "sataiv.firebaseapp.com",
    databaseURL: "https://sataiv.firebaseio.com",
    projectId: "sataiv",
    storageBucket: "sataiv.appspot.com",
    messagingSenderId: "654641365655"
  };

  export const firebaseApp =  firebase.initializeApp(config);

