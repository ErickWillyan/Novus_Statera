import React, {useState, createContext} from "react";
import firebase from "firebase";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState();

    async function signUp(email, senha, nome){
        await auth().crateUserWithEmailAndPassword(email, senha)
        .then(async(value)=> {
            let uid = value.user.uid
            await firestore().collection('users')
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;