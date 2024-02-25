import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLangue } from './../../store/Slice';
import { FaTrashAlt } from 'react-icons/fa';

function Langues() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.informations.listinfo[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDeleteLanguage = (index) => {
    dispatch(deleteLangue({ index }));
  };
  

  return (
    <div className='mt-3'>
      <h2 className='text-bold text-lg'>Langues</h2>
      <table>
        <tbody className='text-sm'>
          {userInfo.languages.map((lang, index) => (
            <tr key={index} 
              onMouseOver={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <td>{lang.language} : {lang.level}</td>
              <td>
                {hoveredIndex === index && (
                  <FaTrashAlt
                    className='text-red-500 cursor-pointer ms-auto text-end'
                    onClick={() => handleDeleteLanguage(index)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Langues;
