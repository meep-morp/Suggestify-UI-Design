import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
    username: "",
    password: "",
};

const Login = props => {
    const { user, setUser, onChangeHandler, error } = props

    const [login, setLogin] = useState([]);
    // const [formValues, setFormValues] = useState(initialFormValues);

    // const onInputChange = (evt) => {
    //     const name = evt.target.name;
    //     const value = evt.target.value;
    //     setFormValues({ ...formValues, [name]: value });
    //   };

    const onSubmit = (evt) => {
        evt.preventDefault();

        const newLogin = {
            username: user.username,
            password: user.password,
        };
        setLogin([...login, newLogin]);
        // setFormValues(initialFormValues);

        axiosWithAuth()
            .post("/api/auth/login", user)
            .then((res) => {
                // console.log(res.data);
                localStorage.setItem("token", JSON.stringify(res.data.token));
            })
            .catch((err) => console.log({ err }));
    };

    return (
        <form className="form">
            <p className="error">{error.username}</p>
            <input type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => onChangeHandler(event, user, setUser)}
            //value={user.username}
            />
            <p className="error">{error.password}</p>
            <input type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => onChangeHandler(event, user, setUser)}
            //value={user.password}
            />
            <button type="submit" className="button" onClick={onSubmit}>LOG IN</button>

            <hr />

            <p className="buttonTitle">Don't have an account?</p>
            <Link to="/signup" className="link">SIGN UP</Link>
        </form>
    )
}

export default Login