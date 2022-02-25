import React,{useContext} from "react";
import Context from "./Context";

function KalkItems(){
    const { hendelClick, clear, back, result} = useContext(Context)
    return(
        <div className="keybord">
            <button id="clear" onClick={clear} >Clear</button>
            <button id='back' onClick={back}>C</button>
            <button className="btn2" onClick={hendelClick} name="/" >&divide;</button>
            <button className="btn1" onClick={hendelClick} name="7">7</button>
            <button className="btn1" onClick={hendelClick} name="8">8</button>
            <button className="btn1" onClick={hendelClick} name="9">9</button>
            <button className="btn2" onClick={hendelClick} name="*">&times;</button>
            <button className="btn1" onClick={hendelClick} name="4">4</button>
            <button className="btn1" onClick={hendelClick} name="5">5</button>
            <button className="btn1" onClick={hendelClick} name="6">6</button>
            <button className="btn2" onClick={hendelClick} name="-">&ndash;</button>
            <button className="btn1" onClick={hendelClick} name="1">1</button>
            <button className="btn1" onClick={hendelClick} name="2">2</button>
            <button className="btn1" onClick={hendelClick} name="3">3</button>
            <button className="btn2" onClick={hendelClick} name="+">+</button>
            <button className="btn1" onClick={hendelClick} name="0">0</button>
            <button className="btn1" onClick={hendelClick} name=".">.</button>
            <button id="result" className="btn2"onClick={result}  name="=">=</button>





        </div>
    )
}

export default KalkItems