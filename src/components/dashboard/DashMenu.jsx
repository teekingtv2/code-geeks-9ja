import Link from 'next/link';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const links = [
  {
    title: 'Home',
    url: '/dashboard',
    img: '/assets/icons/home.svg',
  },
  {
    title: 'Admins',
    url: '/dashboard/admins',
    img: '/assets/icons/profile.png',
  },
  {
    title: 'Applications',
    url: '/dashboard/applicants',
    img: '/assets/icons/profile.png',
  },
  {
    title: 'All Posts',
    url: '/dashboard/posts',
    img: '/assets/icons/posts.png',
  },
  {
    title: 'Student Reviews',
    url: '/dashboard/reviews',
    img: '/assets/icons/reviews.png',
  },
  {
    title: 'Courses',
    url: '/dashboard/courses',
    img: '/assets/icons/reviews.png',
  },
];

const DashMenu = () => {
  return (
    <Col
      md={3}
      className="mb-3 py-3 pl-5 pl-md-5 border border-1 rounded-2 bg-transparent h-100 text-white justfity-content-start"
    >
      {links.map((link, index) => (
        <Link href={link.url} className="w-50 text-white fs-normal fw-bold" key={index}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              gap: '10px',
            }}
            className="my-4 px-2"
          >
            <div
              style={{
                padding: '2px',
                borderRadius: '50%',
                background: '#fff',
                height: '20px',
                width: '20px',
              }}
            >
              <img src={link.img} alt="Code Geeks 9ja" width={20} height={20} />
            </div>
            <div className="ml-5 fw-bold">{link.title}</div>
          </div>
        </Link>
      ))}
    </Col>
  );
};

export default DashMenu;
