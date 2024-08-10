import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import Sidebar from '../components/Sidebar';


const Contact = () => {
  return (
    <>
      <div className='flex'>
        <div >
          <Sidebar />
        </div>
        <div>Contact</div>
      </div>
     
    </>
  );
}

export default Contact