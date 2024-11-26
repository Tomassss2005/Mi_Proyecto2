

import React from "react";
import Inicio from "./inicio.jsx";
import Footer from "./footer.jsx";




function ContornoMandibular() {

    return (
        <div className="div-nosotros">
            <Inicio />
            <div className="tratamientos-container">
                <div className="container-descripcion-contorno-mandibular">
                    <h2 className="h2-tratamientos">Contorno mandibular</h2>
                    <img className="img-contorno-mandibular" src="/despues-contorno-mandibular.jpg" alt="Imagen de persona de tratamiento contorno mandibular " />
                    <p className="p-tratamientos">
                        Tanto en la mujer como en el hombre, por distintas causas como el paso del tiempo, los hábitos y la predisposición genética, algunas líneas de la anatomía facial van perdiendo su forma a raíz de la flacidez de la piel, el adelgazamiento, y la debilidad muscular. Una de esas líneas que se cae y se deforma es la línea que recorre el borde inferior de la mandíbula a cada lado de los perfiles del rostro.
                        A través de los bioestilmuladores, como por ejemplo la hidroxiapatita del calcio, se puede reformular, remarcar y colocar en su lugar el contorno mandibular, además de estimular a las propias células a generar nuevo colágeno, elastina y ácido hialuronico que mejora la piel de esa región. Los resultados son excelentes.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-contorno-mandibular">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Mejora la armonización facial.</li>
                        <li className="li-tratamientos">Rejuvenecimiento de la apariencia.</li>
                        <li className="li-tratamientos">Define la línea de la mandíbula.</li>
                        <li className="li-tratamientos">Simetría facial.</li>
                        <li className="li-tratamientos">Mejora los perfiles laterales.</li>
                        <li className="li-tratamientos">Efecto armónico en el rostro completo.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}


export default ContornoMandibular;