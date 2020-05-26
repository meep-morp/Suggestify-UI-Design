import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import "./App.css"
import axios from "axios";
import Login from "./login";
import Signup from "./signup";
import Nav from "./nav";
import Footer from "./footer";

/* **VARIBLES** */

const login = "https://spotsuggest.herokuapp.com/api/auth/login";
const register = "https://spotsuggest.herokuapp.com/api/auth/register";


const App = () => {

    /* **USE STATES** */

    const [formValues, setFormValues] = useState({});
    const [user, setUser] = useState({});
    // const [userList, setUserList] = useState([]);

    /* **FUNCTIONS** */

    // const getUsers = () => {
    //     axios.get(`https://spotsuggest.herokuapp.com/api/auth/login`)
    //     .then(resolve => {
    //         setUserList(resolve.data);
    //     })
    //     .catch(error => {
    //         console.log("Get Error\n" + error);
    //     })
    // }

    const loginUser = () => {
        axios.post(`https://spotsuggest.herokuapp.com/api/auth/login`)
            .then(resolve => {
                console.log(resolve)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const postNewUser = newUser => {
        axios.post(`https://spotsuggest.herokuapp.com/api/auth/register`)
        .then(resolve => {
            console.log(resolve);
            console.log(resolve.data);
        })
        .catch(error => {
            console.log("Post Error\n" + error);
        })
    }

    // const registerUser = () => {
    //     axios.post(`https://spotsuggest.herokuapp.com/api/auth/register`)
    // }

    /* **RETURN STATEMENT AND COMPONENTS** */

    return (
        <div className="App">
            <Nav />
            <Router>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Router>
            <Footer />
        </div>
    )
}

export default App;