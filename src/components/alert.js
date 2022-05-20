import React from 'react';
 
 export default function alert(props) {
    if(props.modechanged)
    return (
         <div class={`alert alert-${props.mode === "dark" ? "success" : "info"} text-center my-0`} role="alert">
        <strong>{props.mode} mode enabled</strong>
      </div>
      )
  
}
 