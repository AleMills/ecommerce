import imagen1 from "./assets/img/NI_DH3158-100-1.jpg";
import imagen2 from "./assets/img/NI_DH3158-100-2.jpg";
import imagen3 from "./assets/img/NI_DH3158-100-3.jpg";


import './App.css';


import { Nav } from './components/Nav';
import { Slider } from "./components/Slider";
import { Producto } from "./components/Producto";
import { Descripcion } from "./components/Descripcion";
import { Footer } from "./components/Footer";

function App() {

  const img = [imagen1, imagen2, imagen3];

  return (
    <>
      <Nav />
      <div className="producto">
        {/* <Slider imagenes={img}/> */}
        <Producto />
      </div>
      <div className="descripcion">
          <span>DESCRIPCION</span>
          <Descripcion />
      </div>
      <Footer />
      
    </>
  )
}

export default App
