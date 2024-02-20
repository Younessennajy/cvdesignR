// Diploma_information.jsx
import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import AddDiploma from './AddDiploma';

function DiplomaInformation({ setHoverdep, hoverDip }) {
  const [addDiplomaVisible, setAddDiplomaVisible] = useState(false);
  const [diplomas, setDiplomas] = useState([
    {diploma: 'Technicien spécialisé en developpement digital option Fullstack',
    school: 'Centre de formation et d\'aide à l\'insertion des jeunes',
    place: 'Fes',
    details: 'Au cours de ma première année à l\'ISTA, j\'ai été initié aux fondamentaux du développement digital (html, css, js, Bootstrap, mysql, php), acquérant ainsi une base solide pour ma future carrière dans le développement des site web.'}
  ]);
  const [selectedDiploma, setSelectedDiploma] = useState(null);

  const openAddDiploma = (diploma = null) => {
    setSelectedDiploma(diploma);
    setAddDiplomaVisible(true);
  };

  const closeAddDiploma = () => {
    setSelectedDiploma(null);
    setAddDiplomaVisible(false);
  };

  const addOrUpdateDiploma = (diplomaData, isUpdateMode) => {
    if (isUpdateMode) {
      const updatedDiplomas = diplomas.map((d) => (d === selectedDiploma ? { ...d, ...diplomaData } : d));
      setDiplomas(updatedDiplomas);
    } else {
      setDiplomas([...diplomas, diplomaData]);
    }
  };

  return (
    <div>
      <div
        className=""
        onMouseOver={() => setHoverdep(true)}
        onMouseOut={() => setHoverdep(false)}
      >
        <div
          className="w-20 bg-slate-800 rounded-sm text-white h-5 absolute "
          style={{ display: hoverDip === true ? 'block' : 'none' }}
        >
          <span className='cursor-pointer px-1  flex  justify-between text-sm items-center'>
            <FaTrashAlt />
            <span className='flex justify-center items-center ' onClick={() => openAddDiploma()} >
              <FaPlus />ADD
            </span>
          </span>
        </div>
        <div className=" rounded-s-2xl fixed top-20">
          <AddDiploma
            visible={addDiplomaVisible}
            onClose={closeAddDiploma}
            onAddOrUpdateDiploma={addOrUpdateDiploma}
            selectedDiploma={selectedDiploma}
          />
        </div>

        <div className="text-black py-4">
          <h1 className='text-lg font-bold text-yellow-600'>Diplômes et Formations</h1>
          <ul className='list-square  border-l-2 border-black px-5  text-sm'>
            {diplomas.map((diploma, index) => (
              <li key={index} onDoubleClick={() => openAddDiploma(diploma)} className='ml-2 mb-3'>
                <p className='font-bold'>{diploma.diploma}</p>
                <li className='list-disc text-yellow-600'>{diploma.school} <span className='text-white'>à {diploma.place}</span> </li> 
                <p className='text-xs'>{diploma.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DiplomaInformation;
