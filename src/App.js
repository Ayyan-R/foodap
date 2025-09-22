import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";

import Loginpage from "./login";
import Signuppage from "./Signup";

function App() {
  return (
    

    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Signup" element={<Signuppage/>}/>
      </Routes>
    </Router>
 
    
  );
}

export default App;
