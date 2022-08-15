import React from "react";
import "../App.css"
import Card from "./Card";
import {LangData} from "./Langdata";
import {useState} from "react";
// here is where we put the info an the state will cganfe when we hit the button here
function Scroller(){

        // we are goinng to use state to change the button and for the frst page also throug the props.
        //we got to import the data here in the scroller to have something to make the state and the buttone will chamge ot on c;ick
    const pics = LangData.map(function(lang){return lang.img})
    const des = LangData.map(function(lang){return lang.description})
    const name = LangData.map(function(lang){return lang.name})
//now we make the state
    const [idx,setIdx] = useState(0)

    function next(){
        if(idx < LangData.length -1){
        setIdx(idx + 1)
    }}

    function last(){
        if(idx > 0){
            setIdx(idx-1)
        }
    }

    return(<div>
        <div>
            <Card
                img={pics[idx]}
                name={name[idx]}
                description={des[idx]}
            />
            <button onClick={last}>last</button>
            <button onClick={next}>next</button>
        </div>
    </div>)
}
export default Scroller;