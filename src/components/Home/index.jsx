import React from 'react'
import { useDispatch } from 'react-redux';
import { useAuth } from '../../HOC';
import { getRamdomQuote } from '../../feature/Profile/profileSlice';

function Home(props) {
    const profile = useAuth("profile");
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getRamdomQuote());
    }, []);

    return (
        <div>
            {profile && profile.dataGet}
        </div>
    )
}

export default Home

