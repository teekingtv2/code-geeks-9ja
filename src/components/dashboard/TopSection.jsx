import React from 'react';
import { BsHouse } from 'react-icons/bs';
import { Navbar } from '../common';

const TopSection = ({ page }) => {
  return (
    <>
      <Navbar />

      <div className="bx-container text-white px-3 px-md-0 mt-5 pt-5 mt-md-0 mb-5">
        <h2 className="fw-bold mt-md-5">Admin Dashboard</h2>
        <div className="">
          <span className="pe-2">
            <BsHouse />
          </span>
          <span className=" fw-bold mb-5 mt-4">Dashboard - {page}</span>
        </div>
      </div>
    </>
  );
};

export default TopSection;
