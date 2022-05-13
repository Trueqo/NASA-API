import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Apod from './views/Apod/Apod';

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/apod' element={<Apod/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
