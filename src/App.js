//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import TextForm from './components/TextInput';
import React, {useState} from 'react';
import Alert from './components/alert';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  var [modechanged,setmc] = useState(false);
  var [mode,setmode]=useState('light');
  var [theme,chngtheme]=useState({
    background : '#ffffff',
    color: "#000000",
      height : "100vh",
  })
  var tooglemode = () => {
    if(mode==='dark')
    {
      setmode('light')
      setmc(true)
      chngtheme(
        {
          background : '#ffffff',
          color: "#000000",
          height : "100vh"
        }
      )
      setTimeout(setmc, 1000,false);
      
    }
    else
    {
      setmode('dark')
      setmc(true)
      chngtheme(
        {
          background : '#00004d',
          color: "#ffffff",
          height : "100vh"
          
        }
      )
      setTimeout(setmc,1000,false);
    }
  }
  return (
    <>
   <div classNmae="container" style={theme}>
   <Alert modechanged={modechanged} mode={mode}></Alert>
   <Navbar mode={mode} tooglemode={tooglemode}></Navbar>
   <TextForm heading="Enter text below" mode={mode} />
   </div>
    {/* <div className="container my-3" >
    
    </div> */}
      
    </>
  );
}

export default App;
