import React from 'react';
import { FaThLarge,FaList, FaPalette, FaUpload, FaCamera, FaQrcode, FaPlus, FaEdit, FaArrowRight, FaTimes } from 'react-icons/fa';
import selectNationnality from './../../asset/Naionnality'
import {useState} from 'react'
import { motion } from 'framer-motion';
function Aside() {
  const navb = [
    {name:"Template",icon:<FaThLarge/>},
    {name:"Information",icon:<FaList/>},
    {name:"Design Option",icon:<FaPalette/>},
    {name:"Profile Picture",icon:<FaCamera/>},
    {name:"Insert Logo",icon:<FaUpload/>},
    {name:"QRCode",icon:<FaQrcode/>},
    {name:"Add Block",icon:<FaPlus/>},
    {name:"Show the Editor",icon:<FaEdit/>},
  ]
   const [hidenitem , sethidden]=useState(true)
   
  return (
    <>
    <div className="flex">
    <div className='w-20 px-2 text-center h-screen  block bg-white '>
      {
        navb.map((item,index)=>(
          <ul className='py-2' key={index}>
            <li className='flex flex-col justify-center items-center  hover:cursor-pointer'>
              <span className='text-lg'>{item.icon}</span><span className='text-xs'>{item.name}</span>
            </li>
          </ul>
        ))
      }
    </div>
    <div className='w-92 bg-slate-400' style={{display :hidenitem ? 'none' : "block"}}>
        <motion.div
          className={`w-92 bg-slate-400 ${hidenitem ? 'hidden' : 'block'}`}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: hidenitem ? '-100%' : '0%', opacity: hidenitem ? 0 : 1 }}
          transition={{ ease: 'easeInOut', duration: 0.3 }}
        >
        <form className="flex flex-col items-left p-3 leading-8">
          <div className="flex justify-between items-center">
            <FaTimes className="text-xl cursor-pointer" onClick={() => sethidden(true)} />
            <p className='border-b-2 p-1 text-center  flex-1 font-bold'>EDIT BASIC INFORMATION</p>
          </div>
          <label className="mt-2">Targeted position</label>
          <input type="text" name="" id="" className='mb-2'/>

          <label htmlFor="">Your catchphrase, to draw the recruiter's attention</label>
          <textarea name="" id="" cols="1" rows="2" className='mb-2 mt-1 p-2 w-full border rounded-md resize-none'>
            Something catchy about you! A short description of your career, your personality your ambitions
          </textarea>

          <label htmlFor="">Email</label>
          <input type="email" name="" id=""  className='mb-2'/>

          <label htmlFor="a">Mobile number</label>
          <input type="text" className='mb-2' />

          <label label htmlFor="a">Home address</label>
          <input type="text" name="" placeholder="Your home address"  className='mb-2'/>

          <label htmlFor="a">Mobility</label>
          <input type="text" name="" placeholder="Mobility"  className='mb-2'/>

          <label htmlFor="a">Data of birth</label>
          <input type="date" name="" placeholder="Mobility"  className='mb-2'/>

          <label htmlFor="a">Situation</label>
          <select name="" id="" className='mb-2'>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
            <option value="Married">Married</option>
            <option value="other">other</option>
          </select>

          <label htmlFor="a">Nationality</label>
          
          <select className='mb-2'>
          {
            selectNationnality.map((item)=>(
              <option value={item.value} >{item.label}</option>
              ))
            }
            </select>
            
        </form>
        </motion.div>
    </div>
    {hidenitem == true ?(
  <div className='flex justify-start items-start cursor-pointer'>
    <FaArrowRight onClick={() => sethidden(false)} />
  </div>
):null}

    </div>
    </>
  );
}

export default Aside;