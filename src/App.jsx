import { useState } from "react";
import "./App.css";
import Conversacion from "./Components/Conversacion";
import InicioRegistro from "./Components/InicioRegistro";
import Mensaje from "./Components/Mensaje";

function App() {
   return (
      <div className="App">
         <InicioRegistro></InicioRegistro>
      </div>
   );
}

export default App;
