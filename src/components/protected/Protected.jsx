import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = ({ children }) => {
  const isAuthenticated = localStorage.getItem('keralaoffertoken');
  

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // For route nesting
  return children || <Outlet />;
};

export default Protected;
