import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
    username: "",
    password: "",
  };

const Login = () => {

    const [login, setLogin] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);

    const onInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        setFormValues({ ...formValues, [name]: value });
      };

    const onSubmit = (evt) => {
        evt.preventDefault();
    
        const newLogin = {
          username: formValues.username,
          password: formValues.password,
        };
        setLogin([...login, newLogin]);
        setFormValues(initialFormValues);
    
        axiosWithAuth()
          .post("/api/auth/login", formValues)
          .then((res) => {
            // console.log(res.data);
            localStorage.setItem("token", JSON.stringify(res.data.token));
          })
          .catch((err) => console.log({ err }));
      };

    return (
        <form className="form">
            <input type="text"
                name="username"
                placeholder="Username"
                onChange={onInputChange}
            //value={user.username}
            />
            <input type="password"
                name="password"
                placeholder="Password"
                onChange={onInputChange}
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