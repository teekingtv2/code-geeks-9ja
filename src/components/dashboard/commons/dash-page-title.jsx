import React from 'react';

const DashPageTitle = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 'bold',
        color: '#e08cf9',
      }}
    >
      <h6 className="pb-4 text-start" style={{ color: '#eee', fontSize: '17px' }}>
        Welcome to the Admin Dashboard
      </h6>
    </div>
  );
};

export default DashPageTitle;
