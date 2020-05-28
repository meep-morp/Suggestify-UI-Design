import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { checkPropTypes } from "prop-types";

const Signup = props => {
<<<<<<< HEAD
    const { user, setUser, onChangeHandler, error } = props
=======
const {user, setUser, onChangeHandler, error} = props

    // const [register, setRegister] = useState(initialFormValues);
    // const changeHandler = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setRegister({...register, [name]: value, })
        
    //   };
    const push = useHistory();
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
    const submitHandler = (e) => {
        e.preventDefault();
        const newRegister = {
            username: user.username,
            password: user.password,
            name: `${user.first_name} ${user.last_name}`,
        }
        console.log(newRegister)
        //axios post the newUser to backend 
        axios
            .post(`https://spotsuggest.herokuapp.com/api/auth/register`, newRegister)
            .then(res => {
                console.log(res.config.data);
<<<<<<< HEAD
                window.location = "/";
            })
        
=======
                push('/');
            })
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
    }

    return (
        <form className="form">
            <h2>Become A Member</h2>

            <div className="error">{error.last_name}</div>
            <div className="error">{error.first_name}</div>
            <div className="name">
                <input type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={(event) => onChangeHandler(event, user, setUser)} />

                <input type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={(event) => onChangeHandler(event, user, setUser)} />
            </div>

            <div className="error">{error.username}</div>
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={(event) => onChangeHandler(event, user, setUser)} />

            <div className="error">{error.password}</div>
            <input type="password"
                name="password"
                placeholder="Create Password"
                onChange={(event) => onChangeHandler(event, user, setUser)} />

            {/* <div className="error">{error.confirmPassword}</div>
            <input type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={(event) => onChangeHandler(event, user, setUser)} /> */}

            <button type="submit" className="button" onClick={submitHandler}>SIGN UP</button>

            <hr />

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup