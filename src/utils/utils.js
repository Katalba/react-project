
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDoc, getDocs, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6mX2kfxIEQqOJydr3uFtKslX3WQ8XxG0",
  authDomain: "valkiria-react.firebaseapp.com",
  projectId: "valkiria-react",
  storageBucket: "valkiria-react.appspot.com",
  messagingSenderId: "397930973144",
  appId: "1:397930973144:web:f5d8cd289f21ffa58e54ad"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const chargeDB = async () => {
  const promise = await fetch('./json/all-products.json')
  const products = await promise.json()
  products.forEach( async (prod) => {
    await addDoc(collection (db,'products'), {
      title: prod.title,
      imagen: prod.imagen,
      detailImg: prod.detailImg,
      categoria: prod.categoria,
      precio: prod.precio,
      stock: prod.stock
    })
  })
}

export const getProducts = async() => {
  const products = await getDocs(collection(db, 'products'))
  const items = products.docs.map(prod => {
    return {...prod.data(), id: prod.id}
  })
  console.log(items)
}