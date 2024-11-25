'use client'

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/footer.css";

function Footer() {
    return (
        <footer className={`footer ${styles.footer}`}>
            <div className={`footer_container ${styles.footer_container}`}>
                <div className={`footer_column ${styles.footer_column}`}>
                    <h3 className={`footer_h3 ${styles.footer_h3}`}>Enlaces Rápidos</h3>
                    <ul className={`ul_footer ${styles.ul_footer}`}>
                        <li className={`li_footer ${styles.li_footer}`}>
                            <Link className={`a_footer_ul ${styles.a_footer_ul}`} href="/">
                                <FontAwesomeIcon className={`logo_home ${styles.logo_home}`} icon={faHome} size="2x" />Home
                            </Link>
                        </li>
                        <li className={`li_footer ${styles.li_footer}`}>
                            <Link className={`a_footer_ul ${styles.a_footer_ul}`} href="/tres-tratamientos">
                                <FontAwesomeIcon className={`logo_med ${styles.logo_med}`} icon={faStethoscope} size="2x" />Servicios
                            </Link>
                        </li>
                        <li className={`li_footer ${styles.li_footer}`}>
                            <Link className={`a_footer_ul ${styles.a_footer_ul}`} href="https://wa.me/91137742782" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className={`logo_wpp ${styles.logo_wpp}`} icon={faWhatsapp} size="2x" />Turnos
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`footer_column ${styles.footer_column}`}>
                    <h3 className={`footer_h3 ${styles.footer_h3}`}>Contacto</h3>
                    <p className={`footer_p ${styles.footer_p}`}><a href="mailto:erikaromero.salud@gmail.com" className={`a_p_footer ${styles.a_p_footer}`}>EMAIL: erikaromero.salud@gmail.com</a></p>
                    <p className={`footer_p ${styles.footer_p}`}><a href="https://wa.me/+5491137742782" className={`a_p_footer_2 ${styles.a_p_footer_2}`}>TELÉFONO: +54 9 11 3774-2782</a></p>
                    <p className={`footer_p ${styles.footer_p}`}><a href="https://www.google.com/maps/place/Av.Triunvirato+3785,+C1431FDO+CABA" className={`a_p_footer_3 ${styles.a_p_footer_3}`}>DIRECCIÓN: Av.Triunvirato 3785,1°A.</a></p>
                </div>
            </div>
            <p className={`copy_footer ${styles.copy_footer}`}>Todos los derechos reservados <strong>&copy;</strong>{new Date().getFullYear()}</p>
            <hr className={`hr_footer ${styles.hr_footer}`} />
            <Link href="/mi-perfil" className={`mi_perfil ${styles.mi_perfil}`}><strong className={`mi_perfil_nombre ${styles.mi_perfil_nombre}`}>TomDevX</strong> <strong className={`mi_perfil_Tom ${styles.mi_perfi_Tom}`}>by Tomás de la Peña</strong></Link>
        </footer>
    )
}

export default Footer;