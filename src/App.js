import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm'
import Alert from './components/Alert';
import About from './components/About';
// import { Routes} from "react-router";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert = (type, message, time = 2000) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, time);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1c2025';
      showalert("success", "Dark Mode enabled");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; showalert("success", "Light Mode enabled");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode = {mode}fn={showalert}/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
