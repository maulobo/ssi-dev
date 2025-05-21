import Menu from "./components/menu";
import "./globals.scss";

import Script from "next/script";

export const metadata = {
  title: "Soto Servicios Industriales",
  description:
    "Somos una compañía de servicios dirigidos a satisfacer las necesidades de la actividad industrial y de empresas e instituciones de gran volumen en la región Patagónica.",
   scripts: [
    {
      id: 'organization-schema', // Give it a unique ID
      type: 'application/ld+json',
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Soto Servicios Industriales",
          "url": "https://sotosisrl.com",
          "logo": "https://sotosisrl.com/logo.png",
          "description": "Especialistas en trailers armados, catering para empresas, equipamiento petrolero y módulos habitacionales.",
          "telephone": "2994870406",
          "email": "logistica@ssisrl.com.ar",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Neuquén",
            "addressRegion": "Neuquén",
            "postalCode": "8300",
            "addressCountry": "Argentina"
          },
          "sameAs": [
            "https://www.facebook.com/sotoserviciosindustriales",
            "https://www.instagram.com/sotoserviciosindustriales",
            "https://www.linkedin.com/company/sotosisrl"
          ],
          "offers": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Trailers Armados",
                "description": "Trailers personalizados para diversos usos comerciales e industriales.",
                "image": "https://sotosisrl.com/images/trailers.jpg",
                "url": "https://sotosisrl.com/trailers"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Servicios de Catering",
                "description": "Catering profesional para eventos corporativos y obras.",
                "image": "https://sotosisrl.com/images/catering.jpg",
                "url": "https://sotosisrl.com/catering"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Módulos Habitacionales",
                "description": "Módulos habitacionales para proyectos industriales y campamentos.",
                "image": "https://sotosisrl.com/images/modulos.jpg",
                "url": "https://sotosisrl.com/trailers"
              }
            }
          ]
        }),
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Somos una compañía de servicios dirigidos a satisfacer las necesidades de la actividad industrial y de empresas e instituciones de gran volumen en la región Patagónica."
        />
        <title>Soto Servicios Industriales</title>
        {/* Google Analytics script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="_Y6_3j9GnIFgxhcEC4oKpEVtQONgPZ_2LS3TPoDF_HQ"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
