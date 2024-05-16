import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import About from './Components/About';
import Careers from './Components/Careers';
import Event from './Components/Event';
import Products from './Components/Products';
import Support from './Components/Support';
import NotFound from './Components/NotFound';
import { useState } from 'react';
import { MobileNavContextProvider,MobileContext } from './Components/context/MobileNavContext';
import Home from './Components/Home';
function App() {
  const mobileContext = useContext(MobileContext);
  
  if (!mobileContext) {
    throw new Error("Context not found");
  }

  const { showMobile, setShowmobile } = mobileContext;
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
            <Route element={<About/>} path='/About'/>
            <Route element={<Careers/>} path='/Careers'/>
            <Route element={<Event/>} path='/Event'/>
            <Route element={<Products/>} path='/Products'/>
            <Route element={<Support/>} path='/Support'/>
            <Route element={<NotFound/>} path='*'/>
      </Routes>
    </div>
  );
}

export default App;
