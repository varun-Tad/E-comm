import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };
  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log("useEffect called");
        createUserDocumentFromAuth(user); //Here if logged in create a document for the user
        setCurrentUser(user);
        // navigate(-1);
      } else {
        setCurrentUser(user);
        navigate("/");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
};
