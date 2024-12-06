// src/components/UserList.js

import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, assignRoleToUser } from '../api/api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
    deleteUser(id); // Simulate API call
  };

  const handleRoleChange = (userId, role) => {
    assignRoleToUser(userId, role);
    setUsers(users.map(user => user.id === userId ? { ...user, role } : user));
  };

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <select 
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
