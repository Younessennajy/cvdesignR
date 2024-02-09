import React from 'react';
import { FaQuestion, FaArrowRight, FaUserAlt, FaPencilAlt, FaDownload } from 'react-icons/fa';
import logo from './../../asset/logo.png';

function HeaderCV() {
  return (
    <div className='flex justify-between items-center px-4 py-2 '>
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className='size-12 mr-2' />
          <h5 className='flex items-center  mr-2'>My Document</h5><FaArrowRight className=' mr-2'/>
          <span className='flex relative'>
            <input type="text" placeholder="Mu resume" className='border-slate-400 px-1 border' />
              <FaPencilAlt className='ml-2 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' />
          </span>
      </div>
      <div className="down">
        <button className='flex items-center text-white bg-blue-500 py-2 px-4 rounded-md'><FaDownload className='mr-2'/> Download</button>
      </div>
      <div className="flex justify-center items-center">
        <span className='flex items-center mr-4'><FaQuestion className='mr-2'/> Help</span>
          <span className='flex items-center'><FaUserAlt className='mr-2' /> Account</span>
      </div>
    </div>
  );
}

export default HeaderCV;
