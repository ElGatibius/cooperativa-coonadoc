import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <h3 className="footer__title">COONADOC</h3>
          <p>📍 Bogotá - Colombia, Cra. 16 # 30 - 63</p>
          <p>📞 Linea fija +57 601 7523313</p>
          <p>📱 Atencion al Cliente 311 5019158</p>
        </div>
        <div className="footer__social">
          <h4>Síguenos</h4>
          <div className="footer__icons">
            <a href="https://web.facebook.com/COONADOC/?_rdc=1&_rdr" target="_blank" rel="https://www.facebook.com/COONADOC/">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/coopcoonadoc/" target="_blank" rel="https://www.instagram.com/coopcoonadoc/">
              <FaInstagram />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FCoonadoc" target="_blank" rel="https://x.com/i/flow/login?redirect_after_login=%2FCoonadoc">
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
