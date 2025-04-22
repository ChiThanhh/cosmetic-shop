import React, { useState, useEffect } from "react";
import bannerImage from '../assets/banner-my-pham-8.jpg'
import bannerImage2 from '../assets/banner-my-pham-8.jpg';
import { FaSearch, FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date for the sale (example: 7 days from now)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  // Sample data for new sections
  const bestSellingProducts = [
    { id: 1, name: 'Kem dưỡng ẩm', price: '299.000₫', image: bannerImage },
    { id: 2, name: 'Son môi', price: '199.000₫', image: bannerImage2 },
    { id: 3, name: 'Tẩy trang', price: '159.000₫', image: bannerImage },
    { id: 4, name: 'Serum vitamin C', price: '399.000₫', image: bannerImage2 },
  ];

  const brands = [
    { id: 1, name: 'Brand 1', image: bannerImage },
    { id: 2, name: 'Brand 2', image: bannerImage2 },
    { id: 3, name: 'Brand 3', image: bannerImage },
    { id: 4, name: 'Brand 4', image: bannerImage2 },
    { id: 5, name: 'Brand 5', image: bannerImage },
  ];

  const popularSearches = [
    'Kem dưỡng ẩm',
    'Son môi',
    'Serum',
    'Tẩy trang',
    'Mặt nạ',
    'Kem chống nắng',
  ];

  const latestBlogs = [
    { id: 1, title: 'Bí quyết chăm sóc da mùa hè', image: bannerImage },
    { id: 2, title: 'Xu hướng trang điểm 2024', image: bannerImage2 },
    { id: 3, title: 'Cách chọn mỹ phẩm phù hợp', image: bannerImage },
  ];

  return (
    <main className="bg-white text-gray-700">
      {/* Main Banner Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slider Section - Left Side */}
            <div className="md:col-span-2" data-aos="fade-right">
              <div className="relative bg-gray-200 h-[500px] rounded-lg overflow-hidden shadow-lg group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${bannerImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <span className="text-sm font-medium text-pink-300 mb-2" data-aos="fade-up" data-aos-delay="200">
                    Khuyến mãi đặc biệt
                  </span>
                  <h2 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-delay="300">
                    Giảm giá lên đến 50%
                  </h2>
                  <p className="text-lg mb-6 opacity-90" data-aos="fade-up" data-aos-delay="400">
                    Cơ hội mua sắm với giá tốt nhất trong năm
                  </p>
                  <button 
                    className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium w-fit hover:bg-pink-700 transform hover:scale-105 transition-all duration-500 ease-in-out"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>

            {/* Banners Section - Right Side */}
            <div className="space-y-6">
              {/* Top Banner */}
              <div className="relative h-[240px] rounded-lg overflow-hidden shadow-lg group" data-aos="fade-left" data-aos-delay="200">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${bannerImage2})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2" data-aos="fade-up" data-aos-delay="300">
                    Sản phẩm mới
                  </h3>
                  <p className="text-sm opacity-90" data-aos="fade-up" data-aos-delay="400">
                    Khám phá ngay
                  </p>
                </div>
              </div>
              
              {/* Bottom Banner */}
              <div className="relative h-[240px] rounded-lg overflow-hidden shadow-lg group" data-aos="fade-left" data-aos-delay="400">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url(${bannerImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2" data-aos="fade-up" data-aos-delay="300">
                    Chăm sóc da
                  </h3>
                  <p className="text-sm opacity-90" data-aos="fade-up" data-aos-delay="400">
                    Bí quyết làm đẹp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danh mục */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 data-aos="fade-right" className="text-3xl font-bold mb-8 text-pink-600 relative inline-block">
            Danh mục nổi bật
            <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Trang điểm", "Chăm sóc da", "Nước hoa", "Phụ kiện"].map(
              (cat, idx) => (
                <div
                  key={idx}
                  className="bg-pink-50 p-6 rounded-lg text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <div className="h-24 bg-gray-200 rounded-full mb-4 mx-auto w-24" />
                  <p className="font-semibold text-lg text-pink-700">{cat}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sale Products Section */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4 md:mb-0" data-aos="fade-right">
              Sản phẩm khuyến mãi
            </h2>
            <div className="flex items-center space-x-4" data-aos="fade-left">
              <span className="text-sm text-gray-600">Kết thúc sau:</span>
              <div className="flex space-x-2">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-white p-3 rounded-lg text-center min-w-[60px] shadow-md">
                    <div className="text-2xl font-bold text-pink-600">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item, idx) => (
              <div 
                key={item} 
                className="border rounded-lg p-4 hover:shadow-lg bg-white transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="relative group">
                  <div className="h-48 bg-gray-200 rounded mb-3 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out" />
                  </div>
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform group-hover:scale-110 transition-transform duration-500 ease-in-out">
                    -30%
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition-colors duration-500 ease-in-out">
                      <FaHeart className="text-pink-600" />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-pink-600 transition-colors duration-500 ease-in-out">Sản phẩm {item}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <p className="text-red-500 font-bold text-lg group-hover:scale-105 transition-transform duration-500 ease-in-out">279.000₫</p>
                    <p className="text-gray-400 line-through text-sm">399.000₫</p>
                  </div>
                  <button className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transform hover:scale-110 transition-all duration-500 ease-in-out">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 data-aos="fade-right" className="text-3xl font-bold mb-8 text-pink-600">
            Sản phẩm bán chạy
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellingProducts.map((product, idx) => (
              <div 
                key={product.id} 
                className="border rounded-lg p-4 hover:shadow-lg bg-white transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="relative group">
                  <div className="h-48 bg-gray-200 rounded mb-3 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out" />
                  </div>
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out">
                    <FaStar className="text-sm" />
                  </div>
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-pink-600 transition-colors duration-500 ease-in-out">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-pink-600 font-bold text-lg group-hover:scale-105 transition-transform duration-500 ease-in-out">{product.price}</p>
                  <button className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transform hover:scale-110 transition-all duration-500 ease-in-out">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Slider Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 data-aos="fade-right" className="text-3xl font-bold mb-8 text-pink-600">
            Thương hiệu nổi bật
          </h2>
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide" data-aos="fade-up">
            {brands.map((brand, idx) => (
              <div 
                key={brand.id} 
                className="flex-shrink-0 w-48"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="h-40 bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform duration-500 ease-in-out">
                  <div className="h-24 w-24 bg-gray-200 rounded-full transform group-hover:scale-110 transition-transform duration-500 ease-in-out" style={{ backgroundImage: `url(${brand.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
                <p className="text-center mt-3 font-semibold text-gray-700 group-hover:text-pink-600 transition-colors duration-500 ease-in-out">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 data-aos="fade-right" className="text-3xl font-bold mb-8 text-pink-600">
            Tìm kiếm nhiều nhất
          </h2>
          <div className="flex flex-wrap gap-3" data-aos="fade-up">
            {popularSearches.map((search, index) => (
              <div 
                key={index} 
                className="flex items-center bg-gray-100 rounded-full px-4 py-2 hover:bg-pink-100 transform hover:scale-105 transition-all duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <FaSearch className="text-pink-600 mr-2 transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                <span className="text-gray-700 group-hover:text-pink-600 transition-colors duration-500 ease-in-out">{search}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 data-aos="fade-right" className="text-3xl font-bold mb-8 text-pink-600">
            Bài viết mới nhất
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestBlogs.map((blog, idx) => (
              <div 
                key={blog.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="h-56 bg-gray-200 transform hover:scale-105 transition-transform duration-500 ease-in-out" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-500 ease-in-out">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                  <button className="text-pink-600 font-semibold hover:text-pink-700 transform hover:translate-x-2 transition-all duration-500 ease-in-out">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thông điệp */}
      <section data-aos="fade-up" className="py-16 text-center bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            Vì làn da khỏe mạnh & rạng rỡ
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            BeautyShop cam kết cung cấp sản phẩm chất lượng cao, nguồn gốc rõ
            ràng, giúp bạn tự tin tỏa sáng mỗi ngày.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
