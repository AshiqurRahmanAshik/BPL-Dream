import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Toggle from "./Components/Toggle/Toggle";

function App() {
  const [coin, setCoin] = useState(600000);
  return (
    <div>
      <Navbar coin={coin}></Navbar>
      <Toggle coin={coin} setCoin={setCoin}></Toggle>
    </div>
  );
}

export default App;
