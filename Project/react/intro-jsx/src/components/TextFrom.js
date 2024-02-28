import React from 'react'

export default function TextFrom(props) {
  return (
<form>

  <div className="container my-3">
  <h1>{props.header}</h1>
<div className="mb-3">
<label for="myBox" className="form-label">Enter your </label>
<textarea className="form-control" id="myBox" rows="8"></textarea>
</div>
<button type="submit" className="btn btn-primary">Upper case</button>


  </div>


</form>
  )
}
