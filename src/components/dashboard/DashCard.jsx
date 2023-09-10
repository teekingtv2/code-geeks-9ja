import Link from 'next/link';
import React from 'react';
import { Col } from 'react-bootstrap';

const DashCard = ({ data, title, icon, link }) => {
  return (
    <Col md={4} className="mb-3 text-white">
      <Link href={link}>
        <div className="dashCard">
          <div
            className=""
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
            }}
          >
            <div className="text-dark fw-bold py-2">{title}</div>
            <div className="text-white fs-xlarge fw-bold ">{data}</div>
          </div>
          <img src={`/assets/icons/${icon}.png`} width={50} height={50} alt="Code Geeks 9ja" />
        </div>
      </Link>
    </Col>
  );
};

export default DashCard;
