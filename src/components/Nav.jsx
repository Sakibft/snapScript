import { BiLogIn } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const Nav = () => {
  const [success,setSuccess]=useState();
  const [erro,setError]=useState();
  if (success) {
    return <Link to="/"></Link>;
  }
  if(erro){
    toast.error(erro)
  }
  const {user,logOut} = UseAuth()
  const handleLogOut= () => {
    logOut()
    .then((result) => {
    <Link to='/'></Link>
      setSuccess(result);
      console.log(result);
    })
    .catch((error) => {
      setError(error.message);
    });
    console.log('ahah');
  }
   const links = (
    <div className="space-x-8">
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      to="/allblog"
    >
    All Blog
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      to="/addblogs"
    >
      Add Blogs
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      to="/featuredblogs"
    >
      Featured Blogs
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white  lg:px-2 py-2 bg-[#8EA7FF] rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      to="/wishlist"
    >
      Wishlist
    </NavLink>
  </div>
   )
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Add Blog</a>
                <ul className="p-2">
                  <li>
                    <a>All blogs</a>
                  </li>
                  <li>
                    <a>Featured Blogs</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Wishlist</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">News Hub</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
            {/* dainami login logout */}

        {user ? (
          <div className="  flex justify-center items-center gap-2">
              <div className="pointer group relative mx-auto  flex   w-max justify-center">
              <div className="w-10 border hover:border-blue-500 rounded-full">
                  <img
                    className="rounded-full w-full"
                    src={user?.photoURL}
                    alt="nai"
                  />
                </div>
            {/* Hover Text */}
            <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100 z-10 ">
            <p className=" rounded-md bg-[#8EA7FF] text-white p-2" >
                    
                    {user?.displayName} 
                     </p>
                <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#8EA7FF]  shadow-[0px_0px_10px_0px_#8EA7FF]"></span>
            </div>
            {/* Hover button */}
        </div>
           
           
            <button
              onClick={handleLogOut}
              className="btn text-lg   bg-[#8EA7FF] text-white w-24 "
            >
               
              Logout 
              
            </button>
          </div>
        ) : (
         <Link to='/login'>
          <div className="dropdown dropdown-hover">
            <button className="btn w-24 bg-[#8EA7FF] text-white hover:bg-[#8EA7FF]">
              <BiLogIn className="text-lg" /> Login
            </button>
          </div>
         </Link>
        )}



       {/* <Link to='/register'>
       <button className="btn">Register</button>
       </Link>
       <Link to='/login'>
       <button className="btn">Login</button>
       </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
