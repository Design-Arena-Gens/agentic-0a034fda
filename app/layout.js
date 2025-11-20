import "./globals.css";

export const metadata = {
  title: "Modelo de Negocio Atomy | Red Comercial y de Reclutamiento",
  description:
    "Plan integral para comercializar productos Atomy y construir una red efectiva mediante campañas de reclutamiento y formación continua.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
