import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = () =>{
    if(mode === 'dark'){
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      // document.title = "TextUtils - Light Mode";
    }else{
      setmode('dark')
      document.body.style.backgroundColor = '#0b1a4c'
      showAlert("Dark mode has been enabled","success")
      // document.title = "TextUtils - Dark Mode";
    }
  }

  const setGreen = () =>{
    setmode('light')
    document.body.style.backgroundColor = '#65cd65'
    showAlert("Green mode has been enabled","warning")
  }
  
  const setRed = () =>{
    setmode('light')
    document.body.style.backgroundColor = '#ea4949'
    showAlert("Red mode has been enabled","warning")
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} setRed={setRed} setGreen={setGreen} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode}/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;