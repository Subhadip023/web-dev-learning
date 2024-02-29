import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom"; // Corrected import
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

let name = "subhadip Chakraborty";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark mode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been activated", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtil" mode={Mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert} />}

      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} /> 
          <Route
            path="/"
            element={
              
              <TextFrom
                showAlert={showAlert}
                heading="Enter the Text to Analyze Below"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
