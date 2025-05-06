import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { documents } from '../data/documents';
import './Documentos.scss';

// Función para normalizar texto (quitar tildes y pasar a minúsculas)
const normalize = str =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export default function DocumentosPage() {
  const [query, setQuery] = useState('');

  // Filtra los documentos en tiempo real
  const filtered = documents.filter(doc =>
    normalize(doc.titulo).includes(normalize(query)) ||
    normalize(doc.descripcion).includes(normalize(query))
  );

  return (
    <>
      <Navbar />
      <section className="documentos-page">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar documentos..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="grid-documentos">
          {filtered.length ? (
            filtered.map((doc, idx) => (
              <div className="card-doc" key={idx}>
                <h4>{doc.titulo}</h4>
                <p>{doc.descripcion}</p>
                <a href={doc.link} download target="_blank" rel="noreferrer">
                  Descargar
                </a>
              </div>
            ))
          ) : (
            <p className="no-results">No se encontraron documentos.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
