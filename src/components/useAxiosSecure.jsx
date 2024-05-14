import axios from "axios";
import { useEffect } from "react";
import UseAuth from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL:'https://b9a11-server.vercel.app',
  withCredentials:true
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
const {logOut} = UseAuth()
useEffect(()=>{
  axiosSecure.interceptors.response.use( res => {
    return res ;
  },error => {
    console.log('error tracked in the interceptors', error.response);
    if(error.response.status === 401 || error.response.status === 403){
      console.log('logout');
      logOut()
      .then(() => {
        navigate('/login')
      })
      .catch(error => console.log(error))
    }
  })
})


  return  axiosSecure;
};

export default useAxiosSecure;