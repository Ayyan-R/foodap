import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./home";
import { useState } from "react";

import { ToastContainer,toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "./login.css";



function Loginpage() {

  const [Username,Setusername]=useState("");
  const [Password,SetPassword]=useState("");
  const navigate=useNavigate();
  const users = [
    { username: "A", password: "1234" },
    { username: "John", password: "abcd123" },
    { username: "Jane", password: "pass123" },
  ];
  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === Username && u.password === Password
    );
    if (user) {
      toast.success(`Welcome ${user.username} 🚀`);
      navigate("/home"); // redirect to home
    } else {
      toast.error("Invalid Username or Password ❌");
    }
  };
  const Clear = () => {
    Setusername("");
    SetPassword("");
  };


  
  

  return (<>
    <div className="Outer">
      <div className="Innerdiv">
      
      <input type="text" placeholder="Enter Username" value ={Username} onChange={(e)=>{
        Setusername(e.target.value)
      }}></input><br/>
      <input type="text" placeholder="Enter Password"  value ={Password} onChange={(e)=>{
        SetPassword(e.target.value)
      }}></input>
 
    <br/>
      <p>dont have an account? signup here!.</p>
      <button className="signup"  ><Link to={'/Signup'}>SignUp</Link></button>
      <h5 className="or">Or</h5>
      <button onClick={Clear}>Clear</button>
      <button type="button" onClick={handleLogin}>LogIn</button>
      </div>
   
    </div>
    
  </>)
}

export default Loginpage;