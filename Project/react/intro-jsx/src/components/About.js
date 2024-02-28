import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [BtnText, setBtnText] = useState("Enable light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container my3" style={myStyle}>
      <h1>About Us</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, incidunt
      at. Error est nobis minima. Pariatur odio voluptatem libero quibusdam
      eligendi accusantium consequatur excepturi, quia eos nemo minus. Nam sint
      necessitatibus aperiam adipisci cum temporibus earum commodi quia odit
      illum.
      <br />
      <button
        type="button"
        className="btn btn-primary my-3"
        onClick={toggleStyle}
      >
        {BtnText}
      </button>
    </div>
  );
}
