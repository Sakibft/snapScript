// import { BiLogIn } from "react-icons/bi";
// import { Link, NavLink } from "react-router-dom";
// import UseAuth from "../hooks/UseAuth";
// import { useState } from "react";
// import toast from "react-hot-toast";

// const Nav = () => {
//   const [success, setSuccess] = useState();
//   const [erro, setError] = useState();
//   if (success) {
//     return <Link to="/"></Link>;
//   }
//   if (erro) {
//     toast.error(erro);
//   }
//   const { user, logOut } = UseAuth();
//   const handleLogOut = () => {
//     logOut()
//       .then((result) => {
//         <Link to="/"></Link>;
//         setSuccess(result);
//         console.log(result);
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//     console.log("ahah");
//   };
//   const links = (
//     <div className="space-x-8">
//       <NavLink
//         className={({ isActive }) =>
//           isActive
//             ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
//             : "font-semibold text-2xl  "
//         }
//         to="/"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         className={({ isActive }) =>
//           isActive
//             ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
//             : "font-semibold text-2xl  "
//         }
//         to="/allblog"
//       >
//         All Blog
//       </NavLink>
//       <NavLink
//         className={({ isActive }) =>
//           isActive
//             ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
//             : "font-semibold text-2xl  "
//         }
//         to="/addblogs"
//       >
//         Add Blogs
//       </NavLink>

//       <NavLink
//         className={({ isActive }) =>
//           isActive
//             ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
//             : "font-semibold text-2xl  "
//         }
//         to="/featuredblogs"
//       >
//         Featured Blogs
//       </NavLink>
//       <NavLink
//         className={({ isActive }) =>
//           isActive
//             ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
//             : "font-semibold text-2xl  "
//         }
//         to="/wishlist"
//       >
//         Wishlist
//       </NavLink>
//     </div>
//   );
//   return (
//     <div className="container mx-auto">
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold    "
//                       : "font-semibold   "
//                   }
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold    "
//                       : "font-semibold    "
//                   }
//                   to="/allblog"
//                 >
//                   All Blog
//                 </NavLink>
//                 <ul className="p-2">
//                   <li>
//                     <NavLink
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold    "
//                           : "font-semibold    "
//                       }
//                       to="/addblogs"
//                     >
//                       Add Blogs
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold   "
//                           : "font-semibold    "
//                       }
//                       to="/featuredblogs"
//                     >
//                       Featured Blogs
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold   "
//                       : "font-semibold  "
//                   }
//                   to="/wishlist"
//                 >
//                   Wishlist
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//           <a className="btn btn-ghost font-bold text-2xl">SnapScript</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>
//         <div className="navbar-end space-x-3">
//           {/* dainami login logout */}

//           {user ? (
//             <div className="  flex justify-center items-center gap-2">
//               <div className="pointer group relative mx-auto  flex   w-max justify-center">
//                 <div className="w-10 border hover:border-primary rounded-full">
//                   <img
//                     className="rounded-full w-full"
//                     src={user?.photoURL}
//                     alt="nai"
//                   />
//                 </div>
//                 {/* Hover Text */}
//                 <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100 z-10 ">
//                   <p className=" rounded-md bg-primary text-white p-2">
//                     {user?.displayName}
//                   </p>
//                   <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-primary   "></span>
//                 </div>
//                 {/* Hover button */}
//               </div>

//               <button
//                 onClick={handleLogOut}
//                 className="btn text-lg   bg-primary hover:bg-white hover:border-primary hover:text-primary text-white w-24 "
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="space-x-4">
//             <NavLink to="/register" className="btn bg-primary text-white">
//               Register
//             </NavLink>
//             <NavLink to="/login" className="btn bg-primary text-white">
//               Login
//             </NavLink>
//           </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React from "react";
import { NavLink, Link } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { GrLanguage } from "react-icons/gr";
const Nav = () => {
  const { t } = useTranslation(); // Use useTranslation hook
  const [success, setSuccess] = useState();
  const [erro, setError] = useState();
  const { user, logOut } = UseAuth();
  const {  i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleLogOut = async () => {
    try {
      await logOut();
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const links = (
    <div className="space-x-8">
      {/* Translate the texts using t() function */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary border-b lg:px-2 py-2 border-primary rounded-md p-3 font-semibold text-2xl"
            : "font-semibold text-2xl"
        }
        to="/"
      >
        {t("nav.home")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary border-b lg:px-2 py-2 border-primary rounded-md p-3 font-semibold text-2xl"
            : "font-semibold text-2xl"
        }
        to="/allblog"
      >
        {t("nav.allBlog")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/addblogs"
      >
        {t("nav.addBlogs")}
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/featuredblogs"
      >
        {t("nav.featuredBlogs")}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary  border-b lg:px-2 py-2 border-primary rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
        to="/wishlist"
      >
        {/* Wishlist */}
        {t("nav.wishlist")}
      </NavLink>
      {/* Translate other links as needed */}
    </div>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Dropdown menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Dropdown icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Dropdown content */}
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {/* Translate dropdown items */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b lg:px-2 py-2 border-primary rounded-md p-3 font-semibold"
                      : "font-semibold"
                  }
                  to="/"
                >
                  {t("nav.home")}
                </NavLink>
              </li>
              {/* Add more dropdown items as needed */}
            </ul>
          </div>
          {/* Logo */}
          <Link className="btn btn-ghost font-bold text-2xl" to="/">
            SnapScript
          </Link>
        </div>

        {/* Navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar end */}
        <div className="navbar-end space-x-3">
        {/* 
       
       
         */}
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className=" m-1">
            <GrLanguage className="text-4xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <button className="btn" onClick={() => changeLanguage("en")}>English</button>
              </li>
              <li>
              <button className="btn" onClick={() => changeLanguage("fr")}>Français</button>
              </li>
              <li>
              <button className="btn" onClick={() => changeLanguage("bn")}>Bangla</button>
              </li>
              <li>
              <button className="btn" onClick={() => changeLanguage("hi")}>Hindi</button>
              </li>
            </ul>
          </div>
          {user ? (
            // User is logged in
            <div className="flex justify-center items-center gap-2">
              {/* User profile */}
              <div className="pointer group relative mx-auto flex w-max justify-center">
                <div className="w-10 border hover:border-primary rounded-full">
                  <img
                    className="rounded-full w-full"
                    src={user?.photoURL}
                    alt="Profile"
                  />
                </div>
                {/* Hover profile info */}
                <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100 z-10">
                  <p className="rounded-md bg-primary text-white p-2">
                    {user?.displayName}
                  </p>
                  <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-primary"></span>
                </div>
              </div>
              {/* Logout button */}
              <button
                onClick={handleLogOut}
                className="btn text-lg bg-primary hover:bg-white hover:border-primary hover:text-primary text-white w-24"
              >
                {t("nav.logout")}
              </button>
            </div>
          ) : (
            // User is not logged in
            <div className="space-x-4">
              <NavLink to="/register" className="btn bg-primary text-white">
                {t("nav.register")}
              </NavLink>
              <NavLink to="/login" className="btn bg-primary text-white">
                {t("nav.login")}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
