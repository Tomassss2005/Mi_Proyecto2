import React from "react";
import Inicio from "./inicio";
import Footer from "./footer";



function CalidadPiel() {

    return (
        <div className="div-nosotros">
            <Inicio />
            <div className="tratamientos-container">
                <div className="container-descripcion-piel">
                    <h2 className="h2-tratamientos">Calidad de piel</h2>
                    <img className="img-piel" src="/calidad-de-piel.jpg" alt="Imagen de persona piel" />
                    <p className="p-tratamientos">
                        En la piel existen diversos elementos que influyen en su calidad, textura y visualización, los principales son: ácido hialurónico, elastina y colágeno. En las pieles jóvenes y saludables, hay cantidades suficientes de estos elementos. Con el tiempo, o debido a factores externos (estrés, dieta poco saludable, jabones agresivos, exposición solar, sedentarismo, tabaquismo, etc.), las cantidades de ácido hialurónico, elastina y colágeno disminuyen, y además, la calidad de estos componentes se verá afectada en cantidad y calidad. La calidad de la piel se va deteriorando.
                        Se pueden observar pieles secas, ásperas, gruesas, porosas, sin luminosidad, y sin firmeza y elasticidad.
                        A través de un diagnóstico médico y tratamientos personalizados, se trabajan esas características no deseadas, y se incorporan sustancias activas esenciales para la reproducción el desarrollo y crecimiento de las células de la piel que producen colágeno, elastina, y ácido hialurónico. De esta forma se logran resultados en la piel como la mejoría en la firmeza, en la estructura, en el brillo y en la textura, renovando su aspecto y funcionalidad para una piel sana y de buen aspecto.
                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-piel">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Hidratación y elasticidad.</li>
                        <li className="li-tratamientos">Reducción de la inflamación.</li>
                        <li className="li-tratamientos">Mejora de las cicatrizaciónes.</li>
                        <li className="li-tratamientos">Estimulación del crecimiento capilar.</li>
                        <li className="li-tratamientos">Luminosidad y tono uniforme.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CalidadPiel;