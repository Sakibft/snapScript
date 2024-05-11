import { createBrowserRouter } from "react-router-dom";
import Rot from "../layouts/Rot";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlist from "../pages/Wishlist";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import Error from "../pages/Error";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
    errorElement:<Error></Error>,
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
    {
      path:"/details/:id",
      element:<Details></Details>,
      loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`)
    }

   ]
    
  },
]);
export default router;