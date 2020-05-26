import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./login";
import Nav from "./nav";
import Footer from "./footer";
import Signup from "./signup";

const App = () => {

    const [formValues, setFormValues] = useState({})
    const [user, setUser] = useState({})
    const [userList, setUserList] = useState([])

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