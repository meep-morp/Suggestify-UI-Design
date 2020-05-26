import React from "react";
import { Link } from "react-router-dom";

const Signup = props => {

    const { onChangeHandler, user } = props;

    return (
        <form className="form">
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={onChangeHandler}
                value={user.username}
            />
            <input type="password"
                name="password"
                placeholder="Create Password"
                onChange={onChangeHandler}
                value={user.password}
            />
            <button type="submit" className="button">SIGN UP</button>

            <hr />

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup