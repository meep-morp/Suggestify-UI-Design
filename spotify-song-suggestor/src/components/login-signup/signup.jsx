import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";

const Signup = props => {
    const { user, setUser, onChangeHandler, error } = props
    const submitHandler = (e) => {
        e.preventDefault();
        const newRegister = {
            username: user.username,
            password: user.password,
        }
        console.log(newRegister)
        //setFormValues(initialFormValues);
        //axios post the newUser to backend 
        axios
            .post(`https://spotsuggest.herokuapp.com/api/auth/register`, newRegister)
            .then(res => {
                console.log(res.config.data);
            })
        window.location = "/";
    }

    return (
        <form className="form">
            <h2>Sign Up</h2>

            <div className="error">{error.last_name}</div>
            <div className="error">{error.first_name}</div>
            <div className="name">
                <input type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={(event) => onChangeHandler(event, user, setUser)}
                />

                <input type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={(event) => onChangeHandler(event, user, setUser)}
                />
            </div>

            <div className="error">{error.username}</div>
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={(event) => onChangeHandler(event, user, setUser)}
            // value={register.username}
            />

            <div className="error">{error.password}</div>
            <input type="password"
                name="password"
                placeholder="Create Password"
                onChange={(event) => onChangeHandler(event, user, setUser)}
            // value={register.password}
            />
            <button type="submit" className="button" onClick={submitHandler}>SIGN UP</button>

            <hr />

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup