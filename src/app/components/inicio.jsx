'use client'

import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/inicio.css";


function Navbar() {



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


    const handleClick = () => {
        window.location.href = "/contacto";
    };

    return (
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
                    <Link className={`a_nav ${styles.a_nav}}`} href="#">
                        <span onClick={handleClick} className={`a_nav_contacto ${styles.a_nav_contacto}}`}>Contáctanos</span>
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;