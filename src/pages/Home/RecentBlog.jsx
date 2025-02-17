// import axios from "axios";
// // import { FirebaseError } from "firebase/app";
// // import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import UseAuth from "../../hooks/UseAuth";
// import { useQuery } from "@tanstack/react-query";
// import { motion } from "framer-motion";
// import { useTranslation } from 'react-i18next';
// const RecentBlog = () => {
//   const { t } = useTranslation();
//   // const [blogs, setBlogs] = useState([]);
//   // const [filter, setFilter] = useState([]);
//   // const [search, setSearch] = useState([]);
//   const { user } = UseAuth();
//   const userEmail = user?.email;
//   // const fistSidData = blogs.slice(3,9)
//   // console.log(fistSidData);

//   const {
//     data: blogs,
//     isLoading,
//     refetch,
//     isError,
//     error,
//   } = useQuery({
//     queryFn: () => getData(),
//     queryKey: ["allBlogData"],
//   });
//   console.log(blogs);
//   const getData = async () => {
//     const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`);
//     return data;
//   };
//   const SixData = blogs?.slice(3, 9);
//   console.log(SixData);

//   // useEffect(() => {
//   //   const getData = async () => {
//   //     const { data } = await axios(
//   //       `${
//   //         import.meta.env.VITE_API_URL
//   //       }/blogs?filter=${filter}&search=${search}`
//   //     );
//   //     setBlogs(data);
//   //   };
//   //   getData();
//   // }, [filter, search]);
//   // post wishlist
//   const handleWishlist = (item) => {
//     const { category, image, longDescription, shortDescription, title } = item;
//     const wishKor = {
//       userEmail,
//       category,
//       image,
//       longDescription,
//       shortDescription,
//       title,
//     };
//     console.log(wishKor);
//     axios
//       .post(`${import.meta.env.VITE_API_URL}/wish`, wishKor, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log("Data successfully posted:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error posting data:", error);
//       });

//     console.log(item);
//   };

//   // console.log(blogs);
//   // const firstSixData = user.slice(0,8);
//   return (
//     <div>
//       <h1 className="text-center text-3xl font-bold  mb-10">Recent blog</h1>
//       <div>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-around container mx-auto gap-y-3">
//           {SixData &&
//             SixData.map((item) => {
//               // console.log(item.image);
//               return (
//                 <>
//                   <div className="flex justify-center items-center">
//                     <div className="card w-96 h-[500px] bg-base-100  shadow-lg">
//                       <img
//                         className="h-52 w-full"
//                         src={item.image}
//                         alt="Shoes"
//                       />
//                       <div className="card-body">
//                         <h2 className="card-title">{item.category}</h2>
//                         <p className="font-serif">{item.title}</p>
//                         <hr />
//                         <p>{item.shortDescription}</p>
//                         <div className="card-actions justify-end gap-5">
//                           <Link to={`/details/${item._id}`}>
//                             <motion.dev
//                                 whileHover={{ scale: 1.2 }}
//                              className="btn text-[#F50057] border-[#F50057] bg-white">
//                               Details
//                             </motion.dev>
//                           </Link>
//                           {/* <button onClick={()=>handleWishlist(item)} className="btn border-primary text-primary bg-white">Wishlist</button> */}
//                           <motion.div
//                             whileHover={{ scale: 1.2 }}
//                             className="btn border-primary text-primary bg-white"
//                             onClick={() => handleWishlist(item)}
//                           >
//                             Wishlist
//                           </motion.div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentBlog;







// translate version 
// src/components/RecentBlog.jsx
import axios from "axios";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RecentBlog = () => {
  const { t } = useTranslation();
  const { user } = UseAuth();
  const userEmail = user?.email;

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`);
    return data;
  };

  const {
    data: blogs,
    isLoading,
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: getData,
    queryKey: ["allBlogData"],
  });

  const SixData = blogs?.slice(3, 9);

  const handleWishlist = (item) => {
    const { category, image, longDescription, shortDescription, title } = item;
    const wishKor = {
      userEmail,
      category,
      image,
      longDescription,
      shortDescription,
      title,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/wish`, wishKor, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Data successfully posted:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-10">
        {t("recentBlog")}
      </h1>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-around container mx-auto gap-y-3">
          {SixData &&
            SixData.map((item) => (
              <div key={item._id} className="flex justify-center items-center">
                <div className="card w-96 h-[500px] bg-base-100 shadow-lg">
                  <img className="h-52 w-full" src={item.image} alt="Blog" />
                  <div className="card-body">
                    <h2 className="card-title">{item.category}</h2>
                    <p className="font-serif">{item.title}</p>
                    <hr />
                    <p>{item.shortDescription}</p>
                    <div className="card-actions justify-end gap-5">
                      <Link to={`/details/${item._id}`}>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="btn text-[#F50057] border-[#F50057] bg-white"
                        >
                          {t("details")}
                        </motion.div>
                      </Link>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="btn border-primary text-primary bg-white"
                        onClick={() => handleWishlist(item)}
                      >
                        {t("wishlist")}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
