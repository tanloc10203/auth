import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAuth } from '../../HOC';
import { getProtectedRamdom } from './profileSlice';

function Profile(props) {
  const profile = useAuth("profile");
  const dispatch = useDispatch();
  const auth = useAuth("login");

  useEffect(() => {
    dispatch(getProtectedRamdom(auth?.access_token && auth?.access_token));
  }, []);

  return (
    <div>
      {profile && profile.dataProtected}
    </div>
  )
}

Profile.propTypes = {

}

export default Profile

