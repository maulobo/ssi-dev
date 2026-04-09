import { Container } from "../components/ui/Container";
import img1 from "../assets/modules/12.jpg";

export const ModulesSection = () => {
  return (
    <section
      id="modulos"
      className="h-screen min-h-[700px] w-full flex items-center bg-white overflow-hidden"
    >
      <Container className="h-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 h-full items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            <div className="max-w-md space-y-8">
              {/* Small label */}
              <span className="text-sm font-bold text-[#E30613] uppercase tracking-wider">
                Soluciones Modulares
              </span>

              {/* Main title with highlighted word */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-corporate-dark">
                Alquiler y{" "}
                <span className="font-bold text-[#E30613]">fabricación</span> de
                módulos
              </h2>

              {/* Description */}
              <div className="text-corporate-dark/70 leading-relaxed font-light max-w-sm">
                <p>
                  Ofrecemos soluciones integrales en módulos habitacionales:
                  fabricación, alquiler, transporte, logística y catering, con
                  propuestas llave en mano.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-full min-h-[500px] lg:min-h-full flex items-center justify-center -mr-20">
            <div className="w-full h-full relative overflow-hidden rounded-lg">
              <img
                src={img1}
                alt="Módulo SSI"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-corporate-dark/40 via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span className="text-[10px] uppercase tracking-widest text-white font-bold">
                  Soluciones Modulares
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
