import React from 'react'
import apply from '../asset/apply.png'
import {   FaMapMarkedAlt,  FaShoppingBag, FaStopwatch } from 'react-icons/fa'

function Apply() {
  return (
    <>
    <div className='flex justify-evenly items-center my-14'>
      <div className='flex justify-center items-start w-2/5 min-h-72'>
        <h1 className='text-pink-500 font-extrabold text-8xl mb-4'>3</h1>
        <div className='pt-2'>
            <h1 className='text-3xl text-pink-500  font-bold mb-2'>Apply and organise my search</h1>
              <h3 className=' text-xl mb-1 font-extrabold'>with tailor-made offers</h3>
                <p className=' mb-6'>
                Discover millions of jobs to be filled throughout your country. Apply by accessing the advertisers' websites or directly in 1 click with a simplified submission of your CV.
                </p>
                <h3 className=' text-xl mb-1 font-extrabold'>More than 2 million job offers from all sectors automatically posted according to your CV 🎯</h3>
        </div>
      </div>
      <div className="w-1/3 bg-ray-100 mx-2">
        <div className="flex justify-between items-center mb-3"><h1 className='font-bold text-xl'>Product owner </h1>
            <span className='flex items-center'><FaStopwatch className='mr-6'/>Yesterday</span>
        </div>
        <span><FaMapMarkedAlt className='inline-block mr-4 text-xl'/>london</span><br />
        <span><FaShoppingBag className='inline-block mr-4 text-xl'/>long term</span>
        <p className='mt-3'>SuperCompany mit Sitz in Paris und Madrid ist ein Unternehmen, das sich auf gezielte und optimierte digitale Werbung und Datenmanagement in den Bereichen Musik, Sport und Unterhaltung spezialisiert hat. Dank an (...)</p>
      </div>
  </div>
  <div>
          <h2 className='text-center text-3xl font-bold '>Mit dem Maestro Organizer</h2>
          <h3 className='text-center text-xl font-bold my-3'>I can organize my job search</h3>
          <div className="flex justify-around  items-center my-12"> 
              <div className="w-1/3 ">
                <p className=' text-justify'>Maestro is an easy-to-use application tracking kanban. Each card corresponds to an application to which you have replied. The columns correspond to the different possible statuses for an application: Simple wish, "applied", "waiting for a reply".</p>
                <button className='font-bold px-4 mx-auto my-12 py-1 max-w-md bg-blue-200 text-blue-500 hover:border-blue-500 border-2' >LEARN MORE ABOUT MAESTRO</button>

              </div>  
              <div className='w-1/3'><img src={apply} alt="appy"/></div>
          </div>

      </div>


    
        
        

       
       
    </>
  )
}

export default Apply