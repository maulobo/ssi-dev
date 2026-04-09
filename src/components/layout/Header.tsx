import { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import logo from "../../assets/logo-ssi.png";

const NAV_ITEMS = [
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Catering",        href: "#catering" },
  { label: "Fabricación",     href: "#fabricacion" },
  { label: "Módulos",         href: "#modulos" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isVisible, setIsVisible]     = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen]       = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled || menuOpen ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="SSI Logo" className="h-10 w-auto object-contain" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-corporate-dark hover:text-corporate-red transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant={isScrolled ? "primary" : "outline"} className="hidden md:inline-flex">
              Contacto
            </Button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              <span
                className={`block h-[2px] w-6 bg-corporate-dark transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-corporate-dark transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-corporate-dark transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 gap-2">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="font-display font-bold text-corporate-dark border-b border-gray-100 py-5 flex items-center justify-between group transition-colors duration-200 hover:text-corporate-red"
              style={{
                fontSize: "clamp(1.5rem, 7vw, 2.5rem)",
                transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.35s ease ${i * 40}ms, opacity 0.35s ease ${i * 40}ms, color 0.2s`,
              }}
            >
              {item.label}
              <span className="text-corporate-red text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ))}

          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-8 bg-corporate-red text-white font-bold text-center py-4 rounded-full text-lg tracking-wide"
            style={{
              transitionDelay: menuOpen ? `${NAV_ITEMS.length * 40}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transition: `transform 0.35s ease ${NAV_ITEMS.length * 40}ms, opacity 0.35s ease ${NAV_ITEMS.length * 40}ms`,
            }}
          >
            Contacto
          </a>
        </div>
      </div>
    </>
  );
};
