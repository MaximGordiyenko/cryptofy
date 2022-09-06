import { Route, Routes } from "react-router-dom";
import { Cryptos } from "../pages/cryptos/Cryptos";
import { Navigation } from "./Navigation/Navigation";
import { SP500 } from "../pages/stocks/SP500";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Cryptos/>}/>
        <Route path="/sp500" element={<SP500/>}/>
        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
        <Route path="/error" element={<p>{}</p>}/>
      </Routes>
    </>
  );
}

export default App;