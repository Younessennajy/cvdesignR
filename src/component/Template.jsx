import React from 'react';

function Template() {
  return (
    <div className='flex justify-center items-start w-2/4 mx-32 mt-12  min-h-72'>
        <h1 className='text-pink-500 font-extrabold	 text-8xl mb-4'>1</h1>
        <div className='pt-2'>
          <h1 className='text-3xl text-pink-500  font-bold mb-2'>Create my CV</h1>
          <h3 className=' text-xl mb-4 font-extrabold'>Thanks to many free or good-looking templates</h3>
          <p className=' mb-4'>
            You can choose from many templates, with a professional or designer look. Some templates are chargeable, but the majority are free 👌. <br/><br/> With one of our templates, you will get a clear, convincing, and original CV and increase your chances of getting interviews!
          </p>
          <select className='w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-500' name='template'>
            <option value='pro'>Pro</option>
            <option value='design'>Design</option>
            <option value='classic'>Classic</option>
          </select>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* Add your template cards here */}
            {/* Example card:
            <div className='bg-white p-4 rounded-md shadow-md'>
              <h4 className='text-lg font-bold mb-2'>Template Name</h4>
              <p className=''>Description of the template.</p>
            </div>
            */}
          </div>
      </div>
    </div>
  );
}

export default Template;
