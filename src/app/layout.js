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
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
