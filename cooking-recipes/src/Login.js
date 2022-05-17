import React from "react";
import { Form, Formik, FormikProvider, useFormik } from 'formik';
import crypto from 'crypto-js';
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { TextField } from "./components/TextField";

export default function Login({onLogin}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onLogin(username, password) === true) {
            navigate('/', {replace: true});
        }
        
        setUsername('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" name="action">Submit</button>
            
            <Link to='/register'>Don't have an account?</Link>
        </form>
            
    );

}
