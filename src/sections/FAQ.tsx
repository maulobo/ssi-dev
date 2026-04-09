import { useState } from "react";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

const questions = [
  {
    q: "¿Qué servicios de mantenimiento eléctrico ofrecen?",
    a: "Realizamos mantenimiento eléctrico completo, medición de puesta a tierra y control de disyuntores para garantizar la seguridad de todas las instalaciones.",
  },
  {
    q: "¿Ofrecen mantenimiento de grupos electrógenos?",
    a: "Sí, contamos con personal especializado en el mantenimiento preventivo y correctivo de grupos electrógenos de diversas potencias.",
  },
  {
    q: "¿Qué servicios de carpintería y herrería brindan?",
    a: "Ofrecemos servicios integrales de carpintería, herrería y aplicación de poliuretano para el acondicionamiento y reparación de módulos.",
  },
  {
    q: "¿Realizan diseño y relevamiento de campamentos?",
    a: "Sí, realizamos relevamiento completo, diseño de campamentos y renderizados 3D para que el cliente visualice el proyecto antes de su ejecución.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Soporte Técnico Integral
            </h2>
            <p className="text-corporate-grey">
              Servicios de mantenimiento especializados para campamentos.
            </p>
          </div>

          <div className="border-t border-gray-100">
            {questions.map((item, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  className="w-full py-8 flex items-center justify-between text-left group hover:bg-gray-50 px-4 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <h3
                    className={`text-lg md:text-xl font-medium transition-colors ${openIndex === i ? "text-corporate-dark" : "text-gray-500 group-hover:text-corporate-dark"}`}
                  >
                    {item.q}
                  </h3>
                  <span
                    className={`transform transition-transform duration-300 text-corporate-red text-2xl ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="pb-8 pl-4 pr-8 text-corporate-grey leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
