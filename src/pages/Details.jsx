import { useLoaderData } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Details = () => {
  const data = useLoaderData();
  const { user } = UseAuth();
  console.log(data?.email,"data base email");
  console.log(user?.email,"login user");

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={data?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.category}</h2>
          <p>{data.title}</p>
          <p>{data.shortDescription}</p>
          <p>{data.longDescription}</p>
          <div className="card-actions justify-end">
            <p className="font-semibold text-red-500">
              conditional update btn{" "}
            </p>
            {user?.email === data?.email && ( // Check if the logged-in user's email matches the email in the data
              <button className="btn btn-primary">Update</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
