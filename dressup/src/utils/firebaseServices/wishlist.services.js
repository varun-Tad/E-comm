import { db } from "../firebase/firebase.utils";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const WishlistCollectionRef = collection(db, "Wishlist");
class WishlistDataService {
  addWishlist = (newWishlist) => {
    return addDoc(WishlistCollectionRef, newWishlist);
  };

  updateWishlist = (theId, updatedCart) => {
    const wishdoc = doc(db, "Cart", theId);
    return updateDoc(wishdoc, updatedCart);
  };

  deleteWishlist = (theId) => {
    const wishdoc = doc(db, "Cart", theId);
    return deleteDoc(wishdoc);
  };

  getAllWishlist = () => {
    return getDocs(WishlistCollectionRef);
  };

  getWishlist = (theId) => {
    const wishdoc = doc(db, "Cart", theId);
    return getDoc(wishdoc);
  };
}

export default new WishlistDataService();
