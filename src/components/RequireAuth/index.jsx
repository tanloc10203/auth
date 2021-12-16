import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  let auth = useSelector(state => state.login);

  if (!auth.isLogin) {
    return <Navigate to="/login"/>;
  }

  return children;
}

export default RequireAuth;

