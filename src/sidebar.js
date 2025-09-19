import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <>
            <div className="MainContainer">
            
                <div className="SideContainer-d1">
                
                <img src="/image/cml2.png" ></img>
                    <ul>
                    
                        <li> Home </li>
                        
                        <li><Link to='/cart'>Cart</Link></li>
                        <li>Service</li>
                        <li>Delivery</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            

        </>

    )
}

export default Sidebar;