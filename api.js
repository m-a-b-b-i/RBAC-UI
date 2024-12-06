// src/api/api.js

export const getUsers = () => {
    return [
      { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Bob', role: 'User', status: 'Inactive' },
    ];
  };
  
  export const getRoles = () => {
    return [
      { id: 1, role: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
      { id: 2, role: 'User', permissions: ['Read'] },
    ];
  };
  
  export const createUser = (user) => {
    return { id: Date.now(), ...user }; // Simulate a created user
  };
  
  export const updateUser = (user) => {
    return user; // Return updated user object
  };
  
  export const deleteUser = (id) => {
    return id; // Simulate user deletion
  };
  
  export const assignRoleToUser = (userId, role) => {
    return { userId, role }; // Simulate role assignment
  };
  