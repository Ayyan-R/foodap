import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "./home";
import { useState } from "react";


function Loginpage() {

  const [Username,Setusername]=useState("");
  const [Password,SetPassword]=useState("");
  const navigate=useNavigate();
  const TorF=()=>{
    if(Username==="A" && Password==="1234"){
      navigate('/home')
    }
  }
  const Clear=()=>{
       Setusername("");
       SetPassword("");
  }

  
  

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
      <button className="signup"  ><Link to={'/home'}>SignIn</Link></button>
      <h5 className="or">Or</h5>
      <button onClick={Clear}>Clear</button>
      <button type="button" onClick={TorF}>LogIn</button>
      </div>
   
    </div>
    
  </>)
}

export default Loginpage;