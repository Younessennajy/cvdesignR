import React, { useState } from 'react';
import { FaThLarge, FaList, FaPalette, FaUpload, FaCamera, FaQrcode, FaPlus, FaEdit, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { modifierInfo } from '../store/Slice';
import Formaside from './AddInfo/PersonalInfo/Formaside';

function Aside() {
  const navb = [
    { name: "Template", icon: <FaThLarge /> },
    { name: "Information", icon: <FaList /> },
    { name: "Design Option", icon: <FaPalette /> },
    { name: "Profile Picture", icon: <FaCamera /> },
    { name: "Insert Logo", icon: <FaUpload /> },
    { name: "QRCode", icon: <FaQrcode /> },
    { name: "Add Block", icon: <FaPlus /> },
    { name: "Show the Editor", icon: <FaEdit /> },
  ];
  const [hidenitem, sethidden] = useState(true);
  const dispatch = useDispatch()

  

  
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
  
    if (selectedImage) {
      const imagePath = URL.createObjectURL(selectedImage);
      dispatch(modifierInfo({ profileImage: imagePath }));
    }
  };
  

 
  const handleSelectProfileImage = () => {
    document.getElementById('profileImageInput').click();
  };

  return (
    <>
      <div className="flex">
        <div className='w-20 px-2 text-center h-screen  block bg-white '>
          {navb.map((item, index) => (
            <ul className='py-2' key={index}>
              {item.name === "Profile Picture" && (
                <li className='flex flex-col justify-center items-center  hover:cursor-pointer'>
                  <span className='text-lg' onClick={handleSelectProfileImage}>{item.icon}</span>
                  <input
                    type="file"
                    id="profileImageInput"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <span className='text-xs'>{item.name}</span>
                </li>
              )}
              {item.name !== "Profile Picture" && (
                <li className='flex flex-col justify-center items-center  hover:cursor-pointer'>
                  <span className='text-lg'>{item.icon}</span>
                  <span className='text-xs'>{item.name}</span>
                </li>
              )}
            </ul>
          ))}
        </div>
        <div className='w-92 bg-slate-400' style={{ display: hidenitem ? 'none' : "block" }}>
          <motion.div
            className={`w-92 bg-slate-400 ${hidenitem ? 'hidden' : 'block'}`}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: hidenitem ? '-100%' : '0%', opacity: hidenitem ? 0 : 1 }}
            transition={{ ease: 'easeInOut', duration: 0.3 }}
          >
            <Formaside sethidden={sethidden}/>
          </motion.div>
        </div>
        {hidenitem === true ? (
          <div className='flex justify-start items-start cursor-pointer'>
            <FaArrowRight onClick={() => sethidden(false)} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Aside;
