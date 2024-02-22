import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteLangue} from './../../store/Slice';
import { FaTrash } from 'react-icons/fa';


function Langues() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.informations.listinfo[0]);
  const handleDeleteLanguage = (index) => {
    dispatch(deleteLangue({ id: index }));
  };
  return (
    <div>
      <h2>Langues</h2>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.languages.map((lang, index) => (
            <tr key={index}>
              <td>{Object.keys(lang)[0]}</td>
              <td>{Object.values(lang)[0]}</td>
              <td>
                <button onClick={() => handleDeleteLanguage(index)}  className='cursor-pointer'>
                  <FaTrash  />
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Langues;
