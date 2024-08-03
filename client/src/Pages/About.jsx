import React from 'react'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
import Index from './Index';
import Sidebar from '../components/Sidebar';

const About = () => {
  return (
    <div className='flex'>
      
      <div>
        <Sidebar />
      </div>
      <div> About</div>
    </div>
  );
}

export default About