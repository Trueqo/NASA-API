import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Apod from './views/Apod/Apod';
import Rovers from './views/Rovers/Rovers';
import Home from './views/Home/Home';

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rovers' element={<Rovers/>}/>
        <Route path='/apod' element={<Apod/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
