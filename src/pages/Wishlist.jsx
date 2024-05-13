import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import useAxiosSecure from "../components/useAxiosSecure";

const Wishlist = () => {
  const [wish, setWish] = useState();
 const [dlt, setDlt] = useState();
 console.log(dlt);
 const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  //  console.log(user,'shsh');
  console.log(wish);
  const url = `/wish/${user?.email}`
  useEffect(() => {
    // const getData = async () => {
    
    //   const { data } = await axios(
    //     `${import.meta.env.VITE_API_URL}/wish/${user?.email}`,{withCredentials:true}
    //   );
    //   setWish(data);
    // };
    // getData();
    axiosSecure.get(url)
    .then(res => setWish(res.data))
  }, [url,axiosSecure]);
  const handeDelete = async (_id) => {
 
      const getData = async () => {
      
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/delete/${_id}`
        );
        setDlt(data.data);
        console.log(data,'hahahah');
      };
      getData();
    
    console.log(_id);
  }

  return (
    <div>
      {wish &&
        wish.map((item) => (
          <div key={item._id}>
            <div className="flex justify-center items-center">
              <div className="card w-96 bg-base-100 shadow-xl">
                <img className="h-52 w-full" src={item.image} alt="Shoes" />
                <div className="card-body">
                  <h2 className="card-title">{item.category}</h2>
                  <p>{item.title}</p>
                  <p>{item.shortDescription}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/details/${item._id}`}>
                          <button className="btn border-primary text-primary bg-white">Details</button>
                        </Link>
                        <button onClick={()=>handeDelete(item._id)}  className="btn text-2xl border border-[#F50057] text-[#F50057] bg-white"><MdOutlineDelete /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Wishlist;
