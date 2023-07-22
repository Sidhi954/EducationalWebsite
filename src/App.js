import React from 'react';
// import Api from './Komal/Api';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Info from './components/Info';
import Home from './components/Home';
import './index.css';
import Header from './components/Header';





const App=()=>{
  
  return(<>
  {/* <Api/> */}
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
  </BrowserRouter>
  </>)
}
export default App;