import React from 'react'
import { FaEnvelope, FaMobileAlt, FaHome, FaCar, FaCalendarAlt, FaHeart, FaFlag } from 'react-icons/fa';

function PersonnalInfo({data}) {
  return (
    <div>
                   <div className=" text-xs leading-5" >
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
  )
}

export default PersonnalInfo