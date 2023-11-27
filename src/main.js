import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBafNXQTk9gR8HdoDo_Gr4aFaLwebM3sxg",
  authDomain: "ramco-bill-app.firebaseapp.com",
  projectId: "ramco-bill-app",
  storageBucket: "ramco-bill-app.appspot.com",
  messagingSenderId: "901385745669",
  appId: "1:901385745669:web:4a667d4a4c16d50cc1736c",
  measurementId: "G-T73RL9DYW4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
