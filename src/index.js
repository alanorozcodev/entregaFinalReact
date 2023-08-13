import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyD2MbJAcw-N16QwYmuDlgllc3sY51UiPUQ",
  authDomain: "coderhouse-sharktcg.firebaseapp.com",
  projectId: "coderhouse-sharktcg",
  storageBucket: "coderhouse-sharktcg.appspot.com",
  messagingSenderId: "859561690557",
  appId: "1:859561690557:web:4a8482e3b0626decc5bed4"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const app = initializeApp(firebaseConfig);
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


