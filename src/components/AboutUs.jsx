import React from 'react';
import './AboutUs.scss';

export default function AboutUs() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">Quiénes somos</h2>
        <div className="about__cards">
          <div className="about__card">
            <h3 className="about__card-title">Nuestra Misión</h3>
            <p className="about__card-text">
              Brindar soluciones financieras accesibles y de calidad que impulsen el desarrollo
              económico de nuestros asociados, promoviendo la solidaridad y el crecimiento sostenible.
            </p>
          </div>
          <div className="about__card">
            <h3 className="about__card-title">Nuestra Visión</h3>
            <p className="about__card-text">
              Ser la cooperativa líder en innovación y confianza, reconocida por su compromiso
              social y por transformar positivamente la vida de nuestra comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
