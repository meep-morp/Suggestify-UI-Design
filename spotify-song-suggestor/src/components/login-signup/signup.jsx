import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const initialFormValues = {
    username: '',
    password: ''
}

const Signup = () => {
    const [register, setRegister] = useState(initialFormValues);
    
    
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister({...register, [name]: value, })
        
      };

    const submitHandler = (e) => {
        e.preventDefault();
        const newRegister = {
            username: register.username,
            password: register.password,
        }
        console.log(newRegister)
         //setFormValues(initialFormValues);

        //axios post the newUser to backend 
        axios
        .post(`https://spotsuggest.herokuapp.com/api/auth/register`, newRegister)
            .then(res => {
                console.log(res.config.data);
            })
            
    }

    return (
        <form className="form" onSubmit={submitHandler}>
           
            <input type="text"
                name="username"
                placeholder="Create Username"
                onChange={changeHandler}
             value={register.username}
            />
           
            <input type="password"
                name="password"
                placeholder="Create Password"
                onChange={changeHandler}
             value={register.password}
            />
            <button type="submit" className="button" onClick={submitHandler}>SIGN UP</button>

            <hr />

            <p className="buttonTitle">Already have an account?</p>
            <Link to="/" className="link">LOG IN</Link>
        </form>
    )
}

export default Signup