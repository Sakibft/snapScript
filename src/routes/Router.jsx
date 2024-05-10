import { createBrowserRouter } from "react-router-dom";
import Rot from "../layouts/Rot";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
   children:[
    {
      path:"/",
      element:  <Home></Home>
    },
    {
      path:"/addblogs",
      element: <AddBlog></AddBlog>
    },
    {
      path:"/allblog",
      element:<AllBlogs></AllBlogs>
    },
    {
      path:"/featuredblogs",
      element:  <FeaturedBlogs></FeaturedBlogs>
    },
    {
      path:"/wishlist",
      element: <Wishlist></Wishlist>
    },
    {
      path:"/register",
      element: <Register></Register>
    },
    {
      path:"/login",
      element:<Login></Login>
    },

   ]
    
  },
]);
export default router;