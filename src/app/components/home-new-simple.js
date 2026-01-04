import React, { useEffect, useRef } from "react";
import styles from "./home-new-simple.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import neuquenMapa from "/public/images/pngNeuquen.png";

const HomeNewSimple = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const clients = [
    { name: "YPF", logo: "/images/logos/ypf.png" },
    { name: "Tecpetrol", logo: "/images/logos/tecpetrol.png" },
    { name: "Schlumberger", logo: "/images/logos/schlumberger.png" },
    { name: "Weatherford", logo: "/images/logos/Weatherford.png" },
    { name: "Techint", logo: "/images/logos/techint.png" },
    { name: "Pan American Energy", logo: "/images/logos/pan.png" },
    { name: "Pecom", logo: "/images/logos/pecom.png" },
    { name: "Siderca", logo: "/images/logos/siderca.png" },
  ];

  const services = [
    {
      title: "CATERING",
      description:
        "Servicios integrales de alimentación para campamentos petroleros",
      icon: "🍽️",
    },
    {
      title: "TRANSPORTE",
      description: "Logística especializada para personal y equipos",
      icon: "🚛",
    },
    {
      title: "MÓDULOS",
      description: "Trailers equipados para alojamiento en sitios remotos",
      icon: "🏠",
    },
    {
      title: "PERIFERICOS",
      description: "alquiler de sisternas, generadores y luminarias",
      icon: "⚙️",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animaciones para las cards de servicios
    gsap.fromTo(
      `.${styles.serviceCard}`,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `.${styles.servicesGrid}`,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section ref={heroRef} className={styles.hero}>
        <motion.div className={styles.heroVideo} style={{ y }}>
          <video autoPlay loop muted playsInline>
            <source src="/video/Home.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </motion.div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>
              <span>NEUQUÉN, PATAGONIA</span>
              <div className={styles.heroLine}></div>
            </div>

            <div ref={titleRef} className={styles.heroTitle}>
              <h1>
                <span className={styles.titleMain}>SOTO</span>
                <span className={styles.titleMain}>SERVICIOS INDUSTRIALES</span>
              </h1>
            </div>

            <div className={styles.heroDescription}>
              <p>
                Líderes en servicios especializados para la industria, con más
                de 15 años de experiencia.
              </p>
            </div>
          </div>

          <div className={styles.heroScroll}>
            <div className={styles.scrollIndicator}>
              <span>Descubre más</span>
              <div className={styles.scrollArrow}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <div className={styles.sectionLabel}>
              <span>SERVICIOS ESPECIALIZADOS</span>
              <div className={styles.sectionLine}></div>
            </div>
            <h2>Soluciones integrales para cada necesidad</h2>
            <p>
              Ofrecemos servicios especializados diseñados específicamente para
              la industria petrolera, garantizando calidad, seguridad y
              eficiencia en cada proyecto.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.serviceCard} ${
                  styles[`card${index + 1}`]
                }`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <div className={styles.iconWrapper}>{service.icon}</div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className={styles.cardFeatures}>
                    {index === 0 && (
                      <>
                        <span>• Menús nutritivos balanceados</span>
                        <span>• Cocina móvil especializada</span>
                        <span>• Personal capacitado</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span>• Flota especializada</span>
                        <span>• Conductores certificados</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span>• Equipamiento completo</span>
                        <span>• Instalación rápida</span>
                        <span>• Mantenimiento incluido</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span>• Equipos certificados</span>
                        <span>• Venta y alquiler</span>
                        <span>• Soporte técnico</span>
                      </>
                    )}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button className={styles.cardButton}>
                    Ver más detalles
                    <span className={styles.buttonArrow}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className={styles.companySection}>
        <div className={styles.container}>
          <div className={styles.companyGrid}>
            <div className={styles.companyContent}>
              <span className={styles.subtitle}>NUESTRA EMPRESA</span>
              <h2>Líderes en servicios industriales para la Patagonia</h2>
              <p>
                Somos una compañía de servicios generales con personal
                capacitado siempre a la altura de las circunstancias que se
                presentan. Nuestra visión es ampliar la capacidad y experiencia
                para garantizar la satisfacción del cliente.
              </p>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Años de experiencia</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1000+</span>
                  <span className={styles.statLabel}>
                    Proyectos completados
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.companyVisual}>
              <Image
                src={neuquenMapa}
                alt="Mapa de Neuquén"
                width={400}
                height={300}
                className={styles.mapImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className={styles.clientsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.subtitle}>NUESTROS CLIENTES</span>
            <h2>Confianza construida con líderes de la industria</h2>
          </div>

          <div className={styles.clientsGrid}>
            {clients.map((client, index) => (
              <div key={index} className={styles.clientLogo}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>¿Listo para comenzar tu proyecto?</h2>
              <p>
                Hablemos sobre cómo podemos ayudarte con soluciones
                personalizadas para tu operación industrial.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <div>
                    <h4>Ubicación</h4>
                    <p>Neuquén, Argentina</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <div>
                    <h4>Teléfono</h4>
                    <p>+54 299 XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <form>
                <input type="text" placeholder="Nombre completo" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Mensaje" rows="5"></textarea>
                <button type="submit">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeNewSimple;
