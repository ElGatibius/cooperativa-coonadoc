// src/pages/Blog.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Blog.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const noticias = [
  {
    titulo: 'Nueva línea de crédito disponible',
    descripcion: 'Conoce nuestra nueva línea de crédito para emprendedores con tasas especiales.',
    imagen: '/images/credito.jpg',
  },
  {
    titulo: 'Asamblea general 2025',
    descripcion: 'Resumen de los principales logros presentados en la última asamblea.',
    imagen: '/images/asamblea.jpg',
  },
  {
    titulo: 'Convenio con universidades',
    descripcion: 'Ahora puedes financiar tu educación con beneficios exclusivos.',
    imagen: '/images/convenio.jpg',
  },
];

const testimonios = [
  {
    nombre: 'Ana Rodríguez',
    opinion: 'Gracias a COONADOC pude financiar mis estudios sin complicaciones. Excelente atención.',
  },
  {
    nombre: 'Carlos Pérez',
    opinion: 'Los servicios son muy rápidos y eficientes. Me siento respaldado como asociado.',
  },
  {
    nombre: 'Laura Martínez',
    opinion: 'Muy buena atención y muchas opciones de ahorro. Recomendados al 100%.',
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <section className="blog">
        <h2 className="titulo-seccion">Noticias destacadas</h2>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            className="noticias-swiper"
          >
            {noticias.map((noticia, idx) => (
              <SwiperSlide key={idx}>
                <div className="noticia-card">
                  <img src={noticia.imagen} alt={noticia.titulo} />
                  <div className="contenido">
                    <h3>{noticia.titulo}</h3>
                    <p>{noticia.descripcion}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h2 className="titulo-seccion">Testimonios</h2>
        <div className="testimonios">
          {testimonios.map((t, idx) => (
            <div className="testimonio-card" key={idx}>
              <h4>{t.nombre}</h4>
              <p>"{t.opinion}"</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
