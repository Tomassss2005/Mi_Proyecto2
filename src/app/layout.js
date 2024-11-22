// src/app/layout.js
'use client'; // Marca este archivo como componente cliente
import { useEffect, useState } from 'react';
import './globals.css';



export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Esto se ejecuta solo en el cliente
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Muestra un cargando mientras se monta el cliente
  }

  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}

