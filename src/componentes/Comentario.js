import React from "react";
import "../hojas-de-estilo/Comentario.css";

function Comentario(props) {
  return (
    <div className="contenedor-comentarios">
      <img className="imagen-comentario" 
      src={require(`../imgs/img-comentario-${props.imagen}.png`)} alt="Foto de Personas">
      </img>
      <div className="contenedor-text-comentario">
        <p className="nombre-pais-comentario"><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
        <p className="cargo-comentario">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-comentario">
          {props.comentario.map((segment, index) =>
            segment.isBold ? (
              <strong key={index}>{segment.text}</strong>
            ) : (
              segment.text
            )
          )}
        </p>
      </div>
    </div>
  );
}
export default Comentario;