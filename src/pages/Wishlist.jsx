import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const Wishlist = () => {
  const [wish, setWish] = useState();
  const { user } = UseAuth();
  //  console.log(user,'shsh');
  console.log(wish);
  useEffect(() => {
    const getData = async () => {
    
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/wish/${user?.email}`
      );
      setWish(data);
    };
    getData();
  }, [user]);

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
                    {/* <Link to={`/details/${item._id}`}>
                          <button className="btn btn-primary">Details</button>
                        </Link>
                        <button onClick={()=>handleWishlist(item)} className="btn btn-primary">Wishlist</button> */}
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
