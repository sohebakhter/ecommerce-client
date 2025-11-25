"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import Cookies from "js-cookie";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Create user
  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const token = await result.user.getIdToken();
    Cookies.set("firebaseToken", token, { secure: true });
    return result;
  };

  // Login user
  const signInUser = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    const token = await result.user.getIdToken();
    Cookies.set("firebaseToken", token, { secure: true });
    return result;
  };

  // Google login
  const googleSignIn = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    Cookies.set("firebaseToken", token, { secure: true });
    return result;
  };

  // Logout
  const signOutUser = () => {
    setLoading(true);
    Cookies.remove("firebaseToken");
    return signOut(auth);
  };

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        const token = await currentUser.getIdToken();
        Cookies.set("firebaseToken", token, { secure: true });
      } else {
        Cookies.remove("firebaseToken");
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
