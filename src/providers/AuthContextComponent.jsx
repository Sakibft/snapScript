import { createUserWithEmailAndPassword, linkWithCredential, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
 
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
    const userEmail = currentUser?.email || user?.email ;
const loggedUser = {email: userEmail}
 
      setUser(currentUser)
      setLoading(false);
   
    // if user exists then issue a token
    if(currentUser){
      axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedUser, {
       withCredentials:true
     })   
      .then(res => {
       console.log('token response',res.data);
      })
      .catch(error => {
       console.log(error);
      })
     }
     else{
       axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser , {
         withCredentials:true
       })
       .then(res => {
         console.log(res.data);
       })
       .catch(error => {

         console.log('token error',error);
       }
       )
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