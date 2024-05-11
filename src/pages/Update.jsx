import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData()
  const {_id,email,category,title,shortDescription,longDescription,image} = data;



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
  
    axios.put(`${import.meta.env.VITE_API_URL}/realUpdate/${_id}`, blogs, {
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
 
    <div>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  defaultValue={email}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                  defaultValue={category}
                />
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
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered w-full"
                  defaultValue={title}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                  defaultValue={shortDescription}
                />
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
                <input
                  type="text"
                  name="longDescription"
                  placeholder="Long Description"
                  className="input input-bordered w-full"
                  defaultValue={longDescription}
                />
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
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  defaultValue={image}
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Add Coffee" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default Update;
