import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import About from "./components/About";
// import Language from "./components/Language";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";

import Krio from "./components/krio";





function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path= "/about" element={<About/>}/>  
          <Route path="/krio" element ={<Krio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function Home(){
  return(<div>
    <h1>
     Choose a language
    </h1>
      <Scroller/>
  </div>)
}

export default App;
