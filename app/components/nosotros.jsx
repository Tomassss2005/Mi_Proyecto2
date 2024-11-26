

import React, { useState, useRef } from "react";
import Footer from "../pages/footer.jsx";
import Link from "next/link";
import styles from "../styles/nosotros.css";


function Nosotros() {

    const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el navbar-toggle
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el menú desplegable de Tratamientos
    const subMenuRef = useRef(null);

    // Alterna la visibilidad del navbar-toggle
    const toggleNavMenu = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Alterna la visibilidad del menú desplegable de Tratamientos
    const toggleDropdown = (e) => {
        e.preventDefault(); // Evita que el link recargue la página
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="div-nosotros">
            <nav className={`navbar ${styles.navbar}}`}>
                <div className={`navbar_header ${styles.navbar_header}}`}>
                    <Link href="/">
                        <img className={`img_nav ${styles.img_nav}}`} src="favicon.ico" alt="Logo médico" />
                    </Link>
                </div>
                <button className={`navbar_toggle ${isNavOpen ? 'open' : ''}`} onClick={toggleNavMenu}>
                    &#9776;
                </button>
                <ul className={`ul_nav ${isNavOpen ? 'open' : ''}`}>
                    <li>
                        <Link href="/" className={`a_nav ${styles.a_nav}}`}>Inicio</Link>
                    </li>
                    <ul className="ul">
                        <Link href="#" className={`a_nav ${styles.a_nav}}`} onClick={toggleDropdown}>
                            Tratamientos <span >&#9662;</span>
                        </Link>
                        <ul ref={subMenuRef} className={`ul_menu ${isDropdownOpen ? 'open' : ''}`}>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/alopecia-androgenica">Alopecia androgénica</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/contorno-mandibular">Contorno mandibular</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/despigmentacion">Despigmentación</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/fillers-con-acido-hialuronico">Fillers con ácido hialurónico</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/intradermoterapia">Intradermoterapia</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/nutricion-calidad-de-piel">Nutrición y calidad de piel</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/peeling-facial">Peeling facial</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/plasma-rico-en-plaquetas">Plasma rico en plaquetas</Link></li>
                            <li className={`li_nav ${styles.li_nav}}`}><Link href="/toxina-botulinica">Toxina botulínica</Link></li>
                        </ul>
                    </ul>
                    <li>
                        <Link href="/nosotros" className={`nosotros ${styles.nosotros}}`}>Acerca de mi</Link>
                    </li>
                    <li>
                        <Link href="/resultados" className={`nosotros ${styles.nosotros}}`}>Resultados</Link>
                    </li>
                    <li>
                        <Link href="/contacto" className={`a_nav ${styles.a_nav}`}>Contáctanos</Link>
                    </li>

                </ul>
            </nav>
            <div className="contenido-nosotros">
                <img className="img-nosotros"
                    src="/doctora.jpg" alt="Imagen de la doctora" />
                <div className="texto-nosotros">
                    <h2 className="h2-nosotros">Dra Erika Romero</h2>
                    <h3 className="h3-nosotros">Sobre Mi</h3>
                    <p className="p-nosotros">Soy una <strong>profesional</strong> comprometida con el cuidado de la salud.
                        <br />
                        <br />
                        En el camino de mi formación de grado y post grado en la <strong>Universidad de Buenos Aires</strong>, en la <strong>Universidad Austral</strong>, y en <strong>Escuela Avicena</strong>, me he desarrollado en áreas de la clínica médica, la medicina estética y reparadora y en la comunicación profesional, para obtener herramientas de transformación para mí y para los pacientes, con el fin de alcanzar con éxito los objetivos planteados en el camino de cada uno.
                        <br />
                        <br /> Mi misión es ofrecer tratamientos que mejoren la calidad de vida de las personas, en un camino donde a través de mi formación continua pueda brindar todo mi conocimiento a favor de las personas.
                        <br />
                        <br />
                        En mi atención se destacan valores como el <strong>cuidado</strong> de la salud de cada persona; el <strong>profesionalismo</strong>en cada tratamiento; la <strong>amabilidad</strong> en cada encuentro; la <strong>escucha activa</strong>, y la <strong>empatía</strong> entre otras.
                    </p>
                    <p className="p-nosotros">Tengo como visión a futuro desarrollar un <strong>Centro de Medicina Clínica Estética y Reparadora</strong> de vanguardia y de referencia regional.</p>
                </div>
            </div>
            <Footer />
        </div >
    )
}


export default Nosotros;