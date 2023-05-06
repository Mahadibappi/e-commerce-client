import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./seenes/home/Home.jsx";
import Navbar from "./seenes/global/Navbar.jsx";
import ItemDetails from "./seenes/itemDetails/ItemDetails.jsx";
import Confirmation from "./seenes/checkout/Confirmation.jsx";
import CheckOut from "./seenes/checkout/CheckOut.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
