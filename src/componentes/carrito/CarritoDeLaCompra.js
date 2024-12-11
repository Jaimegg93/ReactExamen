import articulos from "./articulos_navideños.json";
import { useState } from "react";

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  const width = {
    width: "2000px",
  };

  function handleClick(articulo) {
    setCarrito((prevCarrito) => [...prevCarrito, articulo]);
  }

  return (
    <div className="container" style={width}>
      <h2 className="title">Articulos navideños</h2>
      <div className="row d-flex ">
        {articulos.map((articulo) => (
          <div className="card col-lg-3 col-md-6 col-sm-12">
            <div key={articulo.id} className="card-body">
              {articulo.nombre}
            </div>
            <p className="card-body ">
              <span>Precio</span> {articulo.precio}
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClick(articulo)}
            >
              añadir
            </button>
          </div>
        ))}
      </div>
      {/* Botón para abrir el popup */}
      <button
        type="button"
        className="btn btn-secondary mt-4"
        data-bs-toggle="modal"
        data-bs-target="#carritoModal"
      >
        Ver carrito
      </button>
      <div
        className="modal fade"
        id="carritoModal"
        tabIndex="-1"
        aria-labelledby="carritoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="carritoModalLabel">
                Carrito de Compras
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {carrito.length > 0 ? (
                <ul className="list-group">
                  {carrito.map((item, index) => (
                    <li className="list-group-item" key={index}>
                      {item.nombre} - ${item.precio.toFixed(2)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>El carrito está vacío</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Proceder al pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carrito;

/*import articulos from "./articulos_navideños.json";
import { useState } from "react";

function Carrito() {
  const [lista] = useState(articulos);
  const width = {
    width: "700px",
  };

  // Divide los artículos en grupos de 3
  const agruparEnFilas = (array, tamaño) => {
    const filas = [];
    for (let i = 0; i < array.length; i += tamaño) {
      filas.push(array.slice(i, i + tamaño));
    }
    return filas;
  };

  const filas = agruparEnFilas(lista, 3);

  return (
    <div className="container" style={width}>
      <h2 className="card-title">Articulos navideños</h2>
      {filas.map((fila, index) => (
        <div className="row mb-3" key={index}>
          {fila.map((articulo) => (
            <div className="col-md-4" key={articulo.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{articulo.nombre}</h5>
                  <p className="card-text">{articulo.descripcion}</p>
                  <p className="card-text">
                    <strong>Precio:</strong> ${articulo.precio.toFixed(2)}
                  </p>
                  <button type="button" className="btn btn-primary">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Carrito;
 */
