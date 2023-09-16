
import React, { useState } from "react";
function Hpp(){
    const now = new Date().toLocaleTimeString();
    const [time,setTime] = useState(now)
    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    return(
        <div>
            <h1>{time}</h1>
            <h1>  <button onClick={updateTime}>Get Time</button></h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    )
}
export default Hpp;