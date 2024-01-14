import React from 'react'
import { FaArrowDown, FaPencilAlt, FaSearch, FaUser } from 'react-icons/fa'

function Moreinfo() {
  return (
   <>
    <div className='flex justify-center items-center my-12 text-center' >
      <div>
            <h2 className='text-xl font-bold mb-4'>More information</h2>   
            <h2 className='flex justify-center items-center text-3xl text-pink-500 mb-12'><FaArrowDown/></h2>

            <h1 className='font-bold text-3xl mb-4'>How does <span className='text-blue-500'>CVDesignR</span> work?</h1>
            <p className='text-xl mb-8'>We are simplifying the applicant journey since 2016</p>
            <div className="flex justify-between items-center ">
            <div className="flex flex-col items-center w-64 hover:scale-105 cursor-pointer">
               <FaPencilAlt className='text-blue-500 text-2xl mb-4'/>
               <h4 className='font-bold text-pink-500'>Create my own CV</h4>
               <p className='font-bold'>and download it as a PDF or web version</p>
            </div>
            <div className="flex flex-col items-center w-64 hover:scale-105 cursor-pointer">
               <FaUser className='text-blue-500 text-2xl mb-4'/>
               <h4 className='font-bold text-pink-500'>Get me viewed</h4>
               <p className='font-bold'>by recruiters in 1 click</p>
            </div>
            <div className="flex flex-col items-center  w-64 hover:scale-105 cursor-pointer">
               <FaSearch className='text-blue-500 text-2xl mb-4'/>
               <h4 className='font-bold text-pink-500'>Find jobs</h4>
               <p className='font-bold'>that match your CV, apply and get organized.</p>
            </div>
            </div>
     </div>
    </div>
    <div className='w-full h-10 bg-blue-500'></div>
    </>

  )
}

export default Moreinfo