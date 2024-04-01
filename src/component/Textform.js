import React, { useState } from 'react'


export default function Textform(props) {


  const [text,settext]=useState("Enter Text Here");
    const handleonclick=(event)=>{
       settext(text.toUpperCase());
      props.showalert("Convert Upper Case","success");
    }
    const handleonchange=(event)=>{
        settext(event.target.value);
     }
     const handleonclicklowercase =()=>{
        settext(text.toLowerCase());
        props.showalert("Convert Lower Case","success");

     }
     const handlecleartext =()=>{
      settext('');
     }
     const handleremovespaces =()=>{
      let newText = text.split(/[ ]+/);
      settext(newText.join(" "));
     }
     const handleCopy =()=>{
      let text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
     }
  return (
   <>
  <div className="mb-3 --bs-success">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example Text Here -</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleonchange} rows="3" value={text}></textarea>
    <button type="button" className="my-2 btn btn-primary" onClick={handleonclick}>Convert to UpperCase</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleonclicklowercase}>Convert to Lower Case</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handlecleartext}>Clear text</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy text</button>
    <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleremovespaces}>Remove extra Spaces</button>
  </div>
  <div className="container">
    <h1>YOur text summary</h1>
     <p>{text.split(' ').length}words and {text.length} characters</p>
     <p>{1/250*text.split(' ').length} minutes read</p>
  </div>
   <div className="container">
    <h1>Preview</h1>
    <p>{text==="Enter Text Here"?"Enter for preview":text}</p>
   </div>
   </>
  )
}
