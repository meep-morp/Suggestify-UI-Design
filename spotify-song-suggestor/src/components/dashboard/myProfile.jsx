import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from "react-router-dom";

// axiosWithAuth.get(`https://spotsuggest.herokuapp.com/save/:id`)
//     .then(response => {
//         setUser(response.data)
//     })
//     .catch(error => {
//         console.log(error);
//     })

const id = useParams;

const MyProfile = props => {
    const [user, setUser] = useState({});
    return (
        <div>
            <h2>Welcome Back, {user.name}</h2>
        </div>
    )
}

export default MyProfile;