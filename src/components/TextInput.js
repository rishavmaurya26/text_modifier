import React, { useState } from 'react';


export default function TextForm(props) {
    const fillinside = () => {
        let newtext=text.toUpperCase();
        setText(newtext);
    };
    const fillinside1 = () => {
        let newtext=text.toLowerCase();
        setText(newtext);
    };
    const clearText = () => {
        let newtext="";
        setText(newtext);
    };
    const addtext = (event) => {
        setText(event.target.value);
        
    };
    const [text,setText] = useState('');
    if(text.length)
    {
        let content=text
        var preview=<p className="my-2 border border-3 border-secondary p-2">{content}</p>;
    }
    return(
        <div className="container">
        <div className="container" >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={addtext} id="myBox" rows="8"
            style={
                    {
                        background : props.mode==='dark'? '#666666':'#ffffff',
                        color :  props.mode==='dark'? '#ffffff' : "#000000"
                    }
                }></textarea>
            </div>
            <button  className={`btn btn-${props.mode==='dark' ? "secondary" : "primary"} btn-sm mx-1`} onClick={fillinside}>Convert to upper case</button>
            <button  className={`btn btn-${props.mode==='dark' ? "secondary" : "primary"} btn-sm mx-1`} onClick={fillinside1}>Convert to lower case</button>
            <button  className={`btn btn-${props.mode==='dark' ? "secondary" : "primary"} btn-sm mx-1`} onClick={clearText}>Clear text</button>
        </div>   
        <div className="container my-2 ">
            <h2>Text info</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <h2 className='my-2'>Preview</h2>
            {preview}
        </div>
        </div>
        
    )
}   

