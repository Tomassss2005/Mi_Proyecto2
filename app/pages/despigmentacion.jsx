import React from "react";
import Inicio from "./inicio.jsx";
import Footer from "./footer.jsx";



function Despigmentacion() {

    return (
        <div className="div-nosotros">
            <Inicio />
            <div className="tratamientos-container">
                <div className="container-descripcion-despigmentacion">
                    <h2 className="h2-tratamientos">Despigmentación</h2>
                    <img className="img-despigmentacion" asma rico en Plaquetas src="/despigmentacion.jpg" alt="Imagen de persona despigmentación" />
                    <p className="p-tratamientos">
                        La pigmentación de nuestra piel se produce gracias a los pigmentos, entre los que destacan las melaninas; y estos determinan el color de la misma.
                        Es frecuente en la población en general encontrar la aparición de manchas de diferentes tipos en la piel, muchas veces provocadas por el sol, predisposición de la piel a pigmentarse por distintas enfermedades o exposición a sustancias, y también por el paso del tiempo.
                        Esta pigmentación o manchas le restan belleza, uniformidad y juventud, sobre todo al rostro. La despigmentación es un tratamiento médico estético que mejora el tono de la piel, utilizando peelings médicos y tratamientos tópicos indicados en consultorio y en domicilio, para de esta forma reducir notablemente la variedad de colores y homogeneizar el rostro, o la piel de otras partes del cuerpo.

                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-despigmentacion">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Reducción de manchas oscuras.</li>
                        <li className="li-tratamientos">Piel más uniforme.</li>
                        <li className="li-tratamientos">Luminosidad y claridad.</li>
                        <li className="li-tratamientos">Mejora la textura.</li>
                        <li className="li-tratamientos">Renovación celular de las capas externas de la piel.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Despigmentacion;