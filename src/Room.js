import React, {useState} from 'react';


function Room() {
    let [isLit,setLit]=useState(true)
    // console.log("state[0] =" ,isLit);
    // console.log("state[1] =", setLit);
    // function light(){
    //     console.log("Button clicked")
    //     setLit(!isLit)
    // }
    return ( 
        <div>
            This is Room Component. light is {isLit? "On": "Off"}
            <button onClick={()=>setLit(!isLit)}>Light On/Off</button>
        </div>
  );
}

export default Room;
