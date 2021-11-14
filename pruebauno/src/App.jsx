import './App.css';
import Hola from './components/Hola';
import Temperatura from './components/temperatura';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App mt-5">
      <Hola></Hola>
      <Temperatura></Temperatura>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
