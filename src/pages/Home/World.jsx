import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
 

const World = () => {


  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const fistSidData = blogs.slice(11,13)
  // console.log(fistSidData);
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
  // console.log(blogs);
  return (
    <div className="mt-10 mb-10 w-[50%]   mx-auto">
       <h1 className="font-bold text-lg mb-[-10px] ">World News</h1>
       <progress className="progress progress-error w-[40%] h-1" value="30" max="100"></progress>



       <div>
            <div className="grid grid-cols-1 justify-around container mx-auto gap-y-3">
          {fistSidData &&
            fistSidData.map((item) => {
              // console.log(item.image);
              return (
                <>
                  <div className="flex justify-center items-center">
                    <div className="card w-full bg-base-100 shadow-xl">
                      <img
                      className="h-96"
                         src={item.image}
                        alt="Shoes"
                      />
                      <div className="card-body">
                        <h2 className="text-lg bg-[#F50057] w-16 rounded-md text-center text-white">{item.category}</h2>
                        <p>{item.title}</p>
                        <p>{item.shortDescription}</p>
                        <div className="card-actions justify-end">
                          <Link to={`/details/${item._id}`}>
                            <button className=" text-[#F50057] text-xl "><FaArrowRight /></button>
                          </Link>
                          
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

export default World;