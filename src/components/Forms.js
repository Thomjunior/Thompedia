import React, { useState } from "react";

function Forms(){

    const [headingText,setHeadingText] = useState("HELLO SOMEBODY");
    const [isMouseOver,setMouseOver] = useState(false);
   
      function handleClick (){
       setHeadingText("THANKS ! SUBMITTED ")
    }
    function handleMouseOver(){
        setMouseOver(true)

    }

    function handleMouseOut (){
        setMouseOver (false)
    }
    return(
        <div>
            <h1>{headingText}</h1>
             <input type="text" placeholder="whats your name"/><br/>
            
             <button style={{backgroundColor : isMouseOver ? "black" : "white"}}
              onClick={handleClick}
              onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}
               
              >submit</button>
           
        </div>

    )
}
export default Forms;