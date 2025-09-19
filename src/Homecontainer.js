import React, { use } from "react";
import "./App.css";
import { useState,useEffect } from "react";
function Homecontainer(){
  const width=26;
  const height=26;
  const []=useState([])
    return (<>
     <div className="Homecontainer-A1">
      <div className="header">
      <header>
      <input className="Search" type="Search" placeholder="Search here "></input>
      <img src="/image/search icon.png" alt="search-icon"style ={{width:width,height:height}}></img>
      </header>
      </div>
     </div>
    </>);
}
export default Homecontainer;