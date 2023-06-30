import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextArea from "./components/TextArea";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  // Toggle Dark-Light Mode 
  const[Mode, setMode] = useState('light');

  // Toggle Dark-Light Mode method
  const toggleMode = () => {
    if(Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 4 18)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
    }
  }

  // Display Alert box method 
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
      setAlert({
          message: msg,
          type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  return (
    <Router>
      <Navbar title="Textion" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<TextArea tag="Enter text here..." mode={Mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About mode={Mode}/>} />
        <Route path="/contact" element={<Contact mode={Mode}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
