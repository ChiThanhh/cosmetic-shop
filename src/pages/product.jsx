import React from "react";

const categories = ["Son", "Kem nền", "Sữa rửa mặt", "Phấn phủ", "Tẩy trang", "Kem chống nắng"];

const products = [
  {
    id: 1,
    name: "Son dưỡng môi",
    price: "120.000đ",
    image: "https://via.placeholder.com/300x300.png?text=Son+d%C6%B0%E1%BB%A1ng",
  },
  {
    id: 2,
    name: "Kem nền mịn da",
    price: "250.000đ",
    image: "https://via.placeholder.com/300x300.png?text=Kem+n%E1%BB%81n",
  },
  {
    id: 3,
    name: "Sữa rửa mặt",
    price: "180.000đ",
    image: "https://via.placeholder.com/300x300.png?text=S%E1%BB%AFa+r%E1%BB%ADa+m%E1%BA%B7t",
  },
  {
    id: 4,
    name: "Tẩy trang dịu nhẹ",
    price: "150.000đ",
    image: "https://via.placeholder.com/300x300.png?text=T%E1%BA%A9y+trang",
  },
  {
    id: 5,
    name: "Phấn phủ kiềm dầu",
    price: "220.000đ",
    image: "https://via.placeholder.com/300x300.png?text=Ph%E1%BA%A5n+ph%E1%BB%A7",
  },
  {
    id: 6,
    name: "Kem chống nắng SPF50+",
    price: "270.000đ",
    image: "https://via.placeholder.com/300x300.png?text=Kem+ch%E1%BB%91ng+n%E1%BA%AFng",
  },
];

const Product = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">Sản phẩm mỹ phẩm</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar menu */}
        <div className="md:col-span-1 bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Danh mục</h2>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li key={idx}>
                <button className="text-left w-full text-pink-700 hover:text-pink-500 hover:underline">
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product list */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-xl"
              />
              <h2 className="mt-4 text-lg font-semibold text-pink-700">{product.name}</h2>
              <p className="text-pink-500 font-medium">{product.price}</p>
              <button className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
