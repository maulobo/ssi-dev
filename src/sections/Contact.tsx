import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

const contactGroups = [
  {
    label: "Comercial",
    title: "Consultas y cotizaciones",
    email: "compras@ssisrl.com.ar",
    phone: "+54 9 2996 28-6151",
    phoneHref: "tel:+5492996286151",
  },
  {
    label: "Catering",
    title: "Servicios gastronómicos",
    email: "catering@ssisrl.com.ar",
    phone: "+54 9 2994 10-1495",
    phoneHref: "tel:+5492994101495",
  },
];

export const Contact = () => {
  return (
    <Section
      id="contacto"
      className="bg-corporate-red text-white"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
              Contacto
            </span>
            <h2 className="mb-5 text-4xl font-bold md:text-6xl">
              Hablemos de tu proyecto
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              Nuestro equipo acompaña proyectos de módulos habitacionales,
              servicios integrales y catering con propuestas a medida y
              respuesta ágil.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {contactGroups.map((group) => (
              <article
                key={group.label}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-sm transition-colors duration-200 hover:bg-white/14"
              >
                <span className="mb-6 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-corporate-red">
                  {group.label}
                </span>

                <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">
                  {group.title}
                </h3>

                <div className="space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                      Email
                    </span>
                    <a
                      href={`mailto:${group.email}`}
                      className="text-lg font-medium text-white transition-opacity hover:opacity-80"
                    >
                      {group.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                      Teléfono
                    </span>
                    <a
                      href={group.phoneHref}
                      className="text-lg font-medium text-white transition-opacity hover:opacity-80"
                    >
                      {group.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/15 bg-black/10 px-6 py-5 text-center text-sm leading-relaxed text-white/70 md:px-8 md:text-base">
            También coordinamos fabricaci&oacute;n, alquiler, transporte,
            log&iacute;stica y catering dentro de propuestas llave en mano para
            operaciones en campo y zonas industriales.
          </div>
        </div>
      </Container>
    </Section>
  );
};
