import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

axiosWithAuth.get(`https://spotsuggest.herokuapp.com/save/:id`)
    .then(response => {
        setUser(response.data)
    })
    .catch(error => {
        console.log(error);
    })

const MyProfile = props => {
    const [user, setUser] = useState({});
    return (
        <div>
            <h2>Welcome Back, {user.name}</h2>
        </div>
    )
}

export default MyProfile;