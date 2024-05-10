 import { Link } from 'react-router-dom';
import img from '../assets/giphy.gif'

const Error = () => {
  return (
    <div className='w-full min-h-screen justify-center items-center flex flex-col gap-2'>
      <img className='w-[50%] rounded-xl' src={img} alt="" />
<Link to='/'>
<button className='btn bg-sky-300 text-white'>Back to home</button>

</Link>
    </div>
  );
};

export default Error;