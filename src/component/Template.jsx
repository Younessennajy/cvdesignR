import React, { useState } from 'react';

function Template({ cvtepmlate }) {
  const [select, setselect] = useState('all');

  const filtercv = () => {
    return select === 'all'
      ? cvtepmlate
      : cvtepmlate.filter((item) => item.categorie.toLowerCase() === select.toLowerCase());
  };

  return (
    <>
      <div className='flex justify-center items-start w-2/4 mx-32 mt-12  min-h-72'>
        <h1 className='text-pink-500 font-extrabold text-8xl mb-4'>1</h1>
        <div className='pt-2'>
          <h1 className='text-3xl text-pink-500  font-bold mb-2'>Create my CV</h1>
          <h3 className=' text-xl mb-4 font-extrabold'>
            Thanks to many free or good-looking templates
          </h3>
          <p className=' mb-4'>
            You can choose from many templates, with a professional or designer look. Some templates
            are chargeable, but the majority are free 👌. <br />
            <br /> With one of our templates, you will get a clear, convincing, and original CV and
            increase your chances of getting interviews!
          </p>
          <select
            className='w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:ring focus:border-pink-500  max-sm:hidden'
            name='template'
            onChange={(e) => setselect(e.target.value)}
          >
            <option value='all'>all</option>
            <option value='pro'>Pro</option>
            <option value='design'>Design</option>
            <option value='classic'>Classic</option>
          </select>
        </div>
      </div>
      <div className='m-5 w-full grid grid-cols-4 gap-4  max-md:grid-cols-3 gap-3 max-sm:hidden'>

        {filtercv().map((template, index) => (
          <div key={index} className='w-full'>
            <img
              src={template.img}
              alt={`CV Template ${index + 1}`}
              className='size-64 h-auto'
            />
            <p className='hidden'>{template.categorie}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Template;
