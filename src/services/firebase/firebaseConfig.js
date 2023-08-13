import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD2MbJAcw-N16QwYmuDlgllc3sY51UiPUQ",
    authDomain: "coderhouse-sharktcg.firebaseapp.com",
    projectId: "coderhouse-sharktcg",
    storageBucket: "coderhouse-sharktcg.appspot.com",
    messagingSenderId: "859561690557",
    appId: "1:859561690557:web:4a8482e3b0626decc5bed4"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

