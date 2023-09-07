
import "./App.css";
import Comentario from "./componentes/Comentario"
import comentarios from "../src/scripts/comentariosData";



function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que opinan nuestros expertos de la comida italiana:</h1>
        {comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            nombre={comentario.nombre}
            pais={comentario.pais}
            imagen={comentario.imagen}
            cargo={comentario.cargo}
            empresa={comentario.empresa}
            comentario={comentario.comentario}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
