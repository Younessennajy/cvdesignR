import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CentreInteret() {
    const centreInteretList = useSelector((state) => state.informations.listinfo[0]?.Centreinteret || []);
    return (
    <div>
      <h2 className='mt-3 '>Centre D'intérêt</h2>
      <ul>
        {centreInteretList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CentreInteret;
