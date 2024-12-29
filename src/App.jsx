import React from 'react';
import Home from "./components/home";
import Login from "./components/Login";
import Signup from"./components/Signup";
import {Route, Routes} from "react-router-dom";

function App() {
  return( 
    <div>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
    </div>
  );  
  
}

export default App;
    

