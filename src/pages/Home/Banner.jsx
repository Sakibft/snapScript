import img from '../../assets/had.png'
const Banner = () => {
  return (
    <div className="container  mx-auto mt-12">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full  ">
          <img
            src={img}
            className='rounded-xl w-full h-[70%]'
           />
          <div className="absolute   w-full  h-[80%] flex justify-center items-center">
          <h1>hahah</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
