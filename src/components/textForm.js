import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState('');
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleDnClick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const handleOnChange = (event) => {
        settext(event.target.value);
    }
    const handleclrClick = () => {
        settext("");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCapitalize = () => {
        let newText = () => {
            let finalStrArr = [];
            let strArr = text.split(" ")
            strArr.forEach(element => {
                finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
            });
            let finalStr = finalStrArr.join(" ")
            return finalStr;
        }
        settext(newText)
    }
    const handleGen = () => {
        settext('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        props.fn("info", "Generated Random Text");
    }
    const handlecopy = ()=> {
        let text = document.getElementById("mybox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.fn("info", "Copied to Clipboard", 3000);
    }
    return (
        <>
            <div className="container" style={{color:props.mode === 'light'?'Black':'White'}}>
                <h1>{props.h1}</h1>
                <div className="mb-3">
                    <label htmlFor="mytext2" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'White':'#1c2025', color:props.mode === 'light'?'Black':'White'}}id="mybox" rows="8" placeholder='Enter Text Here'></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Uppercase</button>
                <button className='btn btn-warning mx-3' onClick={handleDnClick}>Lowercase</button>
                <button className='btn btn-light' onClick={speak}>Read</button>
                <button className='btn btn-dark mx-3' onClick={handleCapitalize}>Format</button>
                <button className='btn btn-danger' onClick={handleGen}>Generate</button>
                <button className='btn btn-info mx-3' onClick={handlecopy}>Copy to Clipboard</button>
                <button className='btn btn-info' onClick={handleclrClick}>Clear!</button>
            </div>
            <div className="container my-5" style={{color:props.mode === 'light'?'Black':'White'}}>
                <h3>Preview: </h3>
                <p>{text.length>0?text:"Enter Text to continue"}</p>
                <h4>Your Text Summary:</h4>
                <p>Number of Characters: {text.length}</p>
                <p>Number of words: {text===""?"0":text.split(" ").length}</p>
                <p>Minutes Required to read: {text===""?"0":0.008 * text.split(" ").length}</p>
            </div>
        </>
    )
}