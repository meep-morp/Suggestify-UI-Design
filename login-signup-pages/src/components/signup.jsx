import React from "react";
import { Link } from "react-router-dom";

const Signup = props => {
    return (
        <form className="signupForm">
            <input type="text"
                name="username"
                placeholder="Create Username"
            />
            <input type="password"
                name="password"
                placeholder="Create Password"
            />
            <button type="submit">Sign-Up</button>

            <div className="loginLink">
                <Link to="/">Already a Member? Login Now</Link>
            </div>
        </form>
    )
}

export default Signup