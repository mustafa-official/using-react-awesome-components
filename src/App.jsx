import "./App.css";
import Carts from "./components/Carts/Carts";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Carts></Carts>
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
