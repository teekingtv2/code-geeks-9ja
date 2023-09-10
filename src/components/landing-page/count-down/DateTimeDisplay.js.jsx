import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{value.toString()}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
