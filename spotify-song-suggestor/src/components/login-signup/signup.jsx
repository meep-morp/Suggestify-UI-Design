import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = props => {
    const { user, setUser, onChangeHandler, error } = props;

    const postNewUser = newUser => {
        axios.post(`https://spotsuggest.herokuapp.com/api/auth/register`)
            .then(resolve => {
                console.log(resolve);
                console.log(resolve.data);
            })
            .catch(error => {
                console.log("Post Error\n" + error);
            })
    }

    const onSubmit = event => {
        const newUser = {
            username: user.username,
            password: user.password,
        }

        postNewUser(newUser);
        setUser({});
    }

    return (
        <form className="form">
            <h2>Sign Up</h2>
            <p className="error">{error.username}</p>
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={onChangeHandler}
            // value={user.username}
            />
            <p className="error">{error.password}</p>
            <input type="password"
                name="password"
                placeholder="Create Password"
                onChange={onChangeHandler}
            // value={user.password}
            />
            <button type="submit" className="button">SIGN UP</button>

            <hr />

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup