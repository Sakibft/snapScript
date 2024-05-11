import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

 

const Private = ({children}) => {
  const location = useLocation()
const {user,loading} = UseAuth();
if(loading){
  return <p>loading....</p>
}
if(user){
  return children;
}



  return  <Navigate to='/login' state={location.pathname}></Navigate>
 
};

export default Private;