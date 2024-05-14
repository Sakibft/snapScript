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
          <h1 className='text-center md:text-4xl text-lg font-bold text-white'>Embark on a journey of discovery.  Explore our blog for thought-provoking <br /> content that ignites imagination and fosters personal development .<br />Start exploring now !</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
