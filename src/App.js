import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import About from "./components/About";
// import Language from "./components/Language";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import Langr from "./components/Langr";
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Routes>
          <Route path ="/" element={<Home/>}/> 
          <Route path= "/about" element={<About/>}/>
          <Route path="/language" element={<Langr/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function Home(){
  return(<div>
      <Scroller/>
  </div>)
}

export default App;
