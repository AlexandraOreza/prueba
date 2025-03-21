import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearNota from "./componentes/CrearNota";
import VerNotas from "./componentes/VerNotas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerNotas />}/>
          <Route path="/crear" element={<CrearNota />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
