import axios from "axios";
import UseAuth from "../hooks/UseAuth";

 

const AddBlog = () => {
    const {user}=UseAuth()
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
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form supplier row */}
                
                    <div className="form-control w-[40%] mx-auto">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-[50%] mx-auto">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
         
                {/* form category and details row */}
                <div className="md:flex mb-4">
                    <div className="form-control w-[60%] mx-auto">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group">
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
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="w-[80%] mx-auto">


                <input type="submit" value="Add Blog" className="btn w-full  hover:bg-white hover:text-primary hover:border-primary border-r border-l border-primary bg-white" />
                </div>

            </form>
    </div>
   </div>
  );
};

export default AddBlog;