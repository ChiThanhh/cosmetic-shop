import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import LoginPopup from "../pages/login";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,  
    });
  }, []);
  
  const [showLogin, setShowLogin] = useState(false); 
  return (
    <>
     <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div data-aos="fade-in" className="text-2xl font-bold text-pink-600">
          <a href="/">BeautyShop</a>
        </div>
    
        <nav  data-aos="fade-down" className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-pink-500">Trang chủ</a>
          <a href="/product" className="hover:text-pink-500">Sản phẩm</a>
          <a href="/gioi-thieu" className="hover:text-pink-500">Giới thiệu</a>
          <a href="/lien-he" className="hover:text-pink-500">Liên hệ</a>
        </nav>

        <div data-aos="fade-up" className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Tìm sản phẩm..."
            className="hidden md:block border px-3 py-2 w-96 rounded-lg text-sm focus:outline-pink-500 transition-all duration-300 ease-in-out"
          />
          <a href="/gio-hang" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 hover:text-pink-600" />
            <span className="absolute -top-2 -right-2 text-xs bg-pink-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </a>
          <button
              onClick={() => setShowLogin(true)}
              className="text-xl text-gray-700 hover:text-pink-600"
            >
              <FaUser />
            </button>
        </div>
      </div>
    </header>
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}</>
   
  );
};

export default Header;
