

import React from "react";
import Inicio from "./inicio.jsx";
import Footer from "./footer.jsx";




function Peeling() {

    return (
        <div className="div-nosotros">
            <Inicio />
            <div className="tratamientos-container">
                <div className="container-descripcion-peeling">
                    <h2 className="h2-tratamientos">Peeling facial</h2>
                    <img className="img-peeling" src="/peeling-facial.jpg" alt="Imagen de persona con peeling" height={100} width={100} />
                    <p className="p-tratamientos">
                        El peeling facial es un tratamiento que a través de la combinación de ácidos de diferentes tipos, elegidos según cada paciente, mejora notablemente la textura, las arrugas finas y las capas superficiales de la piel mediante una exfoliación eliminando las células dañadas y envejecidas.
                        Disminuyen el diámetro de los poros, atenúa las manchas y las cicatrices. Es un tratamiento personalizado, ya que cada persona es diferente y así cada peeling elegido para cada una de ellas.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Mejora notablemente la textura de la piel.</li>
                        <li className="li-tratamientos">Reduce las arrugas finas y manchas.</li>
                        <li className="li-tratamientos">Disminuye el diámetro de los poros.</li>
                        <li className="li-tratamientos">Atenúa cicatrices superficiales.</li>
                        <li className="li-tratamientos">Tratamiento personalizado para cada paciente.</li>
                        <li className="li-tratamientos">Despigmentación.</li>
                        <li className="li-tratamientos">Renovación celular.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}


export default Peeling;