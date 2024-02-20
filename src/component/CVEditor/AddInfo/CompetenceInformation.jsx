// CompetenceInformation.jsx
import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import AddCompetence from './AddCompetence';

function CompetenceInformation({ setHovercomp, hoverComp }) {
  const [addCompetenceVisible, setAddCompetenceVisible] = useState(false);
  const [competences, setCompetences] = useState([
    {title: 'React.js',
    description: 'Proficient in building user interfaces using React.js and related technologies.'}
  ]);
  const [selectedCompetence, setSelectedCompetence] = useState(null);

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
      const updatedCompetences = competences.map((c) => (c === selectedCompetence ? { ...c, ...competenceData } : c));
      setCompetences(updatedCompetences);
    } else {
      setCompetences([...competences, competenceData]);
    }
  };

  return (
    <div>
      {/* Similar hover and display logic as in DiplomaInformation */}
      <div
        className=""
        onMouseOver={() => setHovercomp(true)}
        onMouseOut={() => setHovercomp(false)}
      >
        <div
          className="w-20 bg-slate-800 rounded-sm text-white h-5 absolute "
          style={{ display: hoverComp === true ? 'block' : 'none' }}
        >
          <span className='cursor-pointer px-1  flex  justify-between text-sm items-center'>
            <FaTrashAlt />
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
          {/* Similar list rendering as in DiplomaInformation */}
          <ul className='list-square  border-l-2 border-black px-5  text-sm'>
            {competences.map((competence, index) => (
              <li key={index} onDoubleClick={() => openAddCompetence(competence)} className='ml-2 mb-3'>
                <p className='font-bold'>{competence.title}</p>
                <p className='text-xs'>{competence.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompetenceInformation;
