import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';


function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText="Subhadip Chakraborty"/>
      <div className='value'> {value}</div>
     <button onClick={()=>{setValue(value + 1)}}>Click me</button>
     <Footer/>
    </div>
  );
}

export default App;