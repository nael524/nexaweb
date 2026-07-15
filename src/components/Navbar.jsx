import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImg from '../images/logo.png'; // 1. Import file logo kamu di sini (sesuaikan arah foldernya)

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        {/* 2. Gunakan tag <img> dengan variabel logo yang sudah di-import */}
                        <img src={logoImg} alt="Logo Perusahaan" className="logo-image" />
                    </Link>
                </div>

                {/* Tombol Hamburger untuk Mobile */}
                <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Link Navigasi */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
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