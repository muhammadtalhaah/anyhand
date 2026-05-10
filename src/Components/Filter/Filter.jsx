import React, { useState } from 'react';

const Filter = ({ name, backgroundColor, textColor }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="filter-container">
      <div
        className='p-4 rounded-full transition-all duration-300 cursor-pointer border'
        style={{
          background: isHovered ? '#00CF91' : backgroundColor,
        }}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <p
          id='filter-text'
          className='font-semibold'
          style={{ color: isHovered ? 'white' : textColor }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export default Filter;
