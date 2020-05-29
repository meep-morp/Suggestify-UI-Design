import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import SavedSongs from "../saved-songs/savedSongs";

const MyProfile = props => {
    const [profile, setProfile] = useState();
    const { id } = useParams();
    const { push } = useHistory();

    const date = new Date();
    const time = date.getHours();
    const [greet, setGreet] = useState("");
    const [savedSongs, setSavedSongs] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get(`api/auth/${id}`)
            .then(res => {
                setProfile(res.data)
            })
    }, [id])

    useEffect(() => {
        if (time > 12) {
            setGreet("Good Afternoon");
        } else if (time < 12) {
            setGreet("Good Morning");
        }
    }, [])

    const updateProfile = e => {
        push('/dashboard/update-profile/:id')
    }

    return (
        <div className="profile">
            <h2>{greet}, User</h2>
            <button className="button" onClick={updateProfile}>SETTINGS</button>
            <SavedSongs />
        </div>
    )
}

export default MyProfile;