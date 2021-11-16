import './App.css';
import Hola from './components/Hola';
import Temperatura from './components/temperatura';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App mt-5 bttn-2">
      <Hola></Hola>
      {/*<Temperatura></Temperatura>  "Esto es para que no salga
      vamos a continuar con el curso y no se quiere borrar nada."*/}
      <Formulario></Formulario>
    </div>
  );
}

export default App;
