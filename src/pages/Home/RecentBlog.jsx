import axios from "axios";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentBlog = () => {
 
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const fistSidData = blogs.slice(3,9)
  console.log(fistSidData);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/blogs?filter=${filter}&search=${search}`
      );
      setBlogs(data);
    };
    getData();
  }, [filter, search]);
  console.log(blogs);
  // const firstSixData = user.slice(0,8);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10 mb-10">Recent blog</h1>
      <div>
        <div className="grid grid-cols-3 justify-around container mx-auto gap-y-3">
          {fistSidData &&
            fistSidData.map((item) => {
              // console.log(item.image);
              return (
                <>
                  <div className="flex justify-center items-center">
                    <div className="card w-96 bg-base-100 shadow-xl">
                      <img
                        className="h-52 w-full"
                        src={item.image}
                        alt="Shoes"
                      />
                      <div className="card-body">
                        <h2 className="card-title">{item.category}</h2>
                        <p>{item.title}</p>
                        <p>{item.shortDescription}</p>
                        <div className="card-actions justify-end">
                          <Link to={`/details/${item._id}`}>
                            <button className="btn btn-primary">Details</button>
                          </Link>
                          <button className="btn btn-primary">Wishlist</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
