import React from "react";
import "../App.css";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";

//maybe we use state so when you click the data name we select throgh the lang objecrts if the name data matches with lang data we select that key and info.
function Langauge(props){
    return(<div>
        <h1>{props.title}</h1>
        <table>
        <td className="tableitem">
                <tr>
        <ReactPlayer url={props.url} width ={300} height={300} className="langvid"/>
                </tr>
                <tr>
                    <h1>
                        Info
                    </h1>
                   <p>
                       {props.info}
                   </p> 
                </tr>
            </td>
            <td className="tableitems">
                
               
                    <table>
                
                    <h1>Grammer and Vocab</h1>
                        <td className="tableitems">
                            <tr>
                                <h2>
                                    Week 1 Vocab
                                </h2>
                                <ol className="style">
                                    <li>
                                        Hello :  "ello"
                                    </li>
                                    <li>
                                        GoodBye :  "goodbye"
                                    </li>
                                    <li>
                                        Boy :  "borbor"
                                    </li>
                                    <li>
                                        Girl :  "Titi"
                                    </li>
                                    <li>
                                        Ugly :  "WorWor"
                                    </li>
                                    <li>
                                        Stand :  "Tinapp"
                                    </li>
                                    <li>
                                        disrespect :  "Fityai"
                                    </li>
                                    <li>
                                        Gossip :  "congosah"
                                    </li>
                                    <li>
                                        How are you doing? :  "Ow de body?"
                                    </li>
                                    <li>
                                       Im fine :  "de body fine"
                                    </li>
                                    <li>
                                        trouble :  "Wahala"
                                    </li>
                                    
                                </ol>
                            </tr>
                        <tr>
                            <h2>
                            Congugation
                            </h2>

                            <ol className="style">

                                <li>
                                    I : "me or I" 
                                </li>
                                <li>
                                    you : "you"
                                </li>
                                <li>
                                    yall : "una"
                                </li>
                                <li>
                                    us   : "we"
                                </li>
                            </ol>
                           

                        </tr>
                        <tr>
                            <h2>
                                Tips
                            </h2>
                            <p>
                                to start all you got to do is speak english with an african accent and intergeate the new words you learn weekly. between the videos quizes you should be able to be pick it up. and if you get a wocker you should be conversational even quicker
                            </p>
                        </tr>
                        </td>
                        <td className="tableitems">
                            <tr>
                                <h2>Info</h2>
                                <ul>
                                  <li>
                                How to book a wocker?
                                  </li>  
                                  <li>
                                How to be a wocker and get paid.
                                  </li>
                                </ul>
                                 
                            </tr>
                        </td>
                        
                    </table>
            </td>
        </table> 
       <Link 
       
       to="/contact">
       <button>
            Signup
        </button>
       </Link> 
        
    </div>)
}

export default Langauge;