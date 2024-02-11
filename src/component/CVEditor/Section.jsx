// Section.jsx
import React, { useState } from 'react';
import HeaderCV from './headerCV';
import Aside from './Aside';
import { FaEnvelope,FaPlus,FaTrash, FaMobileAlt, FaHome, FaCar, FaCalendarAlt, FaHeart, FaFlag, FaTrashAlt } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import AddDiploma from './Add info/AddDiploma';


function Section() {
  const [Hiddenimage, sethiddenimage] = useState(true);

  const data = useSelector(d => d.informations.listinfo);
  const [hoverDip , setHoverdep]=useState(false)
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
                                <span
                                  className='flex justify-start self-center cursor-pointer'
                                    style={{ display: Hiddenimage ? 'none' : 'block' }}>
                                      <FaTrash />
                                </span>
                                {
                                  data.map((item)=>(
                                    <img
                                      src={item.profileImage}
                                        alt="pro"
                                          className='size-32 rounded-full'
                                            onClick={() => sethiddenimage(!Hiddenimage)}
                                    />
                                  ))
                                }
                            </div>
                      </div>
                      {/* peronnal info */}
                      <div className=" text-xs leading-5" onDoubleClick={() => sethiddenimage(true)}>
                          {data.map((item, index) => (
                              <ul key={index}>
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaEnvelope /></span>{item.email}
                                    </li> 
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaMobileAlt /></span>{item.mobileNumber}
                                    </li> 
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaHome /></span>{item.homeAddress}
                                    </li> 
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaCar /></span>{item.mobility}
                                    </li> 
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaCalendarAlt /></span>{item.dateOfBirth}
                                    </li> 
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaHeart /></span>{item.maritalStatus}
                                    </li> 
                                <li className='flex justify-start items-center'>
                                  <span className='mr-3'><FaFlag /></span>{item.nationality}
                                    </li> 
                              </ul>
                            ))
                          }
                      </div>
                </div>
          </div>
  {/* page principale of information */}
            <div className="bg-blue-500 h-full w-full p-4 flex flex-col ">
              {/* detail information */}
              <div className="info">
                    {
                      data.map((item,index)=>(
                        <div key={index}>
                          <h1>Ennajy youness</h1>
                            <h3 className='text-bold'>{item.position}</h3>
                              <p className='text-sm'>{item.catchphrase}</p>
                        </div>
                      ))
                    }
              </div>
              {/* deplome et formation */}
              <div className="my-6 bg-slate-800"  onMouseOver={()=>setHoverdep(true)} onMouseOut={() => setHoverdep(false)}>
                      <div className="w-20 bg-red-500 h-5 absolute " style={{display : hoverDip==true ?"block":"none"}}>
                        <span className='cursor-pointer px-1  flex  justify-between text-sm items-center'><FaTrashAlt /><span className='flex justify-center items-center '><FaPlus />ADD</span></span>
                      </div>
                      <div className="bg-green-500  rounded-s-2xl fixed top-20">
                        <AddDiploma />
                      </div>
                      
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis provident deleniti nesciunt pariatur labore repellendus obcaecati ut tenetur fugit eligendi recusandae autem eveniet culpa, quisquam dolor temporibus perspiciatis aliquid magnam porro voluptate. Architecto, excepturi deserunt quaerat vero maxime nihil quam repellat minus harum laboriosam eius aliquid, dolorem minima saepe similique?
              </div>








            </div>
              
            
            
          </div>
      </div>
    </div>
  );
}

export default Section;
