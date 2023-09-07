import React from "react";
import "../hojas-de-estilo/Comentario.css";

function Comentario() {
  return (
    <div className="contenedor-comentarios">
      <img className="imagen-comentario" 
      src={require("../imgs/img-comentario-carlos.png")} alt="Foto de Carlos">
      </img>
      <div className="contenedor-text-comentario">
        <p className="nombre-pais-comentario">Carlos Duty en Iran</p>
        <p className="cargo-comentario">Ingeniero en pastas</p>
        <p className="texto-comentario">"Fue la mejor de las pastas, fue la peor de las pastas." </p>
      </div>
    </div>
  );
}
export default Comentario;