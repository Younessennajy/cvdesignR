import React from 'react';

function Langues({ data }) {
  return (
    <div>
      <h2>Langues</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.language}:</strong> {item.level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Langues;
