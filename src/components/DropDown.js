import React from "react";
import "./DropDown.css";
import {DropData} from "./DropData";//importing the langdata to be maped through when the state changes
import { Link } from "react-router-dom";
// we will use map to map through the data and use state to popukate the drop down when the language link is hovered over

function DropDown(){

//use state if you click link in the drop down the object
    return(<div>

            <ul className="drop">
                {DropData.map(function(data,index){
                    return (
                        <li key={index}>
                            <Link
                                to={data.path}
                                className={data.cname}
                                >

                          {data.name}        
                                </Link>
                            
                        </li>
                    )
                })}
                
            </ul>
    </div>)
}

export default DropDown;