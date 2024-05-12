import toast from "react-hot-toast";
import fsd from "../../assets/email.svg";

const Newslettter = () => {
  const handleSubscribe = e => {
    e.preventDefault()
      toast.success('Thank yo for subscribing to our newsletter ')
  
  }
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">Newsletter</h1>

      <div
        id="slide1"
        className="carousel-item relative w-full flex justify-center items-center  "
      >
        <img src={fsd} className="rounded-xl w-lg:[30%]" />
        <div className="absolute   lg:w-[30%]  h-full flex   justify-center   right-66 items-center">
          <label className=" input  border-[#F50057]  flex items-center gap-2 mt-72   ">
           <form onSubmit={handleSubscribe}>
           <input type="email" className="grow " placeholder="Enter you email"
            required />
            <input type="submit"  value="Subscribe" className=" border rounded-md p-2 text-[#F50057]    "/>
           </form>
            
          </label>
        </div>
      </div>
    </div>
  );
};

export default Newslettter;
