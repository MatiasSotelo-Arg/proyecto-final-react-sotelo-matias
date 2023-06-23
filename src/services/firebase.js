import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZGqxo_farmW2WXtHVrgr1Pgf_1Tcx-vI",
  authDomain: "proyecto-react-4b017.firebaseapp.com",
  projectId: "proyecto-react-4b017",
  storageBucket: "proyecto-react-4b017.appspot.com",
  messagingSenderId: "754671597625",
  appId: "1:754671597625:web:9de47d9bdcd24123f9f5e8"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export async function getData(){
    const productsCollectionRef = collection(db, "products")
    const productsSnapshot = await getDocs(productsCollectionRef);

    const arrayDocs = productsSnapshot.docs;

    const dataDocs = arrayDocs.map((doc) => {
        return {
            ...doc.data(), id: doc.id 
        }
    })

    return dataDocs;
}

export async function getItemData(idUrl) {
    const docRef = doc(db, "products", idUrl);
    const docSnap = await getDoc(docRef)
    return { id: docSnap.id, ...docSnap.data() }
}

export async function getCategoryData(category) {
    const productsCollectionRef = collection(db, "products")
    const q = query(productsCollectionRef, where("marca", "==", category))

    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs;

    const dataDocs = arrayDocs.map((doc) => {
        return {
            ...doc.data(), id: doc.id 
        }
    })

    return dataDocs;
}

export async function createOrder(data) {
    const orderCollectionRef = collection(db, "orders")

    const response = await addDoc(orderCollectionRef, data)

    console.log("orden creada", response.id)

    return response.id;   
}

