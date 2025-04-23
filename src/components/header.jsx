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
      <header className="shadow-sm border-b bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div data-aos="fade-right" data-aos-delay="400" className="text-2xl font-bold text-gray-100">
            <a href="/">BeautyShop</a>
          </div>
          <div data-aos="fade-right" data-aos-delay="200" className="hidden md:flex items-center bg-gray-700 px-3 py-3 w-1/3 rounded-4xl text-sm transition-all duration-300 ease-in-out">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="bg-transparent focus:outline-none flex-1 text-gray-100 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <nav
              className="hidden md:flex gap-6 text-gray-200 font-medium text-sm mr-6"
            >
              <a href="/" data-aos="fade-left" data-aos-delay="0" className="hover:text-gray-400 transition-all duration-300 ease-in-out">
                Trang chủ
              </a>
              <a href="/about" data-aos="fade-left" data-aos-delay="50" className="hover:text-gray-400 transition-all duration-300 ease-in-out">
                Về chúng tôi
              </a>
              <a href="/product" data-aos="fade-left" data-aos-delay="100" className="hover:text-gray-400 transition-all duration-300 ease-in-out">
                Sản phẩm
              </a>
              <a href="/introduce" data-aos="fade-left" data-aos-delay="150" className="hover:text-gray-400 transition-all duration-300 ease-in-out">
                Giới thiệu
              </a>
              <a href="/contact" data-aos="fade-left" data-aos-delay="200" className="hover:text-gray-400 transition-all duration-300 ease-in-out">
                Liên hệ
              </a>
              <a href="/blog" data-aos="fade-left" data-aos-delay="250" className="hover:text-gray-400 transition-all duration-300 ease-in-out">
                Blog
              </a>
            </nav>

            <a data-aos="fade-left" data-aos-delay="300" href="/cart" className="relative">
              <FaShoppingCart className="text-xl text-gray-400 hover:text-gray-200 transition-all duration-300 ease-in-out" />
              <span className="absolute -top-2 -right-2 text-xs bg-gray-200 text-gray-900 w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </a>
            <button
              data-aos="fade-left" data-aos-delay="350"
              onClick={() => setShowLogin(true)}
              className="text-xl text-gray-400 hover:text-gray-200 transition-all duration-300 ease-in-out"
            >
              <FaUser />
            </button>
            <button
              data-aos="fade-left" data-aos-delay="400"
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden text-xl text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-bold text-gray-100">Menu</h2>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="p-4 flex flex-col gap-4">
          <a href="/" className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out">
            Trang chủ
          </a>
          <a href="/about" className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out">
            Về chúng tôi
          </a>
          <a href="/product" className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out">
            Sản phẩm
          </a>
          <a href="/introduce" className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out">
            Giới thiệu
          </a>
          <a href="/contact" className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out">
            Liên hệ
          </a>
          <a href="/blog" className="text-gray-200 hover:text-gray-400 transition-all duration-300 ease-in-out">
            Blog
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Header;  