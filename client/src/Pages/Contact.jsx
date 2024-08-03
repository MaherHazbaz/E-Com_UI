import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';


const Contact = () => {
  return (
    <>
      <div className="px-6 py-6 font-bold">
        <Link to={"/"}>
          <CustomButton button={"Home"} onclick={onclick} />
        </Link>
      </div >
      <div className='px-[25%]'>Contact</div>
    </>
  );
}

export default Contact