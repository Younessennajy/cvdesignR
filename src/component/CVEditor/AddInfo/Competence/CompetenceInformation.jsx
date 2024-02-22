// CompetenceInformation.jsx
import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import AddCompetence from './AddCompetence';
import { useDispatch,useSelector } from 'react-redux';
import{addCompetence, updateCompetence,deleteCompetence } from './../../../store/Slice';


function CompetenceInformation({ setHovercomp, hoverComp }) {
  const [addCompetenceVisible, setAddCompetenceVisible] = useState(false);
  const [selectedCompetence, setSelectedCompetence] = useState(null);
  const competences = useSelector((state) => state.informations.competenceData);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dispatch = useDispatch()

  const openAddCompetence = (competence = null) => {
    setSelectedCompetence(competence);
    setAddCompetenceVisible(true);
  };

  const closeAddCompetence = () => {
    setSelectedCompetence(null);
    setAddCompetenceVisible(false);
  };

  const addOrUpdateCompetence = (competenceData, isUpdateMode) => {
    if (isUpdateMode) {
      dispatch(updateCompetence(competenceData));
    } else {
      dispatch(addCompetence(competenceData));
    }
  };
  const handleDeleteCompetence = (competenceId) => {
    dispatch(deleteCompetence(competenceId));
  };

  return (
    <div>
      <div
        className=""
        onMouseOver={() => setHovercomp(true)}
        onMouseOut={() => setHovercomp(false)}
      >
        <div
          className="w-20 bg-black rounded-sm text-white h-5 absolute "
          style={{ display: hoverComp === true ? 'block' : 'none' }}
        >
          <span className='cursor-pointer px-1  flex  justify-between text-sm items-center'>
            <span ><FaTrashAlt /></span>
            <span className='flex justify-center items-center ' onClick={() => openAddCompetence()} >
              <FaPlus />ADD
            </span>
          </span>
        </div>
        <div className=" rounded-s-2xl fixed top-20">
          <AddCompetence
            visible={addCompetenceVisible}
            onClose={closeAddCompetence}
            onAddOrUpdateCompetence={addOrUpdateCompetence}
            selectedCompetence={selectedCompetence}
          />
        </div>

        <div className="text-black py-4">
          <h1 className='text-lg font-bold text-yellow-600'>Compétences</h1>
          <ul className='list-square  border-l-2 border-black px-5  text-sm'>
            {competences.map((competence, index) => (
              <li key={index} onDoubleClick={() => openAddCompetence(competence)}
               className='ml-2 mb-3 flex justify-between'
                onMouseOver={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
               >
                <div>
                  <p className='font-bold'>{competence.title}</p>
                <p className='text-xs'>{competence.description}</p>
                </div>
                <div>
                  {hoveredIndex === index && (
                  <FaTrashAlt
                  className='text-red-500 cursor-pointer ms-auto text-end'
                    onClick={() => handleDeleteCompetence(competence.id)}
                  />
                )}

                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompetenceInformation;
