import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home";

import Loginpage from "./login";

function App() {
  return (
    

    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
 
    
  );
}

export default App;
