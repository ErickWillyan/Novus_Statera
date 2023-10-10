import React, { useState, useContext, createContext } from "react";
import { firebase } from "@react-native-firebase/auth";

import {} from "@react-native-firebase";

// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function singIn(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user);
      });
  }

  return (
    <AuthContext.Provider value={{ singed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
