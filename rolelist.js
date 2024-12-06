// src/components/RoleList.js

import React, { useState, useEffect } from 'react';
import { getRoles } from '../api/api';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    setRoles(getRoles());
  }, []);

  return (
    <div>
      <h2>Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.role}</td>
              <td>{role.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
