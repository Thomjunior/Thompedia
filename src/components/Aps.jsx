import React, { useState } from "react";
function Aps(){
    const [name, setName] = useState ("");
    const [headingText,setHeading] = useState("")
    function handleChange(event){
    setName(event.target.value)
         
    }
    function handleClick(){
     setHeading(name)
    }
    return(
    <div className="story">
        <h1>Hello Mrs.{headingText}</h1>
        <input onChange={handleChange} type="text" placeholder="whats your name"/>
        <button onClick={handleClick}>submit</button>
    </div>
    )
}
export default Aps;