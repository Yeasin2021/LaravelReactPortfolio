import './login.css'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState,React } from 'react';
import { Link } from "react-router-dom";


const ForgotPassword = () => {

// Data add by hooks
const [input, setInput] = useState(
    {
        email:""
    }
    );

// this function make Api to store data into a database
const loginData = async (e)=>{
    e.preventDefault();
    // const res = await axios.post("/login",input);
    const res = await axios.post("api/login",input);
    console.log(res);
    // toast.success("Data added Successfully !!!");
    // navigate("/");


  }

  return (
    <div>
        <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity" style={{ fontSize:'24px' }}>FORGOT PASSWORD</h1>
                <form>
                    <input type="text" className="form-control" name="email" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} placeholder='Enter Your Email' required/>
                    <button className="opacity">SUBMIT</button>
                </form>
                <div className="register-forget opacity">
                    <Link to={'/login'}>Back To Login</Link>
                </div>
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>

    </div>
  )
}

export default ForgotPassword
