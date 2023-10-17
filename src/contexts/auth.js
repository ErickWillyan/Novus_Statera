import React, {useState, createContext} from "react";
import { Children } from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    return(
        <AuthContext.Provider value={{signed: true}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;