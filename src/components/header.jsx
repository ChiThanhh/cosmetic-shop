import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div data-aos="fade-in" className="text-2xl font-bold text-pink-600">
            <a href="/">BeautyShop</a>
          </div>
          <div className="hidden md:flex items-center bg-pink-100 px-3 py-3 w-1/3 rounded-4xl text-sm transition-all  hover:border hover:border-pink-500">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="bg-transparent focus:outline-none flex-1"
            />
          </div>

          <div data-aos="fade-up" className="flex items-center gap-4">
            <nav
              data-aos="fade-down"
              className="hidden md:flex gap-6 text-gray-700 font-medium text-sm mr-6"
            >
              <a href="/" className="hover:text-pink-500 transition-all duration-300 ease-in-out">
                Trang chủ
              </a>
              <a href="/about" className="hover:text-pink-500 transition-all duration-300 ease-in-out">
                Về chúng tôi
              </a>
              <a href="/product" className="hover:text-pink-500 transition-all duration-300 ease-in-out">
                Sản phẩm
              </a>
              <a href="/introduce" className="hover:text-pink-500 transition-all duration-300 ease-in-out">
                Giới thiệu
              </a>
              <a href="/contact" className="hover:text-pink-500 transition-all duration-300 ease-in-out">
                Liên hệ
              </a>
              <a href="/blog" className="hover:text-pink-500 transition-all duration-300 ease-in-out">Blog</a>
            </nav>

            <a href="/cart" className="relative">
              <FaShoppingCart className="text-xl text-gray-700 hover:text-pink-600 duration-300 ease-in-out" />
              <span className="absolute -top-2 -right-2 text-xs bg-pink-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </a>
            <button
              onClick={() => setShowLogin(true)}
              className="text-xl text-gray-700 hover:text-pink-600 duration-300 ease-in-out"
            >
              <FaUser /> 
            </button>
            <button 
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden text-xl text-gray-700 hover:text-pink-600 duration-300 ease-in-out"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-pink-600">Menu</h2>
          <button 
            onClick={() => setShowMobileMenu(false)}
            className="text-gray-700 hover:text-pink-600"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="p-4 flex flex-col gap-4">
          <a href="/" className="text-gray-700 hover:text-pink-500 transition-all duration-300 ease-in-out">
            Trang chủ
          </a>
          <a href="/about" className="text-gray-700 hover:text-pink-500 transition-all duration-300 ease-in-out">
            Về chúng tôi
          </a>
          <a href="/product" className="text-gray-700 hover:text-pink-500 transition-all duration-300 ease-in-out">
            Sản phẩm
          </a>
          <a href="/introduce" className="text-gray-700 hover:text-pink-500 transition-all duration-300 ease-in-out">
            Giới thiệu
          </a>
          <a href="/contact" className="text-gray-700 hover:text-pink-500 transition-all duration-300 ease-in-out">
            Liên hệ
          </a>
          <a href="/blog" className="text-gray-700 hover:text-pink-500 transition-all duration-300 ease-in-out">
            Blog
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-opacity-30 z-40"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;
