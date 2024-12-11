import { useState } from "react";
import articulos from "./articulos_navideños.json";
import "./Popup.css"

function Carritto() {
    const [lista, setLista] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    function handleClick(articulo) {
        console.log(lista)
        setLista(() => [...lista, articulo]);
    }

    return (
        <div className="container ">
            <h2>Articulos {"   "}   <button className="btn btn-primary" onClick={togglePopup}>Cesta</button></h2>
            <Popup isOpen={isPopupOpen} onClose={togglePopup}>
                {lista.map((articulo) => (
                    <div key={articulo.id}>{articulo.nombre}</div>
                ))}
            </Popup>
            <ul className="row d-flex ">
                {articulos.map((articulo) => (
                    <li key={articulo.id} className="card col-lg-3 col-md-6 col-sm-12">
                        <h4>{articulo.nombre}</h4>
                        <p>Descripcion: {articulo.descripcion}</p>
                        <p><strong>Precio: {articulo.precio}</strong></p>
                        <button onClick={() => handleClick(articulo)} className="btn btn-primary">Añadir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Popup({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}
export default Carritto;