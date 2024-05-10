import { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";

 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto flex  h-[700px] items-center justify-center mb-10 mt-4 border-2 hover:border-blue-300 duration-2000   rounded-2xl shadow-xl"
      >
        <div className=" w-full overflow-hidden rounded-xl   flex justify-center items-center   lg:h-[80%] ">
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]"
            >
              Login Now !
            </h2>
            <form
        
              className="flex  w-full flex-col items-center justify-center gap-4"
            >
              <input
                className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="email"
                placeholder="Email"
                name="email"
              />
              <div className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%] flex justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
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

              <p className="text-[14px] text-gray-400">
                Do not have an account ?
                <Link
                  to="/register"
                  className="text-[#8EA7E9] underline ml-1  "
                >
                  Register
                </Link>
              </p>

              <button className="btn w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%] text-xl">
                Login
              </button>
            </form>
            {/* <div className="flex items-center pt-4 space-x-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <p className="text-sm text-[#8EA7E9]">
                Login with social accounts
              </p>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div> */}
             {/* divider  */}
          <div className="my-8 flex items-center px-8">
              <hr className="flex-1" />
              <div className="mx-4 text-gray-400">OR</div>
              <hr className="flex-1" />
            </div>

             {/* sign with google */}
             <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
              <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">
                Sign With
              </div>
              <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
              <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;