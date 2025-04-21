import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <h3 className="footer__title">COONADOC</h3>
          <p>📍 Carrera 12 # 34 - 56, Bogotá D.C.</p>
          <p>📞 +57 300 123 4567</p>
          <p>📧 contacto@coonadoc.com</p>
        </div>
        <div className="footer__social">
          <h4>Síguenos</h4>
          <div className="footer__icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:contacto@coonadoc.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        © {new Date().getFullYear()} COONADOC. Todos los derechos reservados.
      </div>
    </footer>
  );
}
