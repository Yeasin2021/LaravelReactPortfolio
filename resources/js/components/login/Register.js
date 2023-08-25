import './login.css'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState,React } from 'react';
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
const navigate = useNavigate();
// Data add by hooks
const [input, setInput] = useState(
    {
        name:"",
        email:"",
        password:""
    }
    );

// this function make Api to store data into a database
const registerData = async (e)=>{
    e.preventDefault();
    // const res = await axios.post("/login",input);
    const res = await axios.post("api/register",input);
    console.log(res);
    // toast.success("Data added Successfully !!!");
    navigate("/");


  }

  return (
    <div>
        <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                {/* <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" /> */}
                <h1 className="opacity">Register</h1>
                <form onSubmit={registerData}>
                    <input type="text" className="form-control" placeholder='Enter Name' name="name" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} required/>
                    <input type="email" className="form-control" placeholder='Enter Email' name="email" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} required/>
                    <input type="password" className="form-control" placeholder='Enter Password' name="password" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} required/>
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

export default Register
