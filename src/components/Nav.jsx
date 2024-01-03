import { BsTerminalFill, BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


import "../styles/Nav.css"


export const Nav = () => {
    return (
        <>
            <nav className="nav">
                <i className="logo"><BsTerminalFill /></i>
                <div className="buscar">
                    <input className="input" type="text" name="name" id="name" placeholder="Buscar..." />
                    <button className="btn-buscar" type="button"><IoIosSearch /></button>
                </div>
                <ul className="lista">
                    <li className="lista-item"><BsFillPersonFill /></li>
                    <li className="lista-item"><BsFillHeartFill /></li>
                    <li className="lista-item"><FaShoppingCart /></li>
                </ul>
            </nav>
            <nav className="categorias">
                <ul className="categorias-items">
                    <li className="categorias-item">Categorias</li>
                    <li className="categorias-item">Hombre</li>
                    <li className="categorias-item">Mujer</li>
                    <li className="categorias-item">Marcas</li>
                    <li className="categorias-item">Zapatillas</li>
                </ul>
            </nav>
        </>
    )
}