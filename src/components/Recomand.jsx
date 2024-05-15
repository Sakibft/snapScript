import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Recomand = () => {
  const { data, isLoading, refetch, isError, error } = useQuery({
    queryFn: () => getData(),
    queryKey: ["featuredData"],
  });
  console.log(data);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/featured`);
    return data;
  };

  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl">Our Recommendation</h1>
      </div>
     <div className="mx-auto w-[50%]">
     <h1 className="text-sm mb-[-1px]  ">Below are the top three bloggers on our website </h1>
     <p>You can see them if you want !</p>
     <hr className="w-60 border-black mb-4" />
       
     </div>
      {data &&
        data.slice(0, 3).map((item,index) => (
          <div
            key={item._id}
            className=" mx-auto mb-5 flex flex-col items-center justify-center md:flex-row "
          >
            <div className="group relative  sm:w-[350px]">
              <img
                width={350}
                height={350}
                className="h-full w-full scale-105 transform rounded-lg bg-black/70"
                src={item.ownerPhoto}
                alt="card navigate ui"
              />
              <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
                <svg
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="style=linear">
                      <g id="add">
                        <path
                          id="vector"
                          d="M11.998 5.84424L11.998 18.1604"
                          stroke="#9EE6FD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                        <path
                          id="vector_2"
                          d="M18.1561 12.002L5.83998 12.0019"
                          stroke="#9EE6FD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300 group-hover:h-[50px] group-hover:w-[50px]"></span>
              <span className="absolute -bottom-6 left-1/2 z-20 h-0 w-0 -translate-x-1/2 transform rounded-full bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500 hover:duration-300 group-hover:h-[60px] group-hover:w-[60px] "></span>
            </div>
            <div className="min-w-[250px] relative border max-w-[350px] space-y-5 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] dark:bg-[#18181B] md:w-[350px] md:h-96 dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
              <div className="absolute -right-[20px] -top-4 ">
              <div className="left-4 right-4 top-4 flex ">
                <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">Top : {index+1}</button>
            </div>
              </div>
              <div>
                <h2 className="text-center font-sans text-2xl font-medium text-gray-700 dark:text-white/90 lg:text-3xl">
                  {item.owner}
                </h2>
                <p className="font-sans text-gray-500 dark:text-white/70">
                  {item.email}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="space-y-1">
                  <p className="font-sans text-sm text-gray-500 dark:text-white/70">
                    Blog title :
                  </p>
                  <p className="tracking-wider text-gray-700 dark:text-white/80 lg:text-xl">
                    {item.title}
                  </p>
                </div>
              </div>
              <div>
                <Link to={`/details/${item._id}`}>
                  <button className="rounded-full border border-[#0d87f8] px-4 py-2 text-sm text-[#0d87f8] hover:bg-[#0d87f8] hover:text-white  duration-300 dark:hover:bg-transparent dark:hover:text-[#0d87f8] dark:hover:drop-shadow-[0px_0px_2px_#0d87f8]">
                    See There Blogs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Recomand;
