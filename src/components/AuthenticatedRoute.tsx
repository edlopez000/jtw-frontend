import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../utils/useAuth';

export const AuthenticatedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = useAuth();
  let location = useLocation();

  return (
    <div>
      {user ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};
