import React, { useState, useContext, createContext } from "react";


export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  async function singIn(email, password) {
    
  }



  return (
    <AuthContext.Provider value={{ singed: !!user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}
