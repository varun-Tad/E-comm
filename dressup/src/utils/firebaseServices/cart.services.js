// import { db } from "../firebase/firebase.utils";

// import {
//   collection,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";

// const CartCollectionRef = collection(db, "Cart");
// class CartDataService {
//   addCart = (newCart) => {
//     return addDoc(CartCollectionRef, newCart);
//   };

//   updateCart = (theId, updatedCart) => {
//     const Cartdoc = doc(db, "Cart", theId);
//     return updateDoc(Cartdoc, updatedCart);
//   };

//   deleteCart = (theId) => {
//     const Cartdoc = doc(db, "Cart", theId);
//     return deleteDoc(Cartdoc);
//   };

//   getAllCart = () => {
//     return getDocs(CartCollectionRef);
//   };

//   getCart = (theId) => {
//     const cartDoc = doc(db, "Cart", theId);
//     return getDoc(cartDoc);
//   };
// }

// export default new CartDataService();
