import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { useState } from "react";

import Animation from "./components/contents/Animation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/contents/Home";
import Nav from "./components/Nav";
import Calculator from "./components/contents/Calculator";
import ReactComponents from "./components/contents/ReactComponents";
import Todos from "./components/contents/Todos";
function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Nav />
      <main className="flex-grow-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/ReactComponents" element={<ReactComponents />} />
            <Route path="/Todos" element={<Todos />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
