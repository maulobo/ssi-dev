import Menu from "./components/menu";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SSI",
  description:
    "Somos una compañía de servicios dirigidos a satisfacer las necesidades de la actividad industrial y de empresas e instituciones de gran volumen en la región Patagónica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
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
      </head>
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
