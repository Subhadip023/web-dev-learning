import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

let name = 'subhadip Chakraborty';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark mode has been activate","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("light mode has been activate","success");

    }
  };

  return (
    <>
      <Navbar title="TextUtil" mode={Mode} toggleMode={toggleMode} />
      {alert && <Alert alert={alert} />}
      {/* <TextFrom showAlert={showAlert} heading="Enter the Text to Analyze Below" /> */}

      <Router>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<TextFrom showAlert={showAlert} heading="Enter the Text to Analyze Below" />} />
  </Routes>
</Router>

    </>
  );
}

export default App;