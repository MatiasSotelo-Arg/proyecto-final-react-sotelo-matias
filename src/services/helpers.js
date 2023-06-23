// exportar los datos de forma local 
import products from "../data/productos"

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZGqxo_farmW2WXtHVrgr1Pgf_1Tcx-vI",
    authDomain: "proyecto-react-4b017.firebaseapp.com",
    projectId: "proyecto-react-4b017",
    storageBucket: "proyecto-react-4b017.appspot.com",
    messagingSenderId: "754671597625",
    appId: "1:754671597625:web:9de47d9bdcd24123f9f5e8"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
console.log(db);

export async function exportData() {
  const productsCollectionRef = collection(db, "products");

  for (let item of products) {
    item.index = item.id;
    delete item.id;
    const res = await addDoc(productsCollectionRef, item);
    console.log("Documento creado:", res.id);
  }
}
