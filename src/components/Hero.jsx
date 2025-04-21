// src/components/Hero.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Hero.scss';

import img1 from '../assets/hero1.jpg';
import img2 from '../assets/hero2.jpg';
import img3 from '../assets/hero3.jpg';

const slides = [
  { image: img1, title: 'Bienvenidos a COONADOC' },
  { image: img2, title: 'Soluciones financieras confiables' },
  { image: img3, title: 'Crecemos con nuestra comunidad' },
];

export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="hero__slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h2 className="hero__title">{slide.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
