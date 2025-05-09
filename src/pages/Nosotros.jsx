// src/pages/Nosotros.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Nosotros.scss'; 
import { documents } from '../data/documents';  

export default function NosotrosPage() {

  const misDocs = documents.filter(doc => doc.category === 'Nosotros');

  return (
    <>
      <Navbar />
      <section className="nosotros" id="nosotros">
        <div className="quienes-somos">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una cooperativa de aportes y crédito que entrega servicios integrales generando
            rentabilidad para fortalecer el patrimonio y brindar bienestar a través de sus excedentes.
          </p>
        </div>

        <div className="mision-vision">
          <div className="mision">
            <h3>Misión</h3>
            <p>
              COONADOC somos una cooperativa de aportes y crédito que cuenta con talento humano idóneo,
              entrega servicios integrales de aporte y crédito de manera socialmente responsable,
              sostenible que genera una rentabilidad superior para fortalecer patrimonio y brindar bienestar
              a través de excedentes cooperativos que beneficien a todos sus asociados, a sus familias y
              a la comunidad en general.
            </p>
          </div>
          <div className="vision">
            <h3>Visión</h3>
            <p>
              COONADOC, para el año 2025, incrementará su base social en más de 900 asociados, a través
              de la gestión social, el empoderamiento de los valores corporativos de eficiencia, confianza
              y calidez, y la prestación de servicios, generando transformación de vida, con las políticas
              del buen-vivir y el bien-estar, siguiendo los principios del cooperativismo.
            </p>
          </div>
        </div>

        <div className="documentos">
          <h2>Documentos</h2>
          <div className="grid-documentos">
            {misDocs.map((doc, index) => (
              <div className="card-doc" key={index}>
                <h4>{doc.titulo}</h4>
                <p>{doc.descripcion}</p>
                <a href={doc.link} download target="_blank" rel="noreferrer">
                  Descargar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
