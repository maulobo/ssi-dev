"use client";
import React, { useEffect, useRef } from "react";
import "./catering-services.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CateringServices = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const services = servicesRef.current;
    const serviceCards = services.querySelectorAll(".service-card");

    gsap.fromTo(
      serviceCards,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: services,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const services = [
    {
      title: "Comedores Industriales",
      description:
        "Gestión completa de comedores para plantas industriales y campamentos petroleros.",
      features: [
        "Capacidad 50-500 personas",
        "Menús rotativos",
        "Servicio buffet o línea",
      ],
    },
    {
      title: "Viandas y Box Lunch",
      description:
        "Soluciones portátiles para equipos de trabajo en campo y turnos especiales.",
      features: [
        "Empaque térmico",
        "Conservación garantizada",
        "Entrega programada",
      ],
    },
    {
      title: "Catering Móvil",
      description:
        "Unidades móviles equipadas para servir en locaciones remotas y campamentos.",
      features: [
        "Cocina móvil completa",
        "Equipos especializados",
        "Cobertura regional",
      ],
    },
    {
      title: "Eventos Corporativos",
      description:
        "Servicios para reuniones, capacitaciones y eventos especiales de la industria.",
      features: ["Coffee breaks", "Almuerzos ejecutivos", "Cenas de gala"],
    },
  ];

  return (
    <div className="catering-services-container">
      <div className="services-header">
        <h2>NUESTROS SERVICIOS</h2>
        <p>Soluciones gastronómicas adaptadas a cada necesidad industrial</p>
      </div>

      <div className="services-grid" ref={servicesRef}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="service-cta">
              <span>Consultar →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="services-bottom">
        <div className="bottom-stats">
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-text">Disponibilidad</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-text">Confiabilidad</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-text">Años experiencia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringServices;
