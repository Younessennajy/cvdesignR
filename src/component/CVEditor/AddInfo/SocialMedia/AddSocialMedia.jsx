import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Resiaux() {
    const centreResiaux = useSelector((state) => state.informations.listinfo[0]?.Resiaux || []);
    return (
    <div>
      <h2 className='mt-3 '>Resiaux sociaux</h2>
      <ul>
        {centreResiaux.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resiaux;
