import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
function App() {
  

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
