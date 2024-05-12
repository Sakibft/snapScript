import img from '../../assets/had.png'
const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[700px]">
          <img
            src={img}
            className='rounded-xl w-full'
           />
          <div className="absolute   w-full  h-full flex justify-center items-center">
          <h1>hahah</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
