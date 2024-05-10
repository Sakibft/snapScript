import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="container mx-auto">
      
    
      <div  data-aos="fade-up"  data-aos-duration="1000"  className="flex h-[700px] border-2 hover:border-blue-300 rounded-xl items-center justify-center shadow-xl mb-8 ">
        <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md   ">
          {/* register design side  */}
          <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] md:flex md:w-[60%] lg:w-[40%]">
            <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
            <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
            <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
            <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-medium text-white/80">
                Welcome to you Sale ~ Home
              </h2>
              <p className="animate-pulse  text-white">
                Please fill up this form  
              </p>
            </div>
          </div>
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
            <h2  data-aos="fade-up"  data-aos-duration="2000"  className="pb-8 text-center text-3xl font-bold text-[#8EA7E9] ">
              Register Here
            </h2>
            <form
            
              className="flex  w-full flex-col items-center justify-center gap-4"
            >
              <input
                className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <div className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%] flex justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                />
                <div>
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="z-10   "
                  >
                    {showPassword ? (
                      <IoMdEye
                        className="
                text-gray-500 text-lg mt-1"
                      />
                    ) : (
                      <IoMdEyeOff
                        className="
                text-gray-500 text-lg mt-1"
                      />
                    )}
                  </span>
                </div>
              </div>
              <input
                className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="text"
                placeholder="PhotoUrl"
                name="photo"
                 
              />
              <p className="text-[14px] text-gray-400">
                Do you have an account ?{" "}
                <Link to="/login" className="text-[#8EA7E9] underline">
                  Login
                </Link>
              </p>

              <button className="btn w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white text-xl md:w-[60%]">
                Register
              </button>
            </form>
        
            {/* divider 
          <div className="my-8 flex items-center px-8">
              <hr className="flex-1" />
              <div className="mx-4 text-gray-400">OR</div>
              <hr className="flex-1" />
            </div> */}
           
          </div>
        </div>
      </div>
    </div>
    </div>
    // hellow world
  );
};

export default Register;