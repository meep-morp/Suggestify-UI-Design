import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

import UpdateForm from './updateProfile';

const MyProfile = props => {
    const [profile, setProfile] = useState({name: '', username: '', password: ''});
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .get(`api/auth/${localStorage.getItem('User Id')}`)
            .then(res => {
                console.log(res.data)
                setProfile(res.data)
            })
    }, [id])

    const updateProfile = e => {
        push(`/dashboard/update-profile/${localStorage.getItem('User Id')}`)
    }

    return (
        <div>
            <h2>Welcome Back, {profile.name}</h2>
            <p>{profile.username}</p>
            <button onClick={updateProfile}>Update Profile</button>
        </div>
    )
}

export default MyProfile;