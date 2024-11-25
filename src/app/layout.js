'use client';
import { useState, useEffect } from 'react';
import styles from "./styles/layout.css";



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

        {children}
        hola

      </body>
    </html>
  )
};

export default Layout;