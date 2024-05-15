import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../components/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Wishlist = () => {
  // const [wish, setWish] = useState();
 const [dlt, setDlt] = useState();
 console.log(dlt);
 const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  //  console.log(user,'shsh');
  // console.log(wish);
  const url = `/wish/${user?.email}`

// get wish
  const {data : wish,refetch } = useQuery({
    queryFn : () => getData() ,
    queryKey: ['wishData']
  })
  console.log(wish);
  const getData =  async () => {
const {data} = await axiosSecure.get(url)
return data;
  }
  // useEffect(() => {
  //   // const getData = async () => {
    
  //   //   const { data } = await axios(
  //   //     `${import.meta.env.VITE_API_URL}/wish/${user?.email}`,{withCredentials:true}
  //   //   );
  //   //   setWish(data);
  //   // };
  //   // getData();
  //   axiosSecure.get(url)
  //   .then(res => setWish(res.data))
  // }, [url,axiosSecure]);



  const {mutateAsync} = useMutation({
mutationFn: async ({_id})=> {
  const { data } = await axios.delete(
    `${import.meta.env.VITE_API_URL}/delete/${_id}`
  )
  console.log(data);
},
onSuccess: () => {
  toast.success('Deleted 💔')
  refetch()
}
  })





  const handeDelete = async (_id) => {
 
      // const getData = async () => {
      
      //   const { data } = await axios.delete(
      //     `${import.meta.env.VITE_API_URL}/delete/${_id}`
      //   );
      //   setDlt(data.data);
      //   console.log(data,'hahahah');
      // };
      // getData();
    
   
      mutateAsync({_id})

    console.log(_id);
  }

  return (
    <div className="w-[50%] mx-auto flex justify-center items-center">
      <div className=" grid  lg:grid-cols-2  mt-5 gap-4">
      {wish &&
        wish.map((item) => (
          <div key={item._id}>
      
              <div className="card w-96 h-[500px] bg-base-100 shadow-lg">
                <img className="h-52 w-full" src={item.image} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">{item.category}</h2>
                  <p>{item.title}</p>
                  <p>{item.shortDescription}</p>
                  <div className="card-actions justify-end">
                  <Link to={`/details/${item.blogid}`}>
                          <button className="btn border-primary text-primary bg-white">Details</button>
                        </Link>
                        <button onClick={()=>handeDelete(item._id)}  className="btn text-2xl border border-[#F50057] text-[#F50057] bg-white"><MdOutlineDelete /></button>
                  </div>
                </div>
              </div>
            </div>
       
        ))}
    </div>
    </div>
  );
};

export default Wishlist;
