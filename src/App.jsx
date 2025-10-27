import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { useState } from "react";

import Animation from "./components/contents/Animation";
import Home from "./components/contents/Home";
import Calculator from "./components/contents/Calculator";
import ReactComponents from "./components/contents/ReactComponents";
import Todos from "./components/contents/Todos";
import AppLayout from "./components/layouts/AppLayout";

function App() {
  const [menu, setMenu] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout menu={menu} setMenu={setMenu} />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/components" element={<ReactComponents />} />
          <Route path="/Todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
