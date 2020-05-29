import React, { useState, useEffect } from "react";
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
    const date = new Date();
    const time = date.getHours();
    const [greet, setGreet] = useState("");
    const [savedSongs, setSavedSongs] = useState([]);

    useEffect(() => {
        if (time > 12) {
            setGreet("Good Afternoon");
        } else if (time < 12) {
            setGreet("Good Morning");
        }
    }, [])

    const [user, setUser] = useState({});
    return (
        <div className="profile">
            <h2>{greet}, {user.name}</h2>
            <SavedSongs savedSongs={savedSongs} setSavedSongs={setSavedSongs} />
        </div>
    )
}

export default MyProfile;