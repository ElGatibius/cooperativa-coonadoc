// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(o => !o);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar__content">
        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">COONADOC</Link></li>
          <li><Link to="/nosotros">NOSOTROS</Link></li>
          <li><Link to="/servicios">SERVICIOS</Link></li>
          <li><Link to="/documentos">DOCUMENTOS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
        </ul>
        <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
        <div className="navbar__logo">
          <Link to="/"><img src={logo} alt="Logo de COONADOC" /></Link>
        </div>
      </div>
    </nav>
  );
}

