import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Servicios.scss';
import { documents } from '../data/documents'; 

const creditos = [
  {
    titulo: 'Credi-impuestos',
    descripcion: 'Financia tus impuestos de manera rápida y segura.',
    imagen: '/images/impuestos.jpg',
  },
  {
    titulo: 'Compra de cartera',
    descripcion: 'Reúne tus deudas en un solo crédito con tasas favorables.',
    imagen: '/images/cartera.jpg',
  },
  {
    titulo: 'Consumo',
    descripcion: 'Solicita dinero para cualquier necesidad personal.',
    imagen: '/images/consumo.png',
  },
  {
    titulo: 'Vinculación',
    descripcion: 'Accede a productos exclusivos al vincularte como asociado.',
    imagen: '/images/vinculacion.jpg',
  },
  {
    titulo: 'Educativo',
    descripcion: 'Financia tus estudios o los de tu familia con tasas preferenciales.',
    imagen: '/images/educativo.png',
  },
];

const misDocs = documents.filter(doc => doc.category === 'Servicios');

export default function Servicios() {
  return (
    <>
      <Navbar />
      <section className="servicios">
        {/* NUEVOS SOCIOS */}
        <div className="nuevos-socios">
          <h2>Nuevos Socios</h2>
          <p>
            Radique su solicitud de afiliación adjuntando formulario completamente diligenciado con firma, huella y cédula de ciudadanía por ambas caras al correo <a href="mailto:afiliaciones@coonadoc.co">afiliaciones@coonadoc.co</a>
          </p>
          <div className="botones">
            <a target="_blank" rel="https://www.web.coonadoc.co/files/ACTUALIZACI-N-DE-DATOS-DIC-2022.pdf
">Inscripción nuevos socios</a>
            <a target="_blank" rel="noreferrer">Nuevos socios menores de edad</a>
            <a target="_blank" rel="noreferrer">Actualización de datos</a>
            <a target="_blank" rel="noreferrer">Inscripción en línea</a>
            <a target="_blank" rel="noreferrer">Actualización en línea</a>
          </div>
        </div>

        {/* CREDITOS */}
        <div className="creditos">
          <h2>Créditos</h2>
          <div className="grid-creditos">
            {creditos.map((c, idx) => (
              <div className="card-credito" key={idx}>
                <div className="imagen" style={{ backgroundImage: `url(${c.imagen})` }}>
                  <div className="info">
                    <h3>{c.titulo}</h3>
                    <p>{c.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOCUMENTOS */}
        <div className="documentos">
          <h2>Documentos</h2>
          <div className="grid-documentos">
            {misDocs.map((doc, idx) => (
              <div className="card-doc" key={idx}>
                <h4>{doc.titulo}</h4>
                <p>{doc.descripcion}</p>
                <a href={doc.link} download target="_blank" rel="noreferrer">Descargar</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
