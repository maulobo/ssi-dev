import logo from "../../assets/logo-ssi.png";

export const Footer = () => {
  return (
    <footer className="bg-corporate-dark text-white">
      {/* Main footer */}
      <div className="px-6 md:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="SSI" className="h-12 w-auto object-contain mb-6" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Campamentos y módulos habitacionales llave en mano. Fabricación propia, catering integral y operación 100% garantizada.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                { label: "Certificaciones", href: "#certificaciones" },
                { label: "Catering", href: "#catering" },
                { label: "Fabricación", href: "#fabricacion" },
                { label: "Módulos", href: "#modulos" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-gray-600 mb-1">Comercial</span>
                <a href="mailto:compras@ssisrl.com.ar" className="text-gray-300 text-sm hover:text-white transition-colors">
                  compras@ssisrl.com.ar
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-gray-600 mb-1">Catering</span>
                <a href="mailto:catering@ssisrl.com.ar" className="text-gray-300 text-sm hover:text-white transition-colors">
                  catering@ssisrl.com.ar
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-gray-600 mb-1">Teléfono comercial</span>
                <a href="tel:+5492996286151" className="block text-gray-300 text-sm hover:text-white transition-colors">
                  +54 9 2996 28-6151
                </a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest text-gray-600 mb-1">Teléfono catering</span>
                <a href="tel:+5492994101495" className="block text-gray-300 text-sm hover:text-white transition-colors">
                  +54 9 2994 10-1495
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} SSI SRL. Todos los derechos reservados.</p>
          <p className="text-gray-700">Neuquén, Argentina</p>
        </div>
      </div>
    </footer>
  );
};
