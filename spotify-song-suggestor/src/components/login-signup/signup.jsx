import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";

const Signup = props => {
const {user, setUser, onChangeHandler, error} = props

    // const [register, setRegister] = useState(initialFormValues);
    // const changeHandler = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setRegister({...register, [name]: value, })
        
    //   };

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
            <p className="error">{error.username}</p>
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={(event) => onChangeHandler(event, user, setUser)}
                // value={register.username}
            />
           
           <p className="error">{error.password}</p>
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