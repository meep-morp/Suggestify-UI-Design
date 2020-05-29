import React, { useState } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import "./App.css"
import * as yup from "yup";
import formSchema from "./login-signup/formScheme";
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import Nav from "./nav";
import Footer from "./footer";
import PrivateRoute from './utils/privateRoute';
import Dashboard from "./dashboard/dashboard";


/* **VARIBLES** */
const initialFormValues = {
    username: '',
    password: ''
}

const App = () => {
    /* **USE STATES** */
    const [register, setRegister] = useState(initialFormValues);
    const [login, setLogin] = useState(initialFormValues);
    const [error, setError] = useState({});

    /* **FUNCTIONS** */

    const onChangeHandler = (event, user, setUser) => {
        const name = event.target.name;
        const value = event.target.value;
        const target = event.target;

        setUser({
            ...user,
            [name]: value,
        })

        yup.reach(formSchema, name)
            .validate(value)
            .then(resolve => {
                target.classList.remove("errorInput");
                setError({
                    ...error,
                    [name]: "",
                })
            })
            .catch(err => {
                target.classList.add("errorInput");
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
                        user={login}
                        setUser={setLogin}
                        error={error}
                    />
                </Route>
                <Route path="/signup">
                    <Signup
                        onChangeHandler={onChangeHandler}
                        user={register}
                        setUser={setRegister}
                        error={error}
                    />
                </Route>
                <PrivateRoute path="/dashboard">
                    <Dashboard />
                </PrivateRoute>
            </Router>
            <Footer />
        </div>
    )
}

export default App;