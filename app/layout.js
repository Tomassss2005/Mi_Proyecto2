'use client'
import { hydrateRoot } from 'react-dom/client';


export default function RootLayout({ children }) {
  document.addEventListener('DOMContentLoaded', () => {
    const domNode = document.getElementById('root'); // Este es el contenedor donde React se montará
    const reactNode = <App />;
    hydrateRoot(domNode, reactNode); // Hidrata el DOM ya existente
  });
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}