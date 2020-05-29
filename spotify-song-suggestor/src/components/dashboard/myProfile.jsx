import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";
import SavedSongs from "./savedSongs";

// axiosWithAuth.get(`https://spotsuggest.herokuapp.com/save/:id`)
//     .then(response => {
//         setUser(response.data)
//     })
//     .catch(error => {
//         console.log(error);
//     })

const id = useParams;

const MyProfile = props => {
    const { setSavedSongs, savedSongs } = props;

    const [user, setUser] = useState({});
    return (
        <div>
            <h2>Welcome Back, {user.name}</h2>
            <SavedSongs savedSongs={savedSongs} setSavedSongs={setSavedSongs} />
        </div>
    )
}

export default MyProfile;