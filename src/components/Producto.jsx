import { BsFillHeartFill } from "react-icons/bs"



import "../styles/Producto.css";

export const Producto = () => {
  return (
    <div>
      <div className="container-producto">
        <h1 className="titulo">Zapatillas Nike Court Vision Low Next Nature</h1>
        <p className="envio">Envio gratis</p>
        <span className="precio">$36.000</span>
        <p className="cantidad">Cantidad disponible: 6</p>
        <a className="promocion" href="#">Conoce nuestras promociones</a>
        <span className="cuotas">O en hasta 3 cuotas sin interés de $10.666</span>
      </div>
      <div>
        <h4 className="talle">Talle</h4>
        <ul className="talle-numero">
            <li className="talle-numero-item">36</li>
            <li className="talle-numero-item">37</li>
            <li className="talle-numero-item">38</li>
            <li className="talle-numero-item">39</li>
            <li className="talle-numero-item">40</li>
        </ul>
      </div>
      <div>
        <button className="btn-carrito" type="button">Agregar al carrito</button>
        <button className="btn-favorito" type="button"><BsFillHeartFill /></button>
      </div>
    </div>
  );
};
