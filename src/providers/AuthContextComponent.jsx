import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
 
const Provider = new GoogleAuthProvider();
export const AuthenticationContext = createContext();

const AuthContextComponent = ({children}) => {
  const  [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
   console.log(user);
   
   
   
  
    const createUser = (email,password)=>{
      setLoading(true);
       
    return createUserWithEmailAndPassword(auth,email,password 
    )
    }
    
    const loginUser = (email,password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    
  
    const loginWithGoogle = ()=>{
      setLoading(true);
      return signInWithPopup(auth,Provider)
    }
  
    const logOut = () => {
      return signOut(auth)
     }
  
     const updateUserProfile = (name,photo) => {
    return  updateProfile(auth.currentUser, {
        displayName:name, 
        photoURL: photo
      }) 
     }
  
    useEffect(()=>{
  const unSubsCribe = onAuthStateChanged(auth,currentUser => {
    if(currentUser){
      setUser(currentUser)
      setLoading(false);
    }
    else{
      setUser(null)
      setLoading(false)
    }
   });
   return ()  => {
    unSubsCribe();
   }
  
    },[]);
   
  
  
    const info = {
      user,
      createUser,
       loginUser,
    
       loginWithGoogle,
       logOut,
       loading,
       updateUserProfile
      };
  return (
    <AuthenticationContext.Provider value={info}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContextComponent;