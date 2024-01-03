import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";

import ciberMonday from "../assets/img/cybermondaytiendaoficial.png"
import dataFiscal from "../assets/img/datafiscal60x60.png"
import preciosJustos from "../assets/img/preciosjustos.png"

import "../styles/Footer.css"


export const Footer = () => {
    return(
        <div className="container-footer">
            <div>
                <ul className="items">
                    <li><img src={dataFiscal} alt="datafiscal" /></li>
                    <li><img src={preciosJustos} alt="preciosjustos" /></li>
                    <li><img src={ciberMonday} alt="cibermonday" /></li>
                </ul>
            </div>
            <div className="institucional">
                <h4>Institucional</h4>
                <ul className="items">
                    <li clasName="li-item">Quienes somos</li>
                    <li clasName="li-item">Politicas de Privacidad</li>
                    <li clasName="li-item">Protocolos COVID-19</li>
                    <li clasName="li-item">Terminos y Condiciones</li>
                    <li clasName="li-item">Sustentabilidad</li>
                    <li clasName="li-item">Defensa al Consumidar</li>
                </ul>
            </div>
            <div className="ayuda">
                <h4>Ayuda</h4>
                <ul className="items">
                    <li clasName="li-item">Preguntas Frecuentes</li>
                    <li clasName="li-item">¿Como comprar?</li>
                    <li clasName="li-item">¿Como medir tu talle?</li>
                    <li clasName="li-item">Sucursales</li>
                    <li clasName="li-item">Pagos y promociones</li>
                    <li clasName="li-item">Entregas</li>
                </ul>
            </div>
            <div className="redes">
                <h4>Redes</h4>
                <ul className="items">
                    <li clasName="li-item">Twitter</li>
                    <li clasName="li-item">Facebook</li>
                    <li clasName="li-item">Instagram</li>
                </ul>
            </div>
            <div className="atencion">
                <h4>Atencion al cliente</h4>
                <ul className="items">
                    <li clasName="li-item">Lunes a viernes de 9 a 20hs/Sabados 9 a 17hs</li>
                    <li clasName="li-item"><CiMail />Contacto</li>
                    <li clasName="li-item"><FaWhatsapp />Whatsapp</li>
                    <li clasName="li-item"><MdSupportAgent /> 0810-888-3398</li>
                </ul>
                <button type="button">Boton de Arrepentimiento</button>
            </div>
        </div>
    )
}