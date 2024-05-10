import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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
    <div>
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
       <Link to='/register'>
       <button className="btn">Register</button>
       </Link>
       <Link to='/login'>
       <button className="btn">Login</button>
       </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
