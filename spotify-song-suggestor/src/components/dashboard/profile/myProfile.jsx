import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import SavedSongs from "../saved-songs/savedSongs";

import UpdateForm from './updateProfile';

const MyProfile = props => {
    const [profile, setProfile] = useState({name: '', username: '', password: ''});
    const { id } = useParams();
    const { push } = useHistory();

    const date = new Date();
    const time = date.getHours();
    const [greet, setGreet] = useState("");

    useEffect(() => {
        axiosWithAuth()
            .get(`api/auth/${localStorage.getItem('User Id')}`)
            .then(res => {
                console.log(res.data)
                setProfile(res.data)
            })
    }, [id])

    useEffect(() => {
        if (time >= 12) {
            setGreet("Good Afternoon");
        } else if (time < 12) {
            setGreet("Good Morning");
        }
    }, [])

    const updateProfile = e => {
        push(`/dashboard/update-profile/${localStorage.getItem('User Id')}`)
    }

    return (
        <div>
            <h2>{greet}, {profile.name}</h2>
            <p>{profile.username}</p>
            <button onClick={updateProfile}>Update Profile</button>
        </div>
    )
}

export default MyProfile;