import axios from "axios";
import UseAuth from "../hooks/UseAuth";

 

const AddBlog = () => {
    const {user}=UseAuth()
    console.log(user);

      const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
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
          image:image
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
      

// const handleSubmit = e => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const category = e.target.category.value;
//     const title = e.target.title.value;
//     const shortDescription = e.target.shortDescription.value;
//     const longDescription = e.target.longDescription.value;
//     const photo = e.target.photo.value; // Get the file object
    
//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('category', category);
//     formData.append('title', title);
//     formData.append('shortDescription', shortDescription);
//     formData.append('longDescription', longDescription);
//     formData.append('photo', photo);
//   console.log(formData);
//     axios.post(`${import.meta.env.VITE_API_URL}/blogs`, formData)
//       .then(response => {
//         console.log('Data successfully posted:', response.data);
//       })
//       .catch(error => {
//         console.error('Error posting data:', error);
//       });
//   };
  return (
    <div className="container mx-auto">
    <form onSubmit={handleSubmit} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="email" className="input input-bordered w-full" value={user?.email}/>
                        
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="longDescription" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />

            </form>
    </div>
  );
};

export default AddBlog;