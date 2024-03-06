import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handelcicke = () => {
    alert("clicked");
  };
  const mouseover = () => {
    alert("clicked ,mouseover");
  };

  return (
    <>
      <div className="button">
        <button onClick={handelcicke}>Click me </button>
      </div>
      <div className="red" onMouseOver={mouseover}>
        i'm red div
      </div>
    </>
  );
}

export default App;
