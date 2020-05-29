import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

const MyProfile = props => {
    const [profile, setProfile] = useState();
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
            .get(`api/auth/${id}`)
            .then(res => {
                setProfile(res.data)
            })
    }, [id])

    const updateProfile = e => {
        push('/dashboard/update-profile/:id')
    }

    return (
        <div>
            <h2>Welcome Back, User</h2>
            <button onClick={updateProfile}>Update Profile</button>
        </div>
    )
}

export default MyProfile;