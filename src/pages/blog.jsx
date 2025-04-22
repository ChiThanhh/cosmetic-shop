import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Bước Chăm Sóc Da Buổi Sáng Hiệu Quả',
      date: '18/04/2024',
      excerpt: 'Khám phá quy trình chăm sóc da buổi sáng đúng cách để có làn da khỏe mạnh và rạng rỡ...',
      image: '/images/blog/skincare-morning.jpg',
      category: 'Chăm sóc da'
    },
    {
      id: 2,
      title: 'Xu Hướng Makeup Mùa Hè 2024',
      date: '17/04/2024',
      excerpt: 'Cập nhật những xu hướng makeup nổi bật nhất cho mùa hè này...',
      image: '/images/blog/summer-makeup.jpg',
      category: 'Makeup'
    },
    {
      id: 3,
      title: 'Bí Quyết Chọn Son Phù Hợp Với Tông Da',
      date: '16/04/2024',
      excerpt: 'Hướng dẫn chi tiết cách chọn màu son phù hợp với từng tông da...',
      image: '/images/blog/lipstick-guide.jpg',
      category: 'Son môi'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Làm Đẹp</h1>
          <p className="text-xl text-gray-600">Khám phá những bí quyết làm đẹp mới nhất từ các chuyên gia</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
            Tất cả
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Chăm sóc da
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Makeup
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Son môi
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            Mẹo làm đẹp
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-600 bg-pink-100 rounded-full mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                  Đọc thêm →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
            3
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog; 