import React from "react";
import "../App.css";
import Langauge from "./Language";
import {lang} from "./Lang";
// this is the one where we wukk put akl the data
function Krio(){
    return(<div>

        <Langauge
            title="Krio"
            vocab={lang[0].vocab}
            info={lang[0].info}
            url={lang[0].url}
        />
    </div>)
}

export default Krio;