import React, { useEffect, useRef, useState } from "react";
import "./services-grid-new.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const ServicesGridNew = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "CATERING",
      subtitle: "Servicios de alimentación",
      description:
        "Servicios integrales de catering para campamentos petroleros y bases operativas",
      image: "/images/catering.jpg",
      icon: "🍽️",
      features: [
        "Comidas balanceadas",
        "Servicio 24/7",
        "Normas de higiene",
        "Personal capacitado",
      ],
    },
    {
      id: 2,
      title: "TRANSPORTE",
      subtitle: "Logística especializada",
      description:
        "Transporte seguro de personal y equipos en zonas de difícil acceso",
      image: "/images/transporte.jpeg",
      icon: "🚛",
      features: [
        "Vehículos 4x4",
        "Conductores certificados",
        "GPS tracking",
        "Mantenimiento preventivo",
      ],
    },
    {
      id: 3,
      title: "MÓDULOS HABITACIONALES",
      subtitle: "Alojamiento temporal",
      description:
        "Trailers y módulos equipados para alojamiento en sitios remotos",
      image: "/images/trailer-uno.png",
      icon: "🏠",
      features: ["Climatización", "Baños privados", "WiFi", "Cocina equipada"],
    },
    {
      id: 4,
      title: "INSUMOS PETROLEROS",
      subtitle: "Suministros especializados",
      description:
        "Venta y alquiler de equipos e insumos para la industria petrolera",
      image: "/images/base-integral.png",
      icon: "⚙️",
      features: [
        "Equipos certificados",
        "Stock permanente",
        "Entrega rápida",
        "Soporte técnico",
      ],
    },
  ];

  let { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del título
    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animación de las cards
    gsap.fromTo(
      gridRef.current.children,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="services-grid-new">
      <div className="services-container">
        <motion.div ref={titleRef} className="services-header">
          <span className="services-subtitle">NUESTROS SERVICIOS</span>
          <h2>Soluciones integrales para</h2>
          <h2>la industria petrolera</h2>
        </motion.div>

        <div ref={gridRef} className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${
                hoveredService === service.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                y:
                  index % 2 === 0
                    ? y
                    : useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]),
              }}
            >
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="service-overlay"></div>
                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="service-content">
                <div className="service-header-card">
                  <h3>{service.title}</h3>
                  <span className="service-subtitle-card">
                    {service.subtitle}
                  </span>
                </div>

                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="service-cta">
                  <span>Conocer más</span>
                  <div className="cta-arrow">→</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="services-background">
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default ServicesGridNew;
