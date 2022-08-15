import React from "react";
import "../App.css";
import {useState} from "react";
// we will make a form and send all thje data back to an api 
// we use state to make the eobjet
function Contact(){

    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        Email:"",
        recieve:false,
        wock:false

    })
console.log(formData)
    // in the state methpd we use on the on change property of the input element
    //you do the state in the js part and call in the jsx part

    function formHand(event){
        //use objectdeconstructing to get the properties you want out the event object the event is the change that we on
        const {name,type,checked,value} = event.target
        setFormData(formData=>{
            return{
                ...formData,
                [name]:type==="checkbox" ? checked :value

            }
        })
    }
    //in the jsx part we can make a submit handler for on submit property for the form element which i=understand s if a button is inn a form to make a request to a server and does it for us

    function submitHandler(event){
        event.preventDefault()
        console.log(formData)
    }
    return(<div>
        <div className="formc">
       <form onSubmit={submitHandler}>
           <h1>Contact Us</h1>

        <label
            htmlFor="firstname"
            className="formitem">
            Firstname:
            <input
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                onChange={formHand}
                className="formitem"
            /> 
        </label>

        <label 
            htmlFor="lastname"
            className="formitem"
            >
                Lastname:
            
            <input
                type="text"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                onChange={formHand}
                className="formitem"
            />
        </label>

        <label 
            htmlFor="Email"
            className="formitem"
            >
                Email:
            
            <input
                type="text"
                name="Email"
                id="Email"
                value={formData.Email}
                onChange={formHand}
                className="formitem"
            />
        </label>
        <label
            htmlFor="rec"
            className="formitem"
            > Do you Want to book a wocker?
            <input
                type="checkbox"
                name="recieve"
                id="rec"
                checked={formData.recieve}
                onChange={formHand}
                className="formitem"
            />
        </label>
        <label
            htmlFor="wock"
            className="formitem"
            > Do you Want to recieve info on being a Wocker?
            <input
                type="checkbox"
                name="wock"
                id="wock"
                checked={formData.wock}
                onChange={formHand}
                className="formitem"
            />
        </label>
    
        <button>sign up</button>
       </form>
       </div>
    </div>)
   
}

export default Contact;