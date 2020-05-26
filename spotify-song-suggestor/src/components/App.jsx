import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import "./App.css"
import * as yup from "yup";
import axios from "axios";
import formSchema from "./login-signup/formScheme"
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import Nav from "./nav";
import Footer from "./footer";
import PrivateRoute from './utils/privateRoute';

/* **VARIBLES** */

const login = "https://spotsuggest.herokuapp.com/api/auth/login";
const register = "https://spotsuggest.herokuapp.com/api/auth/register";

const App = () => {

    /* **USE STATES** */
    const [error, setError] = useState({});
    const [user, setUser] = useState({})

    /* **FUNCTIONS** */

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        setUser({
            ...user,
            [name]: value,
        })

        yup.reach(formSchema, name)
            .validate(value)
            .then(resolve => {
                setError({
                    ...error,
                    [name]: "",
                })
            })
            .catch(err => {
                setError({
                    ...error,
                    [name]: err.errors[0],
                })
            })
    }

    /* **RETURN STATEMENT AND COMPONENTS** */

    return (
        <div className="App">
            <Nav />
            <Router>
                <Route path="/" exact>
                    <Login
                        onChangeHandler={onChangeHandler}
                        error={error}
                    />
                </Route>
                <Route path="/signup">
                    <Signup
                        onChangeHandler={onChangeHandler}
                        error={error}
                    />
                </Route>
                {/* <PrivateRoute>
                
                </PrivateRoute> */}
            </Router>

            <Footer />
        </div>
    )
}

export default App;