
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_URL,
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
  return items
}

export const getProduct = async(id) => {
  const product = await getDoc(doc(db, 'products', id))
  const item = {...product.data(), id: product.id}
  return item
}

export const updateProduct = async(id, info) => {
  await updateDoc(doc(db, 'products', id), info)
}

export const deleteProduct = async(id) => {
  await deleteDoc(doc(db, 'products', id))
}

export const createPurchaseOrder = async(client, products, precioTotal, date) => {
  const purchaseOrder = await addDoc(collection(db,'purchaseOrder'), {
    datosCliente : client,
    productos: products,
    total: precioTotal,
    fecha: date
  })
  return purchaseOrder

}

export const getPurchaseOrder = async(id) => {
  const purchaseOrder = await getDoc(doc(db, "purchaseOrder", id))
  const purchase = {...purchaseOrder.data(), id: purchaseOrder.id}
  return purchase
}