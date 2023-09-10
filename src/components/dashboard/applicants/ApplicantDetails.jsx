import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ApplicantDetails = ({ applicant }) => {
  const created = applicant.createdAt;
  const date = created.split('T')[0];

  return (
    <Col md={6} className="mx-auto mb-3 text-whiteb p-0">
      <div className="dashApplicantCard">
        <div className="text-center">
          <img
            src={`/assets/icons/user.png`}
            width={50}
            height={50}
            alt="Code Geeks 9ja"
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div className="fw-bold pt-2 pb-0 m-0" style={{ color: '#bbb' }}>
          {applicant.name}
        </div>
        <div
          className="pb-0 pt-0 m-0"
          style={applicant.status === 'Active' ? { color: '#0f9236' } : { color: '#a81010' }}
        >
          {applicant.status}
        </div>
        <Row>
          <Col md={5} className="my-2 c-row mx-auto">
            <div className="key">{date}</div>
            <div className="value">Registered On</div>
          </Col>
          <Col md={5} className="my-2 c-row">
            <div className="key">{applicant.email}</div>
            <div className="value">Email</div>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="my-2 c-row mx-auto">
            <div className="key">{applicant.phone}</div>
            <div className="value">Phone</div>
          </Col>
          <Col md={5} className="my-2 c-row">
            <div className="key">{applicant.course}</div>
            <div className="value">Course</div>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="my-2 c-row mx-auto">
            <div className="key">{applicant.class}</div>
            <div className="value">Class</div>
          </Col>
          <Col md={5} className="my-2 c-row">
            <div className="key">{applicant.trainingMedium}</div>
            <div className="value">Training medium</div>
          </Col>
        </Row>
        <Row>
          <Col md={5} className="my-2 c-row mx-auto">
            <div className="key">{applicant.connection}</div>
            <div className="value">Connection</div>
          </Col>
          <Col md={5} className="my-2 c-row">
            <div className="key">{applicant.comment}</div>
            <div className="value">comment</div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ApplicantDetails;
