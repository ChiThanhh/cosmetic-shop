import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Cart from "./components/cart";
import LoginPopup from "./pages/login";
import Product from "./pages/product";
import TopHeader from "./components/top-header";
import Contact from "./components/contact";
import Introduce from "./components/introduce";
import Blog from "./pages/blog";
import About from "./pages/about";
import Detail from "./pages/detail";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopHeader />
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPopup />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/introduce" element={<Introduce />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
