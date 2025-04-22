import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["Son", "Kem nền", "Sữa rửa mặt", "Phấn phủ", "Tẩy trang", "Kem chống nắng"];

const products = [
  {
    id: 1,
    name: "Son dưỡng môi",
    price: "120.000đ",
    category: "Son",
    image: "https://via.placeholder.com/300x300.png?text=Son+d%C6%B0%E1%BB%A1ng",
  },
  {
    id: 2,
    name: "Kem nền mịn da",
    price: "250.000đ",
    category: "Kem nền",
    image: "https://via.placeholder.com/300x300.png?text=Kem+n%E1%BB%81n",
  },
  {
    id: 3,
    name: "Sữa rửa mặt",
    price: "180.000đ",
    category: "Sữa rửa mặt",
    image: "https://via.placeholder.com/300x300.png?text=S%E1%BB%AFa+r%E1%BB%ADa+m%E1%BA%B7t",
  },
  {
    id: 4,
    name: "Tẩy trang dịu nhẹ",
    price: "150.000đ",
    category: "Tẩy trang",
    image: "https://via.placeholder.com/300x300.png?text=T%E1%BA%A9y+trang",
  },
  {
    id: 5,
    name: "Phấn phủ kiềm dầu",
    price: "220.000đ",
    category: "Phấn phủ",
    image: "https://via.placeholder.com/300x300.png?text=Ph%E1%BA%A5n+ph%E1%BB%A7",
  },
  {
    id: 6,
    name: "Kem chống nắng SPF50+",
    price: "270.000đ",
    category: "Kem chống nắng",
    image: "https://via.placeholder.com/300x300.png?text=Kem+ch%E1%BB%91ng+n%E1%BA%AFng",
  },
  {
    id: 6,
    name: "Kem chống nắng SPF50+",
    price: "270.000đ",
    category: "Kem chống nắng",
    image: "https://via.placeholder.com/300x300.png?text=Kem+ch%E1%BB%91ng+n%E1%BA%AFng",
  },
];

const Product = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Filter products based on search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-600 relative">
          Sản phẩm mỹ phẩm
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-400 rounded-full"></div>
        </h1>

        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              <option value="">Tất cả danh mục</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar menu */}
          <div className="md:col-span-1 bg-white rounded-xl shadow-lg p-6 sticky top-0 h-fit">
            <h2 className="text-2xl font-semibold text-pink-600 mb-6 pb-2 border-b border-pink-100">Danh mục</h2>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left w-full px-4 py-2 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                      selectedCategory === cat
                        ? "bg-pink-500 text-white"
                        : "text-pink-700 hover:text-pink-500 hover:bg-pink-50"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product list */}
          <div className="md:col-span-3">
            {currentProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-pink-600">Không tìm thấy sản phẩm phù hợp</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                          src={product.image}
                          onClick={() => navigate(`/product/${product.id}`)}
                          alt={product.name}
                          className="w-full h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h2 className="text-xl font-semibold text-pink-700 mb-2 group-hover:text-pink-600 transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-pink-500 font-medium text-lg mb-4">{product.price}</p>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                        Thêm vào giỏ
                      </button>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex justify-center">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-pink-200 text-pink-600 hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Trước
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-lg ${
                            currentPage === page
                              ? "bg-pink-500 text-white"
                              : "border border-pink-200 text-pink-600 hover:bg-pink-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-pink-200 text-pink-600 hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Sau
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
