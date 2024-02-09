import React, { useState } from 'react';
import HeaderCV from './headerCV';
import Aside from './Aside';
import portefile from './../../asset/CV_2024-01-20_Ennajy_Youness_page-0001.png';
import { FaTrash, FaVoicemail } from 'react-icons/fa';

function Section() {
  const [Hiddenimage, sethiddenimage] = useState(true);
  const infopersonnel = [
    { icon: <FaVoicemail/>, label: "younbessennajy@gmail.com " },
    { icon: <FaVoicemail/>, label: "younbessennajy@gmail.com " },
    { icon: <FaVoicemail/>, label: "younbessennajy@gmail.com " },
    { icon: <FaVoicemail/>, label: "younbessennajy@gmail.com " },
  ];

  return (
    <div>
      <HeaderCV />
      <div className="flex">
        <Aside />
        <div className="mx-4 my-6 bg-black flex border-4 border-black w-3/4 h-150">
          <div className=" w-64 flex flex-col justify-start items-center bg-red-200 h-full" 
              style={{ resize: 'horizontal', overflow: 'auto' }}>
            <div className="w-40 flex flex-col items-start ">
                {/* img start */}
                <div className="text-center py-6">
                  <div className="flex flex-col justify-center items-center">
                    <span className='flex justify-start self-center cursor-pointer'
                      style={{ display: Hiddenimage ? 'none' : 'block' }}><FaTrash/></span>
                    <img src={portefile} alt="" className='size-32 rounded-full'
                      onClick={() => sethiddenimage(!Hiddenimage)}/>
                  </div>
                </div>
                {/* peronnal info */}
                  <div className=" text-xs leading-5">
                    {infopersonnel.map((item, index) => (
                    <ul key={index}>
                      <li className='flex justify-center items-center'>
                        <span className='mr-3'>{item.icon}</span>
                        {item.label}
                      </li>
                    </ul>
                  ))}
                </div>
                {/* langue */}
                <div className="leading-5 w-full">
                  <h1 className='text-xl font-bold'>Langues</h1>
                      <p>Arabe</p>
                      <p>moyenne</p>
                  
                </div>
                {/* centre d'inetert */}
                <div className="leading-5 w-full">
                  <h1 className='text-xl font-bold'>centre d'intérèt</h1>
                      <p>tvail et voyanve </p>
                      <p>podcatst msuice</p>
                </div>
                {/* Réseau sociaux */}
                <div className="leading-5 w-full">
                  <h1 className='text-xl font-bold'>Réseau sociaux</h1>
                      <p>tvail et voyanve </p>
                      <p>podcatst msuice</p>
                </div>
            </div>
                    
          </div>
          <div className="bg-blue-500 h-full w-full p-4 flex flex-col ">
            <div className="info">
              <h1>Ennajy youness</h1>
              <h3 className='text-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, neque consequatur quo qui cupiditate quidem. Explicabo quas officiis vitae rem earum sint expedita magnam dolore ratione, ab amet aliquam sed repudiandae numquam culpa illum nobis veniam corporis nam reiciendis quasi nulla quia totam! Quas accusamus quaerat error repudiandae? Veritatis, numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
