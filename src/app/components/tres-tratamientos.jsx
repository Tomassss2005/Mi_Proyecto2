import React from "react";
import Link from "next/link";


function Tratamientos() {
    return (
        <div className="tratamientos-big-container">
            <h1 className="titulo-tratamientos">Algunos de nuestros tratamientos</h1>
            <div className="tratamientos-container">
                <div className="tratamiento">
                    <img className="img-trats" src="/primer-tratamiento.jpg" alt="Tratamiento 1" />
                    <Link href="/plasma-rico-en-plaquetas" className="a-trats">Plasma rico en plaquetas</Link>
                </div>
                <div className="tratamiento">
                    <img className="img-trats" src="/segundo-tratamiento.avif" alt="Tratamiento 2" />
                    <Link href="/peeling-facial" className="a-trats">Peeling facial</Link>
                </div>
                <div className="tratamiento">
                    <img className="img-trats" src="/tercer-tratamiento.jpg" alt="Tratamiento 3" />
                    <Link href="/toxina-botulinica" className="a-trats">Toxina botulínica</Link>
                </div>
            </div>
        </div>
    );
};

export default Tratamientos;