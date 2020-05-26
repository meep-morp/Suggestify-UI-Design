import React from "react";
import { Link } from "react-router-dom";

const Login = props => {
    return (
        <form className="form">
            <input type="text"
                name="username"
                placeholder="Username"
            />
            <input type="password"
                name="password"
                placeholder="Password"
            />
            <button type="submit" className="button">LOG IN</button>

            <hr/>

            <p className="buttonTitle">Don't have an account?</p>
            <Link to="/signup" className="link">SIGN UP</Link>
        </form>
    )
}

export default Login