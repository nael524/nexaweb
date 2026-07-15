import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'; // 1. Import Link dari react-router-dom
import '../styles/Navbar.css';
=======
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImg from '../images/logo.png'; // 1. Import file logo kamu di sini (sesuaikan arah foldernya)
>>>>>>> 339d97cb6ffd227e166562a3611e43cfe2bc3de7

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
<<<<<<< HEAD
                {/* Bagian Logo */}
                <div className="navbar-logo">
                    {/* 2. Ubah logo menjadi Link menuju halaman utama / */}
                    <Link to="/" onClick={() => setIsOpen(false)}>LOGO</Link>
=======
                <div className="navbar-logo">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        {/* 2. Gunakan tag <img> dengan variabel logo yang sudah di-import */}
                        <img src={logoImg} alt="Logo Perusahaan" className="logo-image" />
                    </Link>
>>>>>>> 339d97cb6ffd227e166562a3611e43cfe2bc3de7
                </div>

                {/* Tombol Hamburger untuk Mobile */}
                <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Link Navigasi */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
<<<<<<< HEAD
                    {/* 3. Ubah tag href="#" menjadi to="..." sesuai path routing di App.jsx */}
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
=======
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/list" onClick={toggleMenu}>List Harga</Link></li>
>>>>>>> 339d97cb6ffd227e166562a3611e43cfe2bc3de7
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;