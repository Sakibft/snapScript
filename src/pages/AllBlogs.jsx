import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState();
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const {user}=UseAuth();
  const userEmail = user?.email;
 
 
 
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
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    console.log(text);
    setSearch(text);
    // console.log(text);
  };
  // post wishlist in all blog page 
  const handleWishlist = item =>{
    const {category,image,longDescription,shortDescription,title}=item;
    const wishKor = {userEmail,category,image,longDescription,shortDescription,title}
    console.log(wishKor);
    axios.post(`${import.meta.env.VITE_API_URL}/wish`, wishKor, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log('Data successfully posted:', response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });

    console.log(item);
  }
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Game">Game</option>
              <option value="Travel">Travel</option>
              <option value="Politics">Politics</option>
              <option value="Health">Health</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-around container mx-auto gap-y-3">
        {blogs &&
          blogs.map((item) => {
            // console.log(item.image);
            return (
              <>
                <div className="flex justify-center items-center">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <img className="h-52 w-full" src={item.image} alt="Shoes" />
                    <div className="card-body">
                      <h2 className="card-title">{item.category}</h2>
                      <p>{item.title}</p>
                      <p>{item.shortDescription}</p>
                      <div className="card-actions justify-end">
                        <Link to={`/details/${item._id}`}>
                          <button className="btn border-[#F50057] text-[#F50057] bg-white">Details</button>
                        </Link>
                        <button onClick={()=>handleWishlist(item)} className="btn border-primary bg-white text-primary">Wishlist</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AllBlogs;
