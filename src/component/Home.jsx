import React from 'react';
import cv1 from './../asset/cv1.png';
import cv2 from './../asset/cv2.png';
import { FaBookOpen, FaPencilAlt, FaStar } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center py-16 bg-gradient-to-r from-fuchsia-100 via-blue-500 to-purple-500 ">
        <div className="w-full xl:w-full  md:w-2/5 m h-auto md:h-50 p-8 font-sans text-center md:text-center">
          <h2 className="text-2xl font-bold mb-5 w-full md:w-4/5">
            Create my own CV design in PDF for free with CVDesignR
          </h2>
          <p className="font-serif text-l mb-8 w-full md:w-5/6">
            In just a few minutes, create your<strong> free CV</strong>, customize its design,
            then <strong>download it as a PDF</strong>. Then browse targeted job offers and
            organize yourself with our application tool.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start mx-4 ">
            <div className="flex-row mx-1">
              <span className='text-2xl text-pink-500'><FaPencilAlt /></span>
              <div className="">
                <h3 className='font-extrabold'>3,500,000</h3>
                <p>CVs created since 2016</p>
              </div>
            </div>
            <div className="flex-row mx-1">
              <span className='text-2xl text-pink-500'><FaBookOpen /></span>
              <div className="">
                <h3 className='font-extrabold'>120,000</h3>
                <p>new CVs every month</p>
              </div>
            </div>
            <div className="flex-row mx-1">
              <span className='text-2xl text-pink-500'><FaStar /></span>
              <div className="">
                <h3 className='font-extrabold'>99%</h3>
                <p>user satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-lg:w-60 max-md:hidden align-middle">
          <img src={cv1} alt="cv" className='w-60 max-lg:w-60 rounded-lg rotate-90 md:rotate-0 absolute ml-14 ' style={{ transform: 'rotate(-90deg)' }} />
          <img src={cv2} alt="cv" className='w-60 max-lg:w-60 rounded-lg relative' />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className='bg-pink-500 -mt-5 text-xl font-extrabold text-white py-4 px-8 rounded'>
          Create My CV
        </button>
        
      </div><h5 className='text-center text-sm'>Free sign up</h5>
    </>
  );
}

export default Home;
