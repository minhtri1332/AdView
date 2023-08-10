import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";

 const firebaseConfig = {
    apiKey: "AIzaSyCOazFyIqnLy3267Y1r3IxkvqyC0hlHQCU",
    authDomain: "cxview-de6c3.firebaseapp.com",
    databaseURL: "https://cxview-de6c3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cxview-de6c3",
    storageBucket: "cxview-de6c3.appspot.com",
    messagingSenderId: "911975563936",
    appId: "1:911975563936:web:11cd2d0387e35e960c3fc5",
    measurementId: "G-MKBSDJCJWN"
};


// Initialize Firebase
 export  const appFire = initializeApp(firebaseConfig);
export const database = getDatabase(appFire);
