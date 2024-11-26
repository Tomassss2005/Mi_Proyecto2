import React from "react";
import Inicio from "../pages/inicio.jsx";
import Footer from "../pages/footer.jsx";
import styles from "../styles/resultados.css";


function Resultados() {

    return (
        <div>
            <Inicio />
            <div className="container-antes-despues">
                <div>
                    <h1 className="h1-antes-despues">Alopecia androgénica</h1>
                </div>
                <div className="div-h3-tratamientos">
                    <h3 className="h3-antes">Antes</h3>
                    <h3 className="h3-despues">Después</h3>
                </div>
                <div className="container-tratamientos-img">
                    <img className="img-antes" src="antes-alopecia.jpg" alt="Antes del tratamiento" />
                    <img className="img-despues" src="despues-alopecia.jpg" alt="Después del tratamiento" />
                </div>
            </div>
            <div className="container-antes-despues">
                <div>
                    <h1 className="h1-antes-despues">Contorno mandibular</h1>
                </div>
                <div className="div-h3-tratamientos">
                    <h3 className="h3-antes">Antes</h3>
                    <h3 className="h3-despues">Después</h3>
                </div>
                <div className="container-tratamientos-img">
                    <img className="img-antes-contorno-mandibular" src="/antes-contorno-mandibular.jpg" alt="Antes del tratamiento" />
                    <img className="img-despues-contorno-mandibular" src="/despues-contorno-mandibular.jpg" alt="Después del tratamiento" />
                </div>
            </div>
            <div className="container-antes-despues">
                <div>
                    <h1 className="h1-antes-despues">Fillers con ácido hialurónico</h1>
                </div>
                <div className="div-h3-tratamientos">
                    <h3 className="h3-antes">Antes</h3>
                    <h3 className="h3-despues">Después</h3>
                </div>
                <div className="container-tratamientos-img">
                    <img className="img-antes" src="/antes-filler.png" alt="Antes del tratamiento" />
                    <img className="img-despues" src="/despues-filler.png" alt="Después del tratamiento" />
                </div>
            </div>
            <div className="container-antes-despues">
                <div>
                    <h1 className="h1-antes-despues">Labios rusos</h1>
                </div>
                <div className="div-h3-tratamientos">
                    <h3 className="h3-antes">Antes</h3>
                    <h3 className="h3-despues">Después</h3>
                </div>
                <div className="container-tratamientos-img">
                    <img className="img-antes" src="/antes-labios-rusos.jpg" alt="Antes del tratamiento" />
                    <img className="img-despues" src="/despues-labios-rusos.jpg" alt="Después del tratamiento" />
                </div>
            </div>
            <div className="container-antes-despues-2">
                <div>
                    <h1 className="h1-antes-despues">Toxina botulínica</h1>
                </div>
                <div className="div-h3-tratamientos">
                    <h3 className="h3-antes">Antes</h3>
                    <h3 className="h3-despues">Después</h3>
                </div>
                <div className="container-tratamientos-img">
                    <img className="img-antes" src="/antes-toxina-botu.jpg" alt="Antes del tratamiento" />
                    <img className="img-despues" src="/despues-toxina-botu.jpg" alt="Después del tratamiento" />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Resultados;