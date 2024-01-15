import React from 'react'
import gain from '../asset/gain.svg'
function Gain() {
  return (
    <>
    <div className='flex justify-center items-center my-14'>
      <div className="w-1/3 "><img src={gain} alt="gain" /></div>
      <div className='flex justify-center items-start w-2/4 min-h-72'>
        <h1 className='text-pink-500 font-extrabold text-8xl mb-4'>2</h1>
        <div className='pt-2'>
            <h1 className='text-3xl text-pink-500  font-bold mb-2'>Gain visibility</h1>
              <h3 className=' text-xl mb-1 font-extrabold'>with recruiters in my sector of activity</h3>
                <p className=' mb-6'>
                  Once the CV is finished, you can also submit it in one click to a search engine for recruiters. Your personal information is hidden and the recruiter uses a secure form to contact you.
                </p>
              <h3 className=' text-xl mb-1 font-extrabold'>Catch the attention</h3>
                <p className=' mb-6'>
                  Recruiters browse our candidate database every day.
                </p>
            <h3 className=' text-xl mb-1 font-extrabold'>Listen for opportunities</h3>
                <p className=' mb-6'>
                  You can be contacted by email at any time. The recruiter uses a secure form and waits for your reactive response to get your details!
                </p>
          <div className="flex flex-col items-center line-clamp-3">
            <button className='font-bold px-4 py-1 max-w-md bg-pink-200 text-pink-500 hover:border-pink-500 border-2' >CREATE MY CV</button>
              <p className='text-center text-sm mt-2'>To get noticed by recruiters</p>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full h-10 bg-blue-500'></div>
    </>
  )
}

export default Gain