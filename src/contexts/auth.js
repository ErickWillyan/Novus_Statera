import React, { useState, useContext, createContext } from "react";
import firebase from "../firebase/firebaseConnection";

// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function singIn(email, password) {
    await firebase.auth();
    signInWithEmailAndPassword(email, password).then(async (value) => {
      alert("Bem-vindo:" + value.user.email);
    });

    //   let uid = value.user.uid;
    //   const userProfile = await firebase
    //     .firestore()
    //     .collection("users")
    //     .doc(uid)
    //     .get();
    //   let data = {
    //     uid: uid,
    //     nome: userProfile.data().nome,
    //     email: value.user.email,
    //   };
    // console.log(useProfile.data().nome);
    // });
  }

  return (
    <AuthContext.Provider value={{ singed: !!user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
