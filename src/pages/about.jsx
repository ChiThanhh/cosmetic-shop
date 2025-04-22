import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Về Chúng Tôi</h1>
          <p className="text-xl text-gray-600">Khám phá câu chuyện đằng sau thương hiệu mỹ phẩm của chúng tôi</p>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-md p-8" data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tầm nhìn của chúng tôi</h2>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi tin rằng mỗi người phụ nữ đều xứng đáng được sử dụng những sản phẩm mỹ phẩm chất lượng cao,
              an toàn và hiệu quả. Mục tiêu của chúng tôi là mang đến cho khách hàng những trải nghiệm làm đẹp tốt nhất.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8" data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lịch sử phát triển</h2>
            <p className="text-gray-600 leading-relaxed">
              Thành lập vào năm 2020, chúng tôi bắt đầu với một cửa hàng nhỏ và niềm đam mê với cái đẹp.
              Qua nhiều năm phát triển, chúng tôi đã mở rộng thành một chuỗi cửa hàng mỹ phẩm uy tín,
              cung cấp đa dạng các sản phẩm từ các thương hiệu nổi tiếng trên thế giới.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8" data-aos="zoom-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cam kết của chúng tôi</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li data-aos="fade-up" data-aos-delay="100">Chất lượng sản phẩm đảm bảo 100% chính hãng</li>
              <li data-aos="fade-up" data-aos-delay="200">Giá cả cạnh tranh và minh bạch</li>
              <li data-aos="fade-up" data-aos-delay="300">Dịch vụ chăm sóc khách hàng tận tâm</li>
              <li data-aos="fade-up" data-aos-delay="400">Đội ngũ tư vấn viên chuyên nghiệp</li>
              <li data-aos="fade-up" data-aos-delay="500">Chính sách đổi trả linh hoạt</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi tự hào có một đội ngũ nhân viên chuyên nghiệp, nhiệt tình và giàu kinh nghiệm
              trong lĩnh vực làm đẹp. Mỗi thành viên đều được đào tạo bài bản để có thể tư vấn
              và hỗ trợ khách hàng một cách tốt nhất.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 