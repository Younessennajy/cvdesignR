import React, { useState } from 'react';
import { FaThLarge, FaList, FaPalette, FaUpload, FaCamera, FaQrcode, FaPlus, FaEdit, FaArrowRight, FaTimes } from 'react-icons/fa';
import selectNationnality from './../../asset/Naionnality';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { modifierInfo } from '../store/Slice';

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

  const [position, setPosition] = useState('Technicien spécialisé en developpement digital option fullstack');
  const [catchphrase, setCatchphrase] = useState(`
    Intéressé par un stage, toutes opportunités de travail, collaborations, nouveaux projets et freelance.
    J'ai un caractère d'engagement total avec un bon relationnel, une grande capacité d'écoute, et une grande implication avec des idées de carrière ambitieuses.
    Je suis particulièrement intéressé par le développement des applications web en utilisant (React JS, Laravel, Tailwind CSS).
  `);
  const [email, setEmail] = useState('younessennajy30@gmail.com');
  const [mobileNumber, setMobileNumber] = useState('0649-962806');
  const [homeAddress, setHomeAddress] = useState('Fés');
  const [mobility, setMobility] = useState('Nationnel');
  const [dateOfBirth, setDateOfBirth] = useState('10-02-2000');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [nationality, setNationality] = useState('moroccan');
  const [profileImage, setProfileImage] = useState('');
  
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
  
    if (selectedImage) {
      const imagePath = URL.createObjectURL(selectedImage);
      dispatch(modifierInfo({ profileImage: imagePath }));
    }
  };
  

  const handleSaveInfo = () => {
    const updatedInfo = {
      position,
      catchphrase,
      email,
      mobileNumber,
      homeAddress,
      mobility,
      dateOfBirth,
      maritalStatus,
      nationality,
      profileImage,
    };
    dispatch(modifierInfo(updatedInfo));
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
            <form className="flex flex-col items-left p-3 leading-8">
              <div className="flex justify-between items-center">
                <FaTimes className="text-xl cursor-pointer" onClick={() => sethidden(true)} />
                <p className='border-b-2 p-1 text-center  flex-1 font-bold'>EDIT BASIC INFORMATION</p>
              </div>
              <label className="mt-2">Targeted position</label>
              <input type="text" name="" id="" className='mb-2' value={position} onChange={(e) => setPosition(e.target.value)} />

              <label htmlFor="">Your catchphrase, to draw the recruiter's attention</label>
              <textarea  cols="1" rows="2" className='mb-2 mt-1 p-2 leading-5 w-full border rounded-md resize-none'
                value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)}>
                Something catchy about you! A short description of your career, your personality your ambitions
              </textarea>

              <label htmlFor="">Email</label>
              <input type="email" name="" id="" className='mb-2' value={email} onChange={(e) => setEmail(e.target.value)} />

              <label label htmlFor="a">Mobile number</label>
              <input type="text" className='mb-2' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />

              <label label htmlFor="a">Home address</label>
              <input type="text" name="" placeholder="Your home address" className='mb-2' value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} />

              <label htmlFor="a">Mobility</label>
              <input type="text" name="" placeholder="Mobility" className='mb-2' value={mobility} onChange={(e) => setMobility(e.target.value)} />

              <label htmlFor="a">Data of birth</label>
              <input type="date" name="" placeholder="Mobility" className='mb-2' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />

              <label htmlFor="a">Situation</label>
              <select name="" id="" className='mb-2' value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                <option value="Single">Single</option>
                <option value="Divorced">Divorced</option>
                <option value="Married">Married</option>
                <option value="other">other</option>
              </select>

              <label htmlFor="a">Nationality</label>

              <select className='mb-2' value={nationality} onChange={(e) => setNationality(e.target.value)}>
                {
                  selectNationnality.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                  ))
                }
              </select>

              {profileImage && (
                <img src={profileImage} alt="Profile" className="mt-2 mb-4 rounded-full" style={{ width: '100px', height: '100px' }} />
              )}

              <button type="button" onClick={handleSaveInfo} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                Save Information
              </button>
            </form>
          </motion.div>
        </div>
        {hidenitem == true ? (
          <div className='flex justify-start items-start cursor-pointer'>
            <FaArrowRight onClick={() => sethidden(false)} />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Aside;
