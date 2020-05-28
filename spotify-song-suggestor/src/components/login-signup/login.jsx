import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
    username: "",
    password: "",
};

const Login = props => {
    const { user, setUser, onChangeHandler, error } = props
<<<<<<< HEAD

    const [login, setLogin] = useState([]); //This is a different state, Juan set this up to manage the tokens, it is different than the User State

    
=======
    const { push } = useHistory();
    const [login, setLogin] = useState([]);
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
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
        
        axiosWithAuth()
            .post("/api/auth/login", user)
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
<<<<<<< HEAD
               
=======
                push('/dashboard');
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
            })
            .catch((err) => console.log({ err }));
            window.location = '/dashboard'
    };

    return (
        <form className="form">
            <h2>Welcome Back</h2>
            <div className="error">{error.username}</div>
            <input type="text"
                name="username"
                placeholder="Username"
                onChange={(event) => onChangeHandler(event, user, setUser)} />

            <div className="error">{error.password}</div>
            <input type="password"
                name="password"
                placeholder="Password"
                onChange={(event) => onChangeHandler(event, user, setUser)} />

            <button type="submit" className="button" onClick={onSubmit}>LOG IN</button>

            <hr />

            <p className="buttonTitle">Don't have an account?</p>
            <Link to="/signup" className="link">SIGN UP</Link>
        </form>
    )
}

export default Login