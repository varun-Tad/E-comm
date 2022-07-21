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

// const WishlistCollectionRef = collection(db, "Wishlist");
// class WishlistDataService {
//   addWishlist = (newWishlist) => {
//     return addDoc(WishlistCollectionRef, newWishlist);
//   };

//   updateWishlist = (theId, updatedCart) => {
//     const wishdoc = doc(db, "Wishlist", theId);

//     return updateDoc(wishdoc, updatedCart);
//   };

//   deleteWishlist = (theId) => {
//     const wishdoc = doc(db, "Wishlist", theId);
//     console.log(doc(db, "Wishlist", theId));
//     console.log("calling.....");
//     console.log(theId);
//     return deleteDoc(wishdoc);
//   };

//   getAllWishlist = () => {
//     return getDocs(WishlistCollectionRef);
//   };

//   getWishlist = (theId) => {
//     const wishdoc = doc(db, "Wishlist", theId);
//     return getDoc(wishdoc);
//   };
// }

// export default new WishlistDataService();
