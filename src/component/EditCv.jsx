import React from 'react'
import img1 from '../asset/img1.svg'
import img2 from '../asset/img2.svg'
import img3 from '../asset/img3.svg'
import { FaDownload } from 'react-icons/fa'
function EditCv() {
  return (
    <>
    <div className='flex flex-col items-center mt-12'>
        <h1 className='font-bold text-3xl mb-2'>The features of the CV editor</h1>
        <h5 className='font-bold text-xl '>to customize my CV without limits</h5>
        <div className="flex flex-col items-center w-3/6 mt-6">

          <div className='flex justify-between items-center mb-4'>
            <div className="mr-12">
              <h1 className='font-bold mb-2'>Fast drafting. Fully customizable appearance.</h1>
              <p>With a simple drag-and-drop interface, you can quickly fill in and format your CV. A multitude of options - colors, sizes, spacing - allow you to personalize it without limit.</p>
              </div>
              <img src={img2} className='size-36' alt="item1" />
          </div>
          <div className='flex justify-center items-center  mb-4'>
          <img src={img1} className='size-36 mr-12' alt="item1" />
            <div>
              <h1 className='font-bold mb-2'>A tailor-made CV for each application</h1>
              <p>Easily adapt and duplicate your CVs, in several languages, for each job you apply for. Adapt your CV by skills, experience, diplomas, design or sobriety.</p>
              </div>
          </div>
          <div className='flex justify-center items-center mb-4'>
            <div className="mr-12">
              <h1 className='font-bold mb-2'>Adding certifications, pictures, company logos...</h1>
              <p>With just a few clicks, it is easy to insert language or skills certifications, or your professional profile picture.</p>
              </div>
              <img src={img3} className='size-36' alt="item1" />
          </div>

        </div>
        <h3 className='font-extrabold text-2xl'>to Finaly</h3>
        <p className='text-xl'>Download you CV in PDF for free or share it with a link</p>
        <h1 className='my-4 text-3xl  rounded-xl text-pink-500'><FaDownload/></h1>
    </div>
        <div className='w-full h-10 bg-blue-500'></div>
    </>
  )
}

export default EditCv