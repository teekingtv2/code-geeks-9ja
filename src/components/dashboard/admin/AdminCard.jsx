import { deleteAdmin, fetchAdmins } from '@/backend/api';
import Loader from '@/components/common/Loader';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

const AdminCard = () => {
  const { admins, adminsLoading, adminsError, mutateAdmins } = fetchAdmins();

  const handleDelete = async (id) => {
    const res = await deleteAdmin(id);
    console.log(res);
    if (res.status === 201) {
      alert('Admin successfully deleted');
      mutateAdmins();
    } else {
      console.log(res.error);
    }
  };

  return (
    <div className="mb-3">
      {admins && (
        <div
          className="pb-4 pt-2"
          style={{
            borderBottom: '1px solid #e08cf9',
            borderTop: '1px solid #e08cf9',
            borderRadius: '10px',
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Skill</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr className="dataCard" key={admin._id}>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.role}</td>
                  <td>{admin.skill}</td>
                  <td>
                    <div style={{ display: 'flex' }}>
                      <div className="px-3" onClick={handleDelete}>
                        <FaPen />
                      </div>
                      <div onClick={() => handleDelete(admin._id)}>
                        <FaTrash />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {adminsLoading && <Loader />}
      {adminsError && <div>{adminsError}</div>}
    </div>
  );
};

export default AdminCard;
