// AddSocialMedia.jsx
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function AddSocialMedia({ visible, onClose, onAddOrUpdateSocialMedia, selectedSocialMedia }) {
  const [socialMediaData, setSocialMediaData] = useState(selectedSocialMedia || {
    platform: '',
    username: '',
  });

  const isUpdateMode = !!selectedSocialMedia;

  const handleCancel = () => {
    onClose();
  };

  const handleUpdate = () => {
    onAddOrUpdateSocialMedia(socialMediaData, isUpdateMode);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaData({
      ...socialMediaData,
      [name]: value,
    });
  };

  return (
    <div style={{ display: visible ? 'block' : 'none', backgroundColor: visible ? '#acbbca' : '' }} className='rounded-xl'>
      <div className='w-28 h-auto p-6  text-sm'>
        <div className='flex justify-between items-center'>
          <h1 className='flex items-center'>
            <FaArrowRight /> {isUpdateMode ? 'Modifier' : 'Ajouter'} Réseau Social
          </h1>
          <div className='flex items-center'>
            <button className='font-bold bg-none text-sm p-3' onClick={handleCancel}>
              Annuler
            </button>
            <button className='bg-pink-200 text-pink-500 p-1 rounded-sm font-bold text-sm' onClick={handleUpdate}>
              {isUpdateMode ? 'Mettre à jour' : 'Ajouter'}
            </button>
          </div>
        </div>
        <form action='' className='flex flex-col'>
          <div className='my-3'>
            <label htmlFor=''>Plateforme</label>
            <br />
            <input
              type='text'
              className='w-full p-1'
              placeholder='Plateforme'
              name='platform'
              value={socialMediaData.platform}
              onChange={handleChange}
            />
          </div>

          <div className='my-3'>
            <label htmlFor=''>Nom d'utilisateur</label>
            <br />
            <input
              type='text'
              className='w-full p-1'
              placeholder='Nom dutilisateur'
              name='username'
              value={socialMediaData.username}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className='flex justify-center items-center'>
          <button className='font-bold bg-none text-sm p-3' onClick={handleCancel}>
            Annuler
          </button>
          <button className='bg-pink-200 text-pink-500 p-1 rounded-sm font-bold text-sm' onClick={handleUpdate}>
            {isUpdateMode ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSocialMedia;
