import {
  activateApplicant,
  deactivateApplicant,
  deleteApplicant,
  fetchApplicants,
} from '@/backend/api';
import Loader from '@/components/common/Loader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTrash, FaCheck, FaCheckCircle, FaBitbucket } from 'react-icons/fa';
// import { useExcelDownloder } from 'react-xls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplicantCard = () => {
  const { applicants, applicantsLoading, applicantsError, mutateApplicants } = fetchApplicants();
  // const { ExcelDownloder, Type } = useExcelDownloder();
  const successNotification = (message) => toast.success(message);
  const errorNotification = (message) => toast.error(message);
  const router = useRouter();

  const handleDelete = async (id) => {
    const res = await deleteApplicant(id);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        mutateApplicants();
      }, 1300);
    } else {
      errorNotification(res.error);
    }
  };

  const activate = async (id) => {
    const res = await activateApplicant(id);
    console.log(res);
    if (res.status === 201) {
      successNotification(res.data);
      setTimeout(() => {
        mutateApplicants();
      }, 1000);
    } else {
      errorNotification(res.error);
    }
  };

  const deactivate = async (id) => {
    const res = await deactivateApplicant(id);
    console.log(res);
    if (res.status === 201) {
      errorNotification(res.data);
      setTimeout(() => {
        mutateApplicants();
      }, 1000);
    } else {
      errorNotification(res.error);
    }
  };

  const viewApplicant = async (id) => {
    router.push(`/dashboard/applicants/${id}`);
  };

  return (
    <div className="mb-3">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {applicants && (
        <div className="pb-4 pt-2">
          <div
            className="pb-4 pt-2 my-2"
            style={{
              borderBottom: '1px solid #e08cf9',
              borderTop: '1px solid #e08cf9',
              borderRadius: '10px',
            }}
          >
            <table id="tbl_exporttable_to_">
              <thead>
                <tr>
                  <th className="px-3">S/No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Course</th>
                  <th>Status</th>
                  <th style={{ background: '#111' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app) => (
                  <tr className="dataCard" key={app._id}>
                    <td className="px-3">{applicants.indexOf(app) + 1}</td>
                    <td onClick={() => viewApplicant(app._id)} style={{ cursor: 'pointer' }}>
                      {app.name}
                    </td>
                    <td>{app.email}</td>
                    <td>{app.phone}</td>
                    <td>{app.course}</td>
                    <td style={{ fontSize: '13px' }}>
                      {app.status === 'Active' ? (
                        <div style={{ color: 'green' }}>
                          <FaCheckCircle />
                          <span className="ps-1">Active</span>
                        </div>
                      ) : (
                        <div style={{ color: 'red' }}>
                          <FaBitbucket />
                          <span className="ps-1">Inactive</span>
                        </div>
                      )}
                    </td>
                    <td style={{ background: '#111' }}>
                      <div style={{ display: 'flex' }}>
                        {app.status === 'Inactive' ? (
                          <div
                            className="px-2 mr-3 bg-red"
                            onClick={() => activate(app._id)}
                            style={{
                              marginRight: '20px',
                              cursor: 'pointer',
                              color: 'green',
                            }}
                          >
                            <FaCheck />
                          </div>
                        ) : (
                          <div
                            className="px-2 mr-3 bg-red fw-bold"
                            onClick={() => deactivate(app._id)}
                            style={{
                              marginRight: '20px',
                              cursor: 'pointer',
                              color: 'blue',
                              fontSize: '20px',
                            }}
                          >
                            X
                          </div>
                        )}
                        <div
                          onClick={() => handleDelete(app._id)}
                          style={{ color: 'red', cursor: 'pointer' }}
                        >
                          <FaTrash />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            {/* <ExcelDownloder
              data={{ applicants }}
              filename={'code-geeks-9ja-applicants'}
              type={'button'}
              className="my-3 btnn btnn4 p-2"
            >
              Download updated spreadsheet
            </ExcelDownloder> */}
          </div>
        </div>
      )}
      {applicantsLoading && <Loader />}
      {applicantsError && <div>{applicantsError}</div>}
    </div>
  );
};

export default ApplicantCard;
