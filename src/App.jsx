import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NosotrosPage from './pages/nosotros';
import Blog from './pages/Blog';
import Servicios from './pages/Servicios';
import DocumentosPage from './pages/Documentos';
import Contact from './pages/Contact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/documentos" element={<DocumentosPage />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
  );
}

export default App;