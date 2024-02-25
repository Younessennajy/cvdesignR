// Section.jsx
import React, { useState } from 'react';
import HeaderCV from './headerCV';
import Aside from './Aside';
import { FaTrash } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import PersonnalInfo from './AddInfo/PersonalInfo/PersonnalInfo';
import DiplomaInformation from './AddInfo/Diploma/Diploma_information';
import CompetenceInformation from './AddInfo/Competence/CompetenceInformation';
import Langues from './AddInfo/Langues';
import CentreInteret from './AddInfo/Interrest/CentreInteret';
import Resiaux from './AddInfo/SocialMedia/AddSocialMedia';
import {deleteProfileImage } from '../store/Slice'
function Section() {

  const [Hiddenimage, sethiddenimage] = useState(true);
  const data = useSelector(d => d.informations.listinfo);
  const [hoverDip, setHoverdep] = useState(false);
  const [hoverComp, setHovercomp] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteProfileImage = () => {
    dispatch(deleteProfileImage());

  };
  return (
    <div>
      <div className="header"><HeaderCV /></div>
        <div className="flex ">
          <Aside />
          <div className="mx-4 my-6 bg-black flex border-4 shadow-lg w-2/4 h-auto  ">
                <div className="w-80 flex flex-col justify-start items-center bg-blue-200 h-full"
                  style={{ resize: 'horizontal', overflow: 'auto' }}>
                      <div className="w-40 flex flex-col items-start ">
                          {/* img start */}
                          <div className="text-center py-6 px-4">
                            <div className="flex flex-col justify-center items-center">
                              <span
                                className='flex justify-start self-center cursor-pointer'
                                  style={{ display: Hiddenimage ? 'none' : 'block' }}>
                                    <FaTrash  onClick={()=>handleDeleteProfileImage() } />
                              </span>
                              {data.map((item,index) => (
                                <div key={index}>
                                  <img
                                    src={item.profileImage}
                                        className='size-32 rounded-full'
                                        onClick={() => sethiddenimage(!Hiddenimage)}
                                />
                                </div>
                                
                              ))}
                          </div>
                      </div>  
                {/* personal info */}
                <div className="leftcv">
                  <PersonnalInfo data={data} />
                  <Langues />
                  <CentreInteret  />
                  <Resiaux/>
                  
                </div>
            </div>
        </div>


{/* page principale of information */}
          <div className="bg-white h-full w-full p-4 flex flex-col ">
                {/* detail information */}
                  <div className="info">
                      {data.map((item, index) => (
                        <div key={index}>
                          <h1 className=''>Ennajy youness</h1>
                            <h3 className='text-lg font-bold text-yellow-600'>{item.position}</h3>
                              <p className='text-xs'>{item.catchphrase}</p>
                        </div>
                      ))}
                  </div>
                {/* diploma et formation */}
                <div className="per">
                  <DiplomaInformation
                    setHoverdep={setHoverdep}
                      hoverDip={hoverDip}
                        />
                </div>
                <div className="per">
                   <CompetenceInformation
                      setHovercomp={setHovercomp} 
                        hoverComp={hoverComp} />
                                  </div>
                
          </div>


          </div>
      </div>
    </div>
  );
}

export default Section;
