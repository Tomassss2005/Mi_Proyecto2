import Inicio from "./components/inicio.jsx";
import Carrusel from "./components/carrusel.jsx";
import TresTratamientos from "./components/tres-tratamientos.jsx";
import Pacientes from "./components/consejos.jsx";
import Footer from "./components/footer.jsx";


function Home() {

  return (

    <div>
      <Inicio />
      <Carrusel />
      <TresTratamientos />
      <Pacientes />
      <Footer />
    </div>
  );
}


export default Home;