import React from "react";
import { Link } from "react-router-dom";

const Login = props => {
    return (
        <form className="loginForm">
            <input type="text" 
            name="username" 
            placeholder="Username"
            />
            <input type="password" 
            name="password" 
            placeholder="Password"
            />
            <button type="submit" className="button">LOG IN</button>

            <div>
                <Link to="/signup" className="signupLink">Not a Member? Sign Up Now</Link>
            </div>
        </form>
    )
}

export default Login