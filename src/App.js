import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import BDAddress from "./components/BDAddress/BDAddress";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import USAddress from "./components/USAddress/USAddress";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coins" element={<Coins />} />
        <Route path="coins/:coinID" element={<CoinDetail />} />
        <Route path="contact" element={<Contact />}>
          <Route path="BDAddress" element={<BDAddress />} />
          <Route path="USAddress" element={<USAddress />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
