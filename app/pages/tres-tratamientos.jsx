import React from "react";
import Link from "next/link";
import styles from "../styles/tres-tratamientos.css";


function Tratamientos() {
    return (
        <div className={`tratamientos_big_container ${styles.tratamientos_big_container}`}>
            <h1 className={`titulo_tratamientos ${styles.titulo_tratamientos}`}>Algunos de nuestros tratamientos</h1>
            <div className={`tratamientos_container ${styles.tratamientos_container}`}>
                <div className={`tratamiento ${styles.tratamiento}`}>
                    <img className={`img_tratamientos ${styles.img_tratamientos}`} src="/primer-tratamiento.jpg" alt="Tratamiento 1" />
                    <Link href="/plasma-rico-en-plaquetas" className={`a_tratamientos ${styles.a_tratamientos}`}>Plasma rico en plaquetas</Link>
                </div>
                <div className={`tratamiento ${styles.tratamiento}`}>
                    <img className={`img_tratamientos ${styles.img_tratamientos}`} src="/segundo-tratamiento.jpg" alt="Tratamiento 2" />
                    <Link href="/peeling-facial" className={`a_tratamientos ${styles.a_tratamientos}`}>Peeling facial</Link>
                </div>
                <div className={`tratamiento ${styles.tratamiento}`}>
                    <img className={`img_tratamientos ${styles.img_tratamientos}`} src="/tercer-tratamiento.jpg" alt="Tratamiento 3" />
                    <Link href="/toxina-botulinica" className={`a_tratamientos ${styles.a_tratamientos}`}>Toxina botulínica</Link>
                </div>
            </div>
        </div>
    );
};

export default Tratamientos;