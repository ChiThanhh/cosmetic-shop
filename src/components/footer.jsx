import React from "react";

const Footer = () => {
  return (
    <footer  data-aos="fade-up"  className="bg-pink-50 text-gray-700 pt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        
        <div>
          <h3 className="text-pink-600 font-bold text-lg mb-3">BeautyShop</h3>
          <p className="text-sm">
            Chuyên cung cấp mỹ phẩm chính hãng, an toàn cho mọi loại da. Giao hàng toàn quốc – Đổi trả dễ dàng.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-pink-500">Liên kết</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:text-pink-600">Trang chủ</a></li>
            <li><a href="/san-pham" className="hover:text-pink-600">Sản phẩm</a></li>
            <li><a href="/gioi-thieu" className="hover:text-pink-600">Giới thiệu</a></li>
            <li><a href="/lien-he" className="hover:text-pink-600">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-pink-500">Hỗ trợ</h4>
          <ul className="text-sm space-y-2">
            <li><a href="/chinh-sach" className="hover:text-pink-600">Chính sách bảo hành</a></li>
            <li><a href="/van-chuyen" className="hover:text-pink-600">Chính sách vận chuyển</a></li>
            <li><a href="/doi-tra" className="hover:text-pink-600">Đổi trả & Hoàn tiền</a></li>
            <li><a href="/faqs" className="hover:text-pink-600">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-pink-500">Liên hệ</h4>
          <ul className="text-sm space-y-2">
            <li>📍 123 Nguyễn Trãi, Hà Nội</li>
            <li>📞 0901 234 567</li>
            <li>✉️ support@beautyshop.vn</li>
          </ul>
        </div>
      </div>

      <div className="bg-pink-100 text-center text-sm py-4">
        © {new Date().getFullYear()} BeautyShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
