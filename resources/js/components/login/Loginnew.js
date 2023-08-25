import './login.css'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState,React } from 'react';
import { useNavigate,Link } from "react-router-dom";

const Login = () => {

const navigate = useNavigate();
// Data add by hooks
const [input, setInput] = useState(
    {
        email:"",
        password:""
    }
    );

// this function make Api to store data into a database
const loginData = async (e)=>{
    e.preventDefault();
    // const res = await axios.post("/login",input);
    const res = await axios.post("api/login",input);
    console.log(res);
    // toast.success("Data added Successfully !!!");
    if(res.data.message === 'Successfully Login'){
        localStorage.setItem('input_value',JSON.stringify(input));
        const a = localStorage.getItem('input_value','***');
        console.log(JSON.parse(a));
        navigate("/dashboard");
    }else{
        navigate("/login");
        console.log("credential is not match");
    }



  }

  return (
    <div>
        <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">LOGIN</h1>
                <form onSubmit={loginData}>
                    <input type="text" className="form-control" name="email" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} required/>
                    <input type="password" className="form-control" name="password" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} required/>
                    <button className="opacity">SUBMIT</button>
                </form>
                <div className="register-forget opacity">
                    <Link to={'/register'}>REGISTER</Link>
                    <Link to={'/forgot-password'}>FORGOT PASSWORD</Link>
                </div>
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>

    </div>
  )
}

export default Login
