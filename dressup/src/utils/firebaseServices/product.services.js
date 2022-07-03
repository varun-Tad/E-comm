// import { dbOne } from "../firebase/firebase.config";

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

const ProductCollectionRef = collection(db, "Products");
class ProductDataService {
  getAllProduct = () => {
    return getDocs(ProductCollectionRef);
  };
}

export default new ProductDataService();
