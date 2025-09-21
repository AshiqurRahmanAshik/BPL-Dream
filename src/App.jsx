import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import AllPlayersDetails from "./Components/AllPlayersDetails/AllPlayersDetails";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <AvailablePlayers></AvailablePlayers>
    </div>
  );
}

export default App;
