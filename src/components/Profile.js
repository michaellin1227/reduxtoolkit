import React from 'react'
import Login from './Login'
import NotLogin from './NotLogin'

// useSelector : 取得redux中定義的state
import { useSelector } from 'react-redux';

const Profile = () => {

    const state = useSelector(state => state.user);
    // console.log(state)

    return (
        <div style={{ marginTop: "50px" }}>
            {state.profile.login ? <Login /> : <NotLogin />}
        </div>
    )
}

export default Profile