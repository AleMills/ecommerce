import "../styles/Descripcion.css"


export const Descripcion = () => {
  return (
    <div className="informacion">
      <p>
        Inspiradas por y para el básquet y con un look urbano, las Zapatillas
        Nike Court Vision Low Next Nature son tan versátiles que podes usarlas
        en la cancha y en las calles. Las perforaciones de la capellada aportan
        respirabilidad para que te sientas fresco durante más tiempo y sus
        materiales reciclados de alta calidad aportan un look moderno y fácil de
        combinar con todos tus outfits.
      </p>
      <div className="list-container">
        <ul className="list-item">
          <li>
            <span>Género</span>: Mujer
          </li>
          <li>
            <span>Material</span>: Sintético
          </li>
          <li>
            <span>Composición</span>: Capellada: sintético / Suela: goma
          </li>
          <li>
            <span>Ajuste</span>: Con Cordones
          </li>
        </ul>
        <ul className="list-item">
          <li>
            <span>Adecuado para</span>: Todo el día
          </li>
          <li>
            <span>Beneficios</span>: Durabilidad
          </li>
          <li>
            <span>Caña</span>: Baja
          </li>
          <li>
            <span>Definición de tecnología</span>: FOAM - INJECTION PHYLON:
            espuma menos densa y más ligera que brinda suavidad a tus pisadas
          </li>
        </ul>
        {/* <div className="list-container">
          <ul className="list-item">
            <li>
              <span>Importante</span>: El peso del calzado puede variar según el
              número solicitado. Los talles corresponden a numeración de
              Argentina
            </li>
            <li>
              <span>Origen</span>: Importado
            </li>
            <li>
              <span>Marca</span>: Nike
            </li>
          </ul>
          <ul className="list-item">
            <li>
              <span>Garantia</span>: Contra defecto de fabricación
            </li>
            <li>
              <span>Origen</span>: Indonesia
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};
