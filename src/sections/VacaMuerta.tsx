import { useState, useCallback } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";

const CARTO_DARK_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

interface CityMarker {
  id: string;
  name: string;
  description: string;
  longitude: number;
  latitude: number;
  main?: boolean;
}

const CITIES: CityMarker[] = [
  {
    id: "neuquen",
    name: "Neuquén Capital",
    description: "Base de operaciones",
    longitude: -68.07,
    latitude: -38.95,
    main: true,
  },
  {
    id: "anelo",
    name: "Añelo",
    description: "Hub logístico principal",
    longitude: -68.79,
    latitude: -38.35,
  },
  {
    id: "zapala",
    name: "Zapala",
    description: "Centro de distribución",
    longitude: -70.05,
    latitude: -38.9,
  },
  {
    id: "cutralco",
    name: "Cutral Có",
    description: "Zona operativa",
    longitude: -69.23,
    latitude: -38.93,
  },
  {
    id: "rincon",
    name: "Rincón de los Sauces",
    description: "Área Vaca Muerta norte",
    longitude: -68.9,
    latitude: -37.38,
  },
  {
    id: "sanmartin",
    name: "San Martín de los Andes",
    description: "Operaciones sur",
    longitude: -71.35,
    latitude: -40.16,
  },
];

const NeuquenMap = () => {
  const [hoveredCity, setHoveredCity] = useState<CityMarker | null>(null);

  const handleMouseEnter = useCallback((city: CityMarker) => {
    setHoveredCity(city);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCity(null);
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: -68.5,
        latitude: -38.8,
        zoom: 6.5,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={CARTO_DARK_STYLE}
    >
      <NavigationControl position="top-right" />

      {CITIES.map((city) => (
        <Marker
          key={city.id}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="center"
        >
          <div
            onMouseEnter={() => handleMouseEnter(city)}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer"
          >
            {city.main ? (
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-8 w-8 rounded-full bg-corporate-red opacity-20 animate-ping" />
                <span className="absolute inline-flex h-5 w-5 rounded-full bg-corporate-red opacity-30 animate-ping [animation-delay:0.4s]" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-corporate-red border-2 border-white" />
              </div>
            ) : (
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gray-500 border border-gray-300 hover:bg-gray-300 transition-colors" />
            )}
          </div>
        </Marker>
      ))}

      {hoveredCity && (
        <Popup
          longitude={hoveredCity.longitude}
          latitude={hoveredCity.latitude}
          anchor="bottom"
          offset={hoveredCity.main ? 20 : 10}
          closeButton={false}
          closeOnClick={false}
          className="neuquen-popup"
        >
          <div className="bg-gray-800 border border-corporate-red rounded px-3 py-2 min-w-35 animate-fadeIn">
            <p className="text-white font-bold text-sm leading-tight">{hoveredCity.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{hoveredCity.description}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export const VacaMuerta = () => {
  return (
    <Section className="py-24 bg-corporate-dark text-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <span className="block w-20 h-1 bg-corporate-red mb-8"></span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Flota de <br />
                <span className="text-gray-500">Última Generación</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                Cumplimiento estricto de plazos y aseguramiento de la integridad
                de los equipos. Nuestra flota garantiza el traslado seguro y
                eficiente en cada operación.
              </p>
              <ul className="space-y-4 text-gray-400 mb-12">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-corporate-red rounded-full"></div>
                  Unidades Scania equipadas con hidrogrúas y malacates.
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-corporate-red rounded-full"></div>
                  Monitoreo en tiempo real y medidas de seguridad mejoradas.
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-corporate-red rounded-full"></div>
                  Personal técnico especializado con formación continua.
                </li>
              </ul>
              <button className="text-white border-b border-corporate-red pb-1 hover:text-corporate-red transition-colors uppercase text-sm font-bold tracking-widest">
                Conocer más sobre nuestra flota
              </button>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:w-1/2 w-full h-[480px] md:h-[560px] border border-white/5 rounded-xl overflow-hidden bg-[#0a0a0a]">
            <NeuquenMap />
          </div>
        </div>
      </Container>
    </Section>
  );
};
