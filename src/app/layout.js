'use client';
import { useState, useEffect } from 'react';
import styles from "./styles/layout.css";
import Inicio from "./components/inicio.jsx";
import Footer from "./components/footer.jsx";

const Layout = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={`div_layout ${styles.div_layout}`}>Cargando...</div>;
  }

  return (
    <html lang="es">
      <body>
        <Inicio />
        {children}
        <Footer />
      </body>
    </html>
  )
};

export default Layout;