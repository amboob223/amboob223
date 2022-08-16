import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import DropDown from "./DropDown";
import {useState} from "react";

function Navbar(){

        //we make the state for the hover
        const [hov,setHov] = useState(false)
        //we make a state method
        function onmouseover(){
            setHov(!hov)
        }

        function onmouseleave(){
            setHov(!hov)
        }


    return(<div>
        <nav className="nav">
            <ul className="navitems">
                <li>
                    <Link
                        to="/"
                        className="link"
                        >
                            Home
                        </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="link"
                        >
                        About    
                        </Link>
                    </li>
                <li 
                    onMouseEnter={onmouseover}
                    onMouseLeave={onmouseleave}
                    >
                    
                        Language
                        <i class="fa-solid fa-caret-down"></i>    
                       
                        {hov && <DropDown/>}
                    </li>
                <li>
                    <Link
                        to="/contact"
                        className="link"
                        >
                    Contact us    
                        </Link>
                </li>
            </ul>
        </nav>
    </div>)
}
export default Navbar;