import React from 'react'
import { useState } from 'react';

export default function TextArea(props) {
    // text manipulation 
    const [text,setText] = useState("");

    // text change method 
    const handleOnChange = () => {
        setText(document.getElementById('myBox').value);
    }

    // convert to uppercase method
    const convertUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    // convert to lowercase method
    const convertLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    //Clear text method
    const textClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    //Copy text to clipboard method
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }
    
    return (
        <div className='container'>
            <h1 className='my-3'>{props.tag}</h1>
            <div className="mb-3">
                <textarea className="form-control my-2" id="myBox" rows='8' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(3 5 30)':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className='btn btn-primary mb-2' onClick={convertUpper} disabled={text.length===0}>UpperCase</button>
            <button className='btn btn-primary mx-2 mb-2' onClick={convertLower} disabled={text.length===0}>LowerCase</button>
            <button className='btn btn-primary mb-2' onClick={handleCopy} disabled={text.length===0}>Copy</button>
            <button className='btn btn-primary mx-2 mb-2' onClick={textClear} disabled={text.length===0}>Clear</button>
            <div className="container mt-3">
                <h2>Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2 className='mt-2'>Preview</h2>
                <p>{text.length<=0?"Enter text to preview":text}</p>
            </div>
        </div>
    );
}
