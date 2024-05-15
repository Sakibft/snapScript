import { HiOutlineMail } from "react-icons/hi";
import { LiaPhoneSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiInstagram, SiTelegram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
  return (
    <div>
 
      {/* ------------------------------------------------ */}
      <div className="mt-20 ">
        {/* <hr className="border border-[#8EA7E9]" /> */}
        <footer className="flex flex-col text-black ">
          <div className="flex flex-col items-center justify-around   bg-gray-100  md:flex-row md:gap-0 py-5 ">
            <aside className="flex items-center justify-center gap-3 text-xl mt-3 ">
              <div>
                <h1 className="text-2xl font-semibold">   About Us :
                </h1>
       
                <h1 className="w-60"> Welcome to our blog! We aim to provide engaging content to our readers, fostering a community of learning and discovery.</h1>
              </div>

              <img className="w-40" src='' alt="" />
            </aside>

            <div>
              <h1 className="text-xl font-semibold "> Social media links</h1>
              <div className=" border border-primary w-40"></div>

              <div className="flex  justify-around text-3xl mt-2">
                <FaFacebook className="cursor-pointer" />
                <SiInstagram className="cursor-pointer" />

                <IoLogoYoutube className="cursor-pointer" />
              </div>
              <div className="flex justify-center gap-3 text-3xl mt-3">
                <AiFillTwitterCircle className="text-[33px] text-primary cursor-pointer" />
                <SiTelegram className="text-primary cursor-pointer" />
              </div>
            </div>
            <nav className="text-lg">
              <h1 className="text-[20px] font-semibold">Contact Now ~</h1>
              <div className=" border border-primary w-40"></div>
              <div className="mt-2">
                <h1 className="flex gap-2 ">
                  Number : 01740228022 <LiaPhoneSolid className="mt-1" />{" "}
                </h1>
                <h1 className="flex gap-2">
                  email : ssar96540@gmail.com <HiOutlineMail className="mt-2" />{" "}
                </h1>
                <h1 className="flex gap-2">
                  Office : Dhaka,Narshingdi,Shibpur{" "}
                  <SlLocationPin className="mt-1" />
                </h1>
              </div>
            </nav>
          </div>
          <hr />
          {/* <aside className="bg-pink-400 py-5 text-center text-sm"> */}
          <div className="w-full justify-center items-center bg-gray-100 py-2 ">
            <p className="  text-center bg-pi         rounded-xl    ">
              <div className="text-black text-xl">
                &copy; 2024 Snap ~ Script. All Rights Reserved.
              </div>
            </p>
          </div>
          {/* </aside> */}
        </footer>
      </div>
    </div>
    

  );
};

export default Footer;
