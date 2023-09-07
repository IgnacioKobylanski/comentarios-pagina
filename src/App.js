//import logo from './logo.svg';
import "./App.css";
import Comentario from "./componentes/Comentario"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
       <h1>Esto es lo que opinan nuestros expertos de la comida italiana:</h1>
       <Comentario />
      </div>
    </div>
  );
}

export default App;
