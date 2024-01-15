import React from 'react'
import logocv from './../asset/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer() {
  return (
    <div className='flex bg-black text-sm  text-white -mt-12'>
        <div className='w-1/4 flex p-6 flex-col items-end border-r-2 border-white'>
          <span><img src={logocv} alt="logo" className='size-14 from-transparent'/></span><br />
        <p className='w-3/5 text-justify text-xs'>Our mission is to transform the job application process into an incredible journey. We offer a brand new CV building experience for the job seekers. CVDesignR focuses on profile and skills to match job offers and custom services.</p>
        </div>
        <div className='w-3/5 '>
          <div className='flex p-6 flex-col border-b-2 border-white'>
            <h6 className='font-bold'>Services for candidates</h6>
            <a href="">Online CV editor</a>
            <a href="">Cover Letter builder</a>
            <a href="">Outstanding CV templates</a>
            <a href="">Track your job applications</a>
            <a href="">Job offers</a>
          </div>
            <div className=' p-6'>© 2023 CVDesignR - All rights reserved - 🇺🇸 EN</div>
          </div>
          <div>
            <div className=' p-6 w-full flex flex-col border-b-2  border-l-2 border-white'>
            <a href="" className='font-bold'>About CVDesignR</a>
            <a href="">FAQ</a>
            <a href="">Contact</a>
            <a href="">Legal</a>
            <a href="">Terms and conditions</a>
            <a href="">Privacy policy</a>
            </div>
            <div  className=' p-6 border-l-2 border-white pb-12 flex'>
                <FaFacebook className='text-2xl text-blue-500 cursor-pointer mr-2'/><FaYoutube className='text-2xl text-red-500 cursor-pointer mr-2'/>
                <FaTwitter className='text-2xl text-blue-500 cursor-pointer mr-2'/> <FaInstagram className='text-2xl text-red-900 cursor-pointer mr-2'/><FaLinkedin className='text-2xl text-blue-500 cursor-pointer'/>
            </div>
          </div>
    </div>
  )
}

export default Footer