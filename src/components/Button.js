import React from "react"

function Clickbutton(props)
{
    return (
     <div>
         <input type={props.buttontype} value={props.buttonName} onClick={props.clickbutton} />
     </div>

    );

}



export default Clickbutton;