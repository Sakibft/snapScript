import { createBrowserRouter } from "react-router-dom";
import Rot from "../layouts/Rot";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rot></Rot>,
   children:[
    {
      path:"/",
      element: <h1>hahah</h1>
    },
    {
      path:"/m",
      element: <h1>lalal</h1>
    }
   ]
    
  },
]);
export default router;