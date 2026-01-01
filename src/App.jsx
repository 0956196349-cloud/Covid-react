import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Mortandad from "./pages/Mortandad";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/mortandad" element={<Mortandad />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
