import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import toast from "react-hot-toast";
import im from '../../assets/re.svg'
 

const Register = () => {
  const {createUser,updateUserProfile}=UseAuth()
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError]=useState();
  const [success,setSuccess]=useState();
  if (success) {
    toast.success('Register completed !')
 
  }
  if (error) {
    toast.error(error)
    }
    console.log(error);
    console.log(success);


  const handleRegister = (e) => {
    // reset erro
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photo");
    console.log(name,photoURL,email,password);
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have one uppercase letter  ");
      return;
    }
    if (!/[^\w\s]/.test(password)) {
      setError("Must have one special character");
      return;
  }
    if(/^\D*$/.test(password)) {
      setError("Must have one numeric character")
      return;
    }
    console.log(password);
    createUser(email, password,name,photoURL)
      .then((result) => {
        setSuccess(result);
        updateUserProfile(name,photoURL)
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(email);
  };
  return (
    <div>
      <div className="container mx-auto">
      
    
      <div  data-aos="fade-up"  data-aos-duration="1000"  className="flex h-[700px] border-2 hover:border-primary rounded-xl items-center justify-center shadow-xl mb-8 ">
        <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md   ">
          {/* register design side  */}
          <div className="relative hidden h-full items-center justify-center  ] md:flex md:w-[50%] lg:w-[50%]">
 
            <img src={im} alt="" />
            
            
            
          </div>
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
            <h2  data-aos="fade-up"  data-aos-duration="2000"  className="pb-8 text-center text-3xl font-bold text-primary ">
              Register Here
            </h2>
            <form
            onSubmit={handleRegister}
              className="flex  w-full flex-col items-center justify-center gap-4"
            >
              <input
                className="w-[80%] rounded-lg border border-primary px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="w-[80%] rounded-lg border  border-primary px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <div className="w-[80%] rounded-lg border border-primary px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%] flex justify-between">
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
                className="w-[80%] rounded-lg border border-primary px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="text"
                placeholder="PhotoUrl"
                name="photo"
                 
              />
              <p className="text-[14px] text-gray-400">
                Do you have an account ?{" "}
                <Link to="/login" className="text-primary underline">
                  Login
                </Link>
              </p>

              <button className="btn w-[80%] rounded-lg bg-primary px-6 py-2 font-medium text-white text-xl md:w-[60%]">
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