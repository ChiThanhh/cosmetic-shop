import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample product data
  const product = {
    id: 1,
    name: "Son dưỡng môi cao cấp",
    price: "299.000đ",
    originalPrice: "399.000đ",
    discount: "25%",
    rating: 4.5,
    reviews: 128,
    description: "Son dưỡng môi với công thức đặc biệt giúp dưỡng ẩm và làm mềm môi suốt 24 giờ. Chứa các thành phần tự nhiên như dầu dừa, vitamin E và bơ hạt mỡ.",
    images: [
      "https://via.placeholder.com/600x600.png?text=Son+1",
      "https://via.placeholder.com/600x600.png?text=Son+2",
      "https://via.placeholder.com/600x600.png?text=Son+3",
      "https://via.placeholder.com/600x600.png?text=Son+4"
    ],
    features: [
      "Dưỡng ẩm 24 giờ",
      "Không chứa paraben",
      "Thành phần tự nhiên",
      "Phù hợp mọi loại da"
    ],
    stock: 50
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, Math.min(product.stock, quantity + change)));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                    <FaHeart className="text-pink-600" />
                  </button>
                  <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                    <FaShare className="text-pink-600" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-pink-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-none'} />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviews} đánh giá)</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-pink-600">{product.price}</span>
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                  -{product.discount}
                </span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Đặc điểm nổi bật:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-gray-600 hover:text-pink-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-gray-600 hover:text-pink-600"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600">Còn {product.stock} sản phẩm</span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2">
                  <FaShoppingCart />
                  Thêm vào giỏ
                </button>
                <button className="flex-1 bg-white text-pink-600 py-3 rounded-lg border-2 border-pink-600 hover:bg-pink-50 transition-colors">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
