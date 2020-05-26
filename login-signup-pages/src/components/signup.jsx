import React from "react";
import { Link } from "react-router-dom";

const Signup = props => {
    return (
        <form className="form">
            <input type="text"
                name="username"
                placeholder="Create Username"
            />
            <input type="password"
                name="password"
                placeholder="Create Password"
            />
            <button type="submit" className="button">SIGN UP</button>

            <hr/>

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup