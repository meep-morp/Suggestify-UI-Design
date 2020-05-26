import React from "react";
import { Link } from "react-router-dom";

const Signup = props => {

    const { onChangeHandler, user, error } = props;

    const onSubmit = event => {
        const newUser = {
            username: user.username,
            password: user.password,
        }

        postNewUser(newUser);
        setUser(initialUser);
    }

    return (
        <form className="form">
            <p className="error">{error.username}</p>
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={onChangeHandler}
                // value={user.username}
            />
            <p className="error">{error.password}</p>
            <input type="password"
                name="password"
                placeholder="Create Password"
                onChange={onChangeHandler}
                // value={user.password}
            />
            <button type="submit" className="button">SIGN UP</button>

            <hr />

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup