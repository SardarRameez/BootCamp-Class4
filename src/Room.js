import React, {useState} from 'react';
import './Room.css';


function Room() {
    let [isLit,setLit]=useState(true)
    // console.log("state[0] =" ,isLit);
    // console.log("state[1] =", setLit);
    // function light(){
    //     console.log("Button clicked")
    //     setLit(!isLit)
    // }
    return (  
        <div className={"room "+(isLit? "On":"Off")}>
            {/* {isLit? "On": "Off"} */}
            <button onClick={()=>setLit(!isLit)} className="btn">Light On/Off</button>
        </div>
  );
}

export default Room;
