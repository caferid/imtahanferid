import { useState } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Mainlayout from "./layout/mainlayout";
import Home from "./pages/home";
import Add from "./pages/add";
import Basket from "./pages/basket";
import Wish from "./pages/wish";
import Detail from "./pages/detail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainlayout />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<Add />} />
              <Route path="/wish" element={<Wish />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
