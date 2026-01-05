import React, { useEffect, useRef, useState } from "react";
import "./contact-section-new.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSectionNew = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  let { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  const contactInfo = [
    {
      title: "UBICACIÓN",
      content: "Neuquén, Argentina",
    },
    {
      title: "TELÉFONO",
      content: "+54 299 XXX-XXXX",
    },
    {
      title: "EMAIL",
      content: "info@sotoservicios.com",
    },
    {
      icon: "🕒",
      title: "HORARIOS",
      content: "24/7 Disponibilidad",
    },
  ];

  const services = [
    "Catering Industrial",
    "Transporte de Personal",
    "Módulos Habitacionales",
    "Insumos Petroleros",
    "Consultoría",
    "Otro",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación del contenido de información
    gsap.fromTo(
      infoRef.current.children,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animación del formulario
    gsap.fromTo(
      formRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="contact-section-new">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-subtitle">CONTACTO</span>
          <h2>¿Listo para comenzar tu proyecto?</h2>
          <p>
            Hablemos sobre cómo podemos ayudarte con soluciones personalizadas
            para tu operación industrial.
          </p>
        </div>

        <div className="contact-grid">
          <motion.div ref={infoRef} className="contact-info" style={{ y }}>
            <div className="info-header">
              <h3>Información de contacto</h3>
              <p>
                Estamos disponibles 24/7 para atender tus consultas y
                emergencias operativas.
              </p>
            </div>

            <div className="info-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Síguenos</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <span>📱</span>
                </a>
                <a href="#" className="social-icon">
                  <span>📧</span>
                </a>
                <a href="#" className="social-icon">
                  <span>🌐</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            className="contact-form-container"
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]),
            }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+54 9 XXX XXX-XXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio de interés</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button type="submit" className="submit-btn">
                <span>Enviar mensaje</span>
                <div className="btn-arrow">→</div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="contact-background">
        <div className="bg-gradient"></div>
      </div>
    </section>
  );
};

export default ContactSectionNew;
