import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const data = useLoaderData();
console.log(data);
  const { user } = UseAuth();
  const [comment, setComment] = useState();
  console.log(comment);
  const _id = data?._id;
  const photo = user?.photoURL;
  const name = user?.displayName;
  console.log(_id);
  // console.log(email,name);
  // console.log(data?.email, "data base email");
  // console.log(user?.email, "login user");

  // post comment
  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const newComment = { blogid: _id, name, photo, comment };
    axios
      .post(`${import.meta.env.VITE_API_URL}/comment`, newComment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // setComment(response.data)
        console.log("Data successfully posted:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
    console.log(newComment);
  };
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/comment/${_id}`)
      .then((res) => {
        setComment(res.data);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="card md:w-1/2  bg-base-100 shadow-xl">
        <figure>
          <img src={data?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.category}</h2>
          <p>{data.title}</p>
          <p>{data.shortDescription}</p>
          <p>{data.longDescription}</p>
          <div className="card-actions justify-end">
            {user?.email === data?.email && ( // Check if the logged-in user's email matches the email in the data
              <Link to={`/update/${data._id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
            )}
          </div>
          <hr />
          <h1>Comment section </h1>
          <hr className="w-32 mb-5" />
          {comment &&
            comment.map((cmnt) => (
              <div key={cmnt._id} className="w-60">
                <div className="rounded-lg bg-white font-sans shadow-lg">
                  <div className="px-2 py-2">
                    <div className="flex items-center gap-3 ">
                      <img
                        className="rounded-full w-8"
                        src={cmnt.photo}
                        alt="naiga"
                      />
                      <div className="flex flex-col">
                        <h2 className="font-semibold">{cmnt.name}</h2>
                        <p className=" text-blue-300">{cmnt.comment}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {user?.email === data?.email ? (
            <h1 className="text-red-500">Can not comment on own blog</h1>
          ) : (
            <form onSubmit={handleComment} className="w-96">
              <label className="input  input-bordered flex items-center gap-2 ">
                <input
                  type="text"
                  name="comment"
                  className="grow  "
                  placeholder="comment"
                />

                <button className="border  rounded-md btn    text-primary border-primary   bg-white  font-semibold">
                  Comment
                </button>
              </label>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
