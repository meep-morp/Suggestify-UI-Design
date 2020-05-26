import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {

    const [formValues, setFormValues] = useState({})
    const [user, setUser] = useState({})
    const [userList, setUserList] = useState([])

    return (
        <div className="App">
            <Router>

            </Router>
        </div>
    )
}

export default App;