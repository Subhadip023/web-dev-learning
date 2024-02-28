import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
let name ='subhadip Chakraborty '
function App() {
  return (
    <>
  
<Navbar title="TextUtil"/>
<TextFrom heading="Enter the text to analyze Below"/>
{/* <About/> */}
</>

  );
}

export default App;
