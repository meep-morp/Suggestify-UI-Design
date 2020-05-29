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
        <div className="profile">
            <p className="greet">{greet}, {profile.name}</p>
            <p className="username">{profile.username}</p>
            <button className="button" onClick={updateProfile}>SETTINGS</button>
        </div>
    )
}

export default MyProfile;