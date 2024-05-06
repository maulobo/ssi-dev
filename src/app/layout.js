import Menu from "./components/menu";
import "./globals.scss";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soto Servicios Industriales",
  description:
    "Somos una compañía de servicios dirigidos a satisfacer las necesidades de la actividad industrial y de empresas e instituciones de gran volumen en la región Patagónica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
