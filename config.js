import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyClAiypia3JTvyLqowxWyQahHBGpu_Z2lA",
    authDomain: "myquizapp-f29fd.firebaseapp.com",
    projectId: "myquizapp-f29fd",
    storageBucket: "myquizapp-f29fd.appspot.com",
    messagingSenderId: "20835757021",
    appId: "1:20835757021:web:adc3d1151ea8ea646fe434",
    measurementId: "G-8L0YD3MB7C"
  };

if (firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};  