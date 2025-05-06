// src/pages/Contact.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    pregunta: '¿Cómo puedo afiliarme a COONADOC?',
    respuesta: 'Para afiliarte, visita la sección "Nuevos Socios" y sigue los pasos descritos, o contáctanos directamente por este formulario.',
  },
  {
    pregunta: '¿Qué requisitos necesito para solicitar un crédito?',
    respuesta: 'Los requisitos varían según el tipo de crédito; generalmente debes presentar cédula, estados financieros y cumplir la antigüedad mínima como asociado.',
  },
  {
    pregunta: '¿Cómo funcionan las tasas de interés?',
    respuesta: 'Nuestras tasas son competitivas y se calculan según tu perfil de riesgo y el tipo de crédito. Comunícate con nosotros para un cálculo personalizado.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // aquí integrarías tu API o servicio de correo
    console.log('Enviado:', form);
    setSubmitted(true);
    setForm({ nombre: '', email: '', telefono: '', descripcion: '' });
  };

  const toggleFAQ = idx => {
    setOpenIndex(i => (i === idx ? null : idx));
  };

  return (
    <>
      <Navbar />
      <section className="contact-page">
        {/* Formulario */}
        <div className="contact-page__form">
          <h2>Contáctanos</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label>Descripción</label>
                <textarea
                  name="descripcion"
                  rows="4"
                  value={form.descripcion}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          ) : (
            <p className="thanks">✅ Gracias por tu mensaje. Te contactaremos pronto.</p>
          )}
        </div>

        {/* Mapa */}
        <div className="contact-page__map">
          <h2>Nuestra ubicación</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8583894937237!2d-74.07671213124813!3d4.619341185090282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98ec812d32f5%3A0xc08cb826ece75740!2sCoonadoc!5e0!3m2!1ses-419!2sco!4v1746564304626!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* FAQ */}
        <div className="contact-page__faq">
          <h2>Preguntas frecuentes</h2>
          {faqs.map((f, idx) => (
            <div className="faq-item" key={idx}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{f.pregunta}</span>
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div
                className={`faq-answer ${openIndex === idx ? 'open' : ''}`}
                aria-hidden={openIndex !== idx}
              >
                <p>{f.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
