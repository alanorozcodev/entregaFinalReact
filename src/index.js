import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';







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


