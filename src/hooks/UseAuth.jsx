import { useContext } from "react";
import { AuthenticationContext } from "../providers/AuthContextComponent";

 

const UseAuth = () => {

 
    const all = useContext(AuthenticationContext)
  return all ;
 
};

export default UseAuth;