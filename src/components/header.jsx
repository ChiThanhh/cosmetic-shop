import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-pink-600">
          <a href="/">BeautyShop</a>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-pink-500">Trang chủ</a>
          <a href="/san-pham" className="hover:text-pink-500">Sản phẩm</a>
          <a href="/gioi-thieu" className="hover:text-pink-500">Giới thiệu</a>
          <a href="/lien-he" className="hover:text-pink-500">Liên hệ</a>
        </nav>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Tìm sản phẩm..."
            className="hidden md:block border px-3 py-1 rounded-lg text-sm focus:outline-pink-500"
          />
          <a href="/gio-hang" className="relative">
            <FaShoppingCart className="text-xl text-gray-700 hover:text-pink-600" />
            <span className="absolute -top-2 -right-2 text-xs bg-pink-600 text-white w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </a>
          <a href="/login">
            <FaUser className="text-xl text-gray-700 hover:text-pink-600" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
