import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Sesuaikan path-nya
import About from './pages/About';
import Landing from './pages/Landing'


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        {/* Kamu bisa tambah route lain di sini nanti */}
      </Routes>
    </Router>
  );
}

export default App;