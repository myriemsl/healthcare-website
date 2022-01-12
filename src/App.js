import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path ='/healthcare-website' exact element={<Home/>}/>
                    <Route path ='/healthcare-website/about' exact element={<About/>}/>
                    <Route path ='/healthcare-website/services' exact element={<Services/>}/>
                    <Route path ='/healthcare-website/contact' exact element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
    </div>
  );
}

export default App;
