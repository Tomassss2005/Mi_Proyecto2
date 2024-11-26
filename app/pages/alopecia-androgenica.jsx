import React from "react";
import Inicio from "./inicio.jsx";
import Footer from "./footer.jsx";



function Alopecia() {

    return (
        <div className="div-nosotros">
            <Inicio />
            <div className="tratamientos-container">
                <div className="container-descripcion-alopecia">
                    <h2 className="h2-tratamientos">Alopecia androgénica</h2>
                    <img className="img-alopecia" src="/alopecia-androgenica.jpg" alt="Imagen de persona alopecia androgénica" />
                    <p className="p-tratamientos">
                        También llamada calvicie común, se produce por el adelgazamiento y pérdida progresiva y excesiva de cabello, siendo la responsable del 95% de los casos de pérdida del cabello en la población. Afecta principalmente a los varones, pero también a las mujeres.
                        Como causas se destacan dos factores, el genético y el hormonal. El factor hormonal depende fundamentalmente de las hormonas masculinas (testosterona) o andrógenos que actúan sobre los folículos pilosos predispuestos genéticamente a la afección, provocando su miniaturización progresiva hasta ocasionar su atrofia completa y fibrosis.
                        También existen múltiples causas que se suman a esta patología. Una dieta carente de nutrientes esenciales, problemas de tiroides, déficit de hierro, infecciones, estrés, anemia, exceso de cosméticos (tinturas, productos de fijación), son factores que colaboran con la alopecia. Los efectos colaterales de algunos tratamientos también pueden provocar caída del cabello, como la quimioterapia o las radiaciones. Existen dos patrones de afectación, el masculino con pérdida de pelo localizada principalmente en las zonas frontal y parietal que se manifiesta inicialmente por el retraso progresivo de la línea de implantación anterior del pelo, lo que se conoce habitualmente como entradas, con afectación más tardía de la región del vértex o coronilla.
                        En el patrón femenino, la pérdida de cabello es difusa, no se producen zonas de calvicie total y queda respetada la línea de implantación anterior, es decir no existen entradas. El tratamiento médico consta de intradermoterapia capilar (mesoterapia médica), medicamentos vía oral y Plasma Rico en Plaquetas, todos estos activos que estimulan el crecimiento y engrosamiento del cabello, el aumento de nuevos cabellos y aumento de volumen. Es un tratamiento que consta de varias sesiones que se planifican en el tiempo, donde, con constancia la mejoría es posible.

                    </p>
                    <a href="https://wa.me/91137742782" className="btn-agendar">Agendar Cita</a>
                </div>
                <div className="container-beneficios-alopecia">
                    <h3 className="h3-beneficios">Beneficios</h3>
                    <ul className="beneficios-tratamientos">
                        <li className="li-tratamientos">Se detiene la caida patológica del cabello.</li>
                        <li className="li-tratamientos">Estimulación del crecimiento.</li>
                        <li className="li-tratamientos">Engrosamiento del cabello.</li>
                        <li className="li-tratamientos">Mejora de la salud del cuero cabelludo.</li>
                        <li className="li-tratamientos">Aumento del tamaño de los foliculos pilosos.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Alopecia;