import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../Login/loginSlice';

function Logout(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, []);

  return <Navigate to='/login' />
}

export default Logout

