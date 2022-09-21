import React from 'react';
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../utils/useAuth';

export const AuthenticatedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuth();
  const isAuthed = user ? true : false;
  let location = useLocation();

  return (
    <div>
      {isAuthed ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};
