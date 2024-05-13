import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const FeaturedBlogs = () => {
  const [fetured,setFeatured]=useState();
  console.log(fetured);
  useEffect(()=>{
    axios( `${
      import.meta.env.VITE_API_URL
    }/featured`)
    .then(res => {
      // console.log(res.data);
      setFeatured(res.data)
    })
    .then(error => {
      console.log(error);
    })
  },[])
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Blog Owner</th>
              <th>Blog title</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              fetured && fetured.map((item,index) => (
                <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={item.ownerPhoto} />
                    </div>
                  </div>
                </td>
                <td>{item.owner}</td>
                <td>{item.title}</td>
              </tr>
              ))
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
