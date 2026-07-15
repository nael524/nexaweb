import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Sesuaikan path-nya
import About from './pages/About';
import Landing from './pages/Landing'
<<<<<<< HEAD

=======
import List from './pages/List';
>>>>>>> 339d97cb6ffd227e166562a3611e43cfe2bc3de7

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        {/* Kamu bisa tambah route lain di sini nanti */}
=======
        <Route path="/list" element={<List />} />

>>>>>>> 339d97cb6ffd227e166562a3611e43cfe2bc3de7
      </Routes>
    </Router>
  );
}

export default App;