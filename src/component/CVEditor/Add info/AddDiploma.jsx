import React from 'react'
import { FaArrowRight, FaHandPointer, FaPlus } from 'react-icons/fa'

function AddDiploma() {
  return (
    <div className=''>
        <div className=' w-28 h-auto p-6  rounded-s-2xl text-sm'>
            <div className="flex justify-between items-center">
                <h1 className='flex items-center'><FaArrowRight/>Ajouter  </h1>
                <div className="flex items-center">
                    <button className='font-bold bg-none text-sm p-3'>cancel</button>
                    <button className='bg-pink-200 text-pink-500 p-1 rounded-sm font-bold text-sm'>Update</button>
                </div>
            </div>
            <form action="" className='flex flex-col'>
                <div className="my-3">
                    <label htmlFor="">Diploma</label><br/>
                    <input type='text' className='w-full p-1' placeholder='Diploma'/>
                </div>

                <div className="flex justify-between my-3">
                    <div className="mr-2">
                        <label htmlFor="">School</label><br/>
                        <input type='text' className='p-1' placeholder='School' />
                    </div>
                    <div className="">
                        <label htmlFor="">Place</label><br/>
                        <input type='text' className='p-1' placeholder='Place'/>
                    </div>
                </div>

                <div className="my-4">
                    <label htmlFor="">details</label>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur 
                    </p>
                    <textarea name="" id="" cols="48" rows="4">

                    </textarea>
                </div>
            </form>
            <div className="flex justify-center items-center" >
                <button className='font-bold bg-none text-sm p-3'>cancel</button>
                <button className='bg-pink-200 text-pink-500 p-1 rounded-sm font-bold text-sm'>Update</button>
            </div>
        </div>
    </div>
  )
}

export default AddDiploma