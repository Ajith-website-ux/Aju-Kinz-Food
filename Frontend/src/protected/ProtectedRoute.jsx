import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../contexts/FirebaseAuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(FirebaseAuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;