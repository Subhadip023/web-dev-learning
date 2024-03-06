import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [from, setfrom] = useState({email:'',phone:''});

  const handelcicke = () => {
    alert("clicked");
  };
  const handelin = (e) => {
    setfrom({ ...from, [e.target.name]: e.target.value });
  };
  

  return (
    <>
      <div className="button">
        <button onClick={handelcicke}>Click me </button>
      </div>
      {/* <div className="red" onMouseOver={mouseover}>
        i'm red div
      </div> */}
      <input type="text" name="email" value={from.email} onChange={handelin}/>
    </>
  );
}

export default App;
