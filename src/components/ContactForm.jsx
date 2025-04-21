import React, { useState } from 'react';
import './ContactForm.scss';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Aquí podrías integrar backend o una API de correo
      console.log('Correo enviado:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="contact-form" id="contact">
      <div className="contact-form__container">
        <h2 className="contact-form__title">
          ¿Quieres más información?
        </h2>
        <p className="contact-form__subtitle">
          Déjanos tu correo y pronto te contactaremos.
        </p>
        <form onSubmit={handleSubmit} className="contact-form__form">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        {submitted && <p className="contact-form__thanks">✅ Gracias por tu interés. Te contactaremos pronto.</p>}
      </div>
    </section>
  );
}
