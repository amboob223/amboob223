import React from "react";
import "../App.css";


function Card(props){
        
    return(<div className="cardc">
        <img src={props.img} alt="logo"/>
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
    </div>)
}

export default Card;