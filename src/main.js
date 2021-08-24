import firebase from 'firebase'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var firebaseConfig = {

    apiKey: "AIzaSyApQH8qrmGETq_Rx9Kg-t4O4bhs_TFfxzc",

    authDomain: "vue-weather-app-ce8ec.firebaseapp.com",

    projectId: "vue-weather-app-ce8ec",

    storageBucket: "vue-weather-app-ce8ec.appspot.com",

    messagingSenderId: "1098939809641",

    appId: "1:1098939809641:web:8a1e3c86dc97bbdf7f07f8",

    measurementId: "G-RWFB6JLPQW"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  firebase.analytics();


