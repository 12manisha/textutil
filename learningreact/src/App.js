
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Alert } from './components/Alert';

function App() {
  const [mode,setmode] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
    type : type
    })
    setTimeout (() => {
      setAlert(null)},
      800)
  }

  const toggleMode = () => {
    if(mode === 'light')
    {setmode('dark');
     document.body.style.backgroundColor='#636e72';
     showAlert("Dark mode enabled", "success");
  }
  else
  {setmode('light');
   document.body.style.backgroundColor='white';
   showAlert("Light mode enabled", "success");
}
  }



  return (
    <>
    <Router>
    <Navbar title="HELLOOO" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <Routes>
        <Route path="/" element={<TextForm heading='TextUtils' mode = {mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
