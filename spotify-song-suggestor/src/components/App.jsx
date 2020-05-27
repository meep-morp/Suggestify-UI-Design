import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import "./App.css"
import Login from "./login-signup/login";
import Signup from "./login-signup/signup";
import Nav from "./nav";
import Footer from "./footer";
import PrivateRoute from './utils/privateRoute';

/* **VARIBLES** */



const App = () => {
    /* **RETURN STATEMENT AND COMPONENTS** */

    return (
        <div className="App">
            <Nav />
            <Router>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup
                       
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