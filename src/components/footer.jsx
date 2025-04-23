import React from "react";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-gray-200 pt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        
        <div>
          <h3 className="text-gray-300 font-bold text-lg mb-3">BeautyShop</h3>
          <p className="text-sm">
            Chuyên cung cấp mỹ phẩm chính hãng, an toàn cho mọi loại da. Giao hàng toàn quốc – Đổi trả dễ dàng.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-400">Liên kết</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Trang chủ</a></li>
            <li><a href="/san-pham" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Sản phẩm</a></li>
            <li><a href="/gioi-thieu" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Giới thiệu</a></li>
            <li><a href="/lien-he" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-400">Hỗ trợ</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/chinh-sach" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Chính sách bảo hành</a></li>
            <li><a href="/van-chuyen" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Chính sách vận chuyển</a></li>
            <li><a href="/doi-tra" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Đổi trả & Hoàn tiền</a></li>
            <li><a href="/faqs" className="hover:text-gray-300 transition-all duration-300 ease-in-out">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-gray-400">Liên hệ</h4>
          <ul className="text-sm space-y-2">
            <li>📍 123 Nguyễn Trãi, Hà Nội</li>
            <li>📞 0901 234 567</li>
            <li>✉️ support@beautyshop.vn</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-sm py-4 text-gray-400">
        © {new Date().getFullYear()} BeautyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;