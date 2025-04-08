import React from "react";

const Home = () => {
  return (
    <main className="bg-white text-gray-700">
      {/* Banner */}
      <section className="bg-pink-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-pink-600">
            Mỹ phẩm chính hãng, đẹp tự nhiên
          </h1>
          <p className="mt-4 text-lg">
            Cửa hàng mỹ phẩm uy tín – 100% sản phẩm chính hãng, an toàn cho làn da bạn.
          </p>
          <a
            href="/san-pham"
            className="inline-block mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            Mua ngay
          </a>
        </div>
      </section>

      {/* Danh mục */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-pink-600">
            Danh mục nổi bật
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Trang điểm", "Chăm sóc da", "Nước hoa", "Phụ kiện"].map((cat, idx) => (
              <div key={idx} className="bg-pink-50 p-4 rounded-lg text-center hover:shadow-lg">
                <div className="h-20 bg-gray-200 rounded mb-3" />
                <p className="font-medium">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="py-12 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-pink-600">
            Sản phẩm nổi bật
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border rounded-lg p-4 hover:shadow">
                <div className="h-40 bg-gray-200 rounded mb-3" />
                <h3 className="font-semibold text-base">Sản phẩm {item}</h3>
                <p className="text-pink-600 font-bold mt-1">399.000₫</p>
                <button className="mt-3 w-full py-2 text-sm bg-pink-600 text-white rounded hover:bg-pink-700">
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thông điệp */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold text-pink-600">Vì làn da khỏe mạnh & rạng rỡ</h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          BeautyShop cam kết cung cấp sản phẩm chất lượng cao, nguồn gốc rõ ràng, giúp bạn tự tin tỏa sáng mỗi ngày.
        </p>
      </section>
    </main>
  );
};

export default Home;
