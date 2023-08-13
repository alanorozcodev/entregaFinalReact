import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import products from './/asyncMock'
import { initializeApp } from "firebase/app";
//import { getFirestore, collection, addDoc } from 'firebase/firestore';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2MbJAcw-N16QwYmuDlgllc3sY51UiPUQ",
  authDomain: "coderhouse-sharktcg.firebaseapp.com",
  projectId: "coderhouse-sharktcg",
  storageBucket: "coderhouse-sharktcg.appspot.com",
  messagingSenderId: "859561690557",
  appId: "1:859561690557:web:4a8482e3b0626decc5bed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

// iterar sobre datos del mock

/*products.forEach ((product) => {
  addDoc(collection(db, 'products' ), product)
  .then ((docRef) => {
    console.log("documento agregado por id", docRef.appId)
  })
  .catch((error) => {
    console.error("error al agregar el documento", error)
  })
})*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


