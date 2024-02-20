// AddDiploma.jsx
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function AddDiploma({ visible, onClose, onAddOrUpdateDiploma, selectedDiploma }) {
  const [diplomaData, setDiplomaData] = useState(selectedDiploma || {
    diploma: '',
    school: '',
    place: '',
    details: '',
  });

  const isUpdateMode = !!selectedDiploma;

  const handleCancel = () => {
    onClose();
  };

  const handleUpdate = () => {
    onAddOrUpdateDiploma(diplomaData, isUpdateMode);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiplomaData({
      ...diplomaData,
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
            <label htmlFor=''>Diploma</label>
            <br />
            <input
              type='text'
              className='w-full p-1'
              placeholder='Diploma'
              name='diploma'
              value={diplomaData.diploma}
              onChange={handleChange}
            />
          </div>

          <div className='flex justify-between my-3'>
            <div className='mr-2'>
              <label htmlFor=''>School</label>
              <br />
              <input
                type='text'
                className='p-1'
                placeholder='School'
                name='school'
                value={diplomaData.school}
                onChange={handleChange}
              />
            </div>
            <div className=''>
              <label htmlFor=''>Place</label>
              <br />
              <input
                type='text'
                className='p-1'
                placeholder='Place'
                name='place'
                value={diplomaData.place}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='my-4'>
            <label htmlFor=''>Details</label>
            <p>Lorem, ipsum dolor sit amet consectetur</p>
            <textarea
              name='details'
              id=''
              cols='48'
              rows='4'
              value={diplomaData.details}
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

export default AddDiploma;
