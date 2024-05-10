import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

 

const Rot = () => {
  return (
    <div>
 <Nav></Nav>
 <div className="min-h-[calc(100vh-354px)]">
 <Outlet></Outlet>
 </div>
    <Footer></Footer>
    </div>
  );
};

export default Rot;