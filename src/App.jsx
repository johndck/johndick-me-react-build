import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Focus from "./pages/currentfocus";
import Shaped from "./pages/shapedby";
import Evidence from "./pages/deliveryevidence";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Evidence" element={<Evidence />} />
        <Route path="/Focus" element={<Focus />} />
        <Route path="/Shaped" element={<Shaped />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
