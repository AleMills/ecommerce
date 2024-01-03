import { useState } from "react"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";


import "../styles/Slider.css"


export const Slider = ({ imagenes }) => {

    const [imagenActual, setImagenActual] = useState(0);
    const cantidad = imagenes?.length;

    if(!Array.isArray(imagenes) || cantidad === 0)
    return;

    const siguiente = () => {
        setImagenActual(imagenActual === cantidad - 1 ?
            0 : imagenActual + 1)
    }

    const anterior = () => {
        setImagenActual(imagenActual === 0 ?
            cantidad - 1 : imagenActual - 1)
    }

    


    return(
        <>
            <div className="slider">
                <button onClick={anterior}><FaChevronLeft /></button>
                {imagenes.map((imagen, index) => {
                return( 
                    <div>
                        {imagenActual === index && (<img className="slider-item" key={index} src={imagen} alt="imagen" />) }
                    </div>
                    )
                })}
                <button onClick={siguiente}><FaChevronRight /></button>
            </div>
        </>
    )
}