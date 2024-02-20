// AddCompetence.jsx
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function AddCompetence({ visible, onClose, onAddOrUpdateCompetence, selectedCompetence }) {
  const [competenceData, setCompetenceData] = useState(selectedCompetence || {
    title: '',
    description: '',
  });

  const isUpdateMode = !!selectedCompetence;

  const handleCancel = () => {
    onClose();
  };

  const handleUpdate = () => {
    onAddOrUpdateCompetence(competenceData, isUpdateMode);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompetenceData({
      ...competenceData,
      [name]: value,
    });
  };

  return (
    <div style={{ display: visible ? 'block' : 'none', backgroundColor: visible ? '#acbbca' : '' }} className='rounded-xl'>
      <div className='w-28 h-auto p-6  text-sm'>
        <div className='flex justify-between items-center'>
          <h1 className='flex items-center'>
            <FaArrowRight /> {isUpdateMode ? 'Modifier' : 'Ajouter'}
          </h1>
          <div className='flex items-center'>
            <button className='font-bold bg-none text-sm p-3' onClick={handleCancel}>
              Cancel
            </button>
            <button className='bg-pink-200 text-pink-500 p-1 rounded-sm font-bold text-sm' onClick={handleUpdate}>
              {isUpdateMode ? 'Update' : 'Ajouter'}
            </button>
          </div>
        </div>
        <form action='' className='flex flex-col'>
          <div className='my-3'>
            <label htmlFor=''>Title</label>
            <br />
            <input
              type='text'
              className='w-full p-1'
              placeholder='Title'
              name='title'
              value={competenceData.title}
              onChange={handleChange}
            />
          </div>

          <div className='my-4'>
            <label htmlFor=''>Description</label>
            <textarea
              name='description'
              cols='48'
              rows='4'
              value={competenceData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
        <div className='flex justify-center items-center'>
          <button className='font-bold bg-none text-sm p-3' onClick={handleCancel}>
            Cancel
          </button>
          <button className='bg-pink-200 text-pink-500 p-1 rounded-sm font-bold text-sm' onClick={handleUpdate}>
            {isUpdateMode ? 'Update' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCompetence;
