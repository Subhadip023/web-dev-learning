import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("upper case done ","success");


  }
  const handleLoClick =()=>{
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert("Lower case done ","success");


  }
  const handlenoChange =(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handlenoChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
<div className="container my-3">
<h2>Your text summery </h2>
<p><b>{text.split(" ").length}</b>  worlds ,{text.length} charecters </p>
<p>{0.008*text.split(" ").length} mint read</p>
<h3>Preview</h3>
<p>{text}</p>
</div>

    </>
  );
}
