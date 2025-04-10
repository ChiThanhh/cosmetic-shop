import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";


import LoginPopup from "./pages/login";
import Product from "./pages/product";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPopup />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
