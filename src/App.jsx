// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';       // You'll create this
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />  {/* ✅ This is required */}
        {<Route path="/contact" element={<Contact />} />}
      </Routes>
    </>
  );
}

export default App;
