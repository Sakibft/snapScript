import axios from "axios";
import UseAuth from "../hooks/UseAuth";
import { useState } from "react";

 

const AddBlog = () => {
    const {user}=UseAuth();
    // const [category,setCategory]=useState();
    // console.log(category);
    console.log(user);
    const email = user?.email
     const ownerPhoto = user?.photoURL
    const owner = user?.displayName
    console.log(ownerPhoto,owner, 'jajahha');

      const handleSubmit = e => {
        e.preventDefault();
 
        const category = e.target.category.value;
        const title = e.target.title.value;
        const shortDescription = e.target.shortDescription.value;
        const longDescription = e.target.longDescription.value;
        const image = e.target.photo.value;
      
        const blogs = {
          email: email,
          category: category,
          title: title,
          shortDescription: shortDescription,
          longDescription: longDescription,
          image:image,
          owner:owner,
          ownerPhoto:ownerPhoto
        };
      
        console.log(blogs);
      
        axios.post(`${import.meta.env.VITE_API_URL}/blogs`, blogs, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            console.log('Data successfully posted:', response.data);
          })
          .catch(error => {
            console.error('Error posting data:', error);
          });
      };
      

 
  return (
   <div className="border-t border-b border-primary container p-4 mx-auto rounded-2xl mt-5">
     <div className="w-[60%] mx-auto  p-5 rounded-2xl border-primary border-l border-r ">
    <form onSubmit={handleSubmit} >
                {/* form name and quantity row */}
                
                <div className="md:flex ">
                    <div className="form-control w-[30%] mx-auto">
                    <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
            //   onChange={(e) => setCategory(e.target.value)}
            //   value={category}
              name="category"
            //   id="category"
              className="p-4 rounded-lg border-l border-r border-primary shadow-blue-200 shadow-lg 
              focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300"
            >
              <option value=""></option>
              <option value="Technology">Technology</option>
              <option value="Sports">Sports</option>
              <option value="Game">Game</option>
              <option value="Travel">Travel</option>
              <option value="Politics">Politics</option>
              <option value="Health">Health</option>
            </select>
                        {/* <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label> */}
                    </div>
                    
                </div>
                {/* form supplier row */}
                
                    <div className="form-control w-[40%] mx-auto">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group shadow-blue-200 shadow-lg rounded-xl ">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-[50%] mx-auto">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group  shadow-blue-200 shadow-lg rounded-xl">
                            <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
         
                {/* form category and details row */}
                <div className="md:flex mb-4">
                    <div className="form-control w-[60%] mx-auto">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group  shadow-blue-200 shadow-lg rounded-xl">
                            <input type="text" name="longDescription" placeholder="Long Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-[70%] mx-auto">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group  shadow-blue-200 shadow-lg rounded-xl">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="w-[80%] mx-auto  shadow-blue-200 shadow-lg rounded-xl">


                <input type="submit" value="Add Blog" className="btn w-full  hover:bg-white hover:text-primary hover:border-primary border-r border-l border-primary bg-white" />
                </div>

            </form>
    </div>
   </div>
  );
};

export default AddBlog;