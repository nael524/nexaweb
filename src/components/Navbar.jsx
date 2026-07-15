import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link dari react-router-dom
import '../styles/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Bagian Logo */}
                <div className="navbar-logo">
                    {/* 2. Ubah logo menjadi Link menuju halaman utama / */}
                    <Link to="/" onClick={() => setIsOpen(false)}>LOGO</Link>
                </div>

                {/* Tombol Hamburger untuk Mobile */}
                <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Link Navigasi */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {/* 3. Ubah tag href="#" menjadi to="..." sesuai path routing di App.jsx */}
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;