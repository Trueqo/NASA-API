import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Apod from './views/Apod/Apod';
import Rovers from './views/Rovers/Rovers';
import Home from './views/Home/Home';
import Test from './views/epic/Test';



function App() {
  

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route index='/' element={<Home/>}/>
        <Route path='/apod' element={<Apod/>}/>
        <Route path='/epic' element={<Test/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
