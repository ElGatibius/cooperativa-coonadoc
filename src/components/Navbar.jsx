import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar__content">
        {/* Menú principal */}
        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#">COONADOC</a></li>
          <li><a href="#">SERVICIOS</a></li>
          <li><a href="#">EN LÍNEA</a></li>
          <li><a href="#">CONTACTO</a></li>
          <li><a href="#">CLASIFICADOS</a></li>
        </ul>

        {/* Toggle hamburguesa */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Logo */}
        <div className="navbar__logo">
          <img src={logo} alt="Logo de COONADOC" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

