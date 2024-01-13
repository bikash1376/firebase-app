import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQnvmUtGPrOgmzGMlHn21l_OyqGzZFSm4",
  authDomain: "mern-first-dfab7.firebaseapp.com",
  projectId: "mern-first-dfab7",
  storageBucket: "mern-first-dfab7.appspot.com",
  messagingSenderId: "197468351345",
  appId: "1:197468351345:web:682acff085d00b95abe4d0",
  measurementId: "G-M15Z1ZYTMX"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);