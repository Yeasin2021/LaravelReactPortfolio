
import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './login.css';


const Login = (props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     try{
    //         // const audio = new Audio(Music);
    //         const formData = new FormData();
    //         formData.append('email',email);
    //         formData.append('password',password);
    //         axios.post('/login',formData);
    //         //console.log(data.loginData);
    //         toast.success("Login Successfully 😲 ")
    //         //navigate("/dashboard");
    //     }catch(error){
    //         console.log(error.message);
    //     }
    //     // console.log(email);
    //     // console.log(pass);
    // }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('email',email);
            formData.append('password',password);
            const response = await axios.post('/login',formData);
            const { access_token } = response.data;

            // Store access token in local storage or cookie
            localStorage.setItem('access_token', JSON.stringify(access_token));

            console.log(access_token);

            // Redirect or perform other actions upon successful login
            toast.success("Login Successfully 😲 ")
            navigate("/dashboard");
        } catch (error) {
            // Handle login error
            toast.success("Email or Password not match 😲 ");
            console.log(error.message);
        }
    }

     return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input  onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
    )
}

export default Login




