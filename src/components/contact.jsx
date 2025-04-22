import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Section */}
            <div 
                data-aos="fade-up"
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Liên Hệ Với Chúng Tôi</h1>
                <p className="text-lg text-gray-600">Chúng tôi rất mong được nghe từ bạn. Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi sớm nhất có thể.</p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Contact Information */}
                <div 
                    data-aos="fade-right"
                    className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4 group">
                            <FaMapMarkerAlt className="text-pink-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Địa Chỉ</h3>
                                <p className="text-gray-600">123 Đường Mỹ Phẩm, Quận 1, TP.HCM</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 group">
                            <FaPhone className="text-pink-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Số Điện Thoại</h3>
                                <p className="text-gray-600">+84 123 456 789</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 group">
                            <FaEnvelope className="text-pink-500 text-2xl mt-1 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">info@myphamdep.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-8">
                        <a 
                            href="#" 
                            className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-110 transform duration-300"
                        >
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-110 transform duration-300"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-600 hover:text-pink-500 transition-colors hover:scale-110 transform duration-300"
                        >
                            <FaTwitter className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div 
                    data-aos="fade-left"
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Họ và tên của bạn"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email của bạn"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Tiêu đề"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Nội dung tin nhắn"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent h-40 transition-all duration-300"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors duration-300 hover:scale-105 transform"
                        >
                            Gửi Tin Nhắn
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div 
                data-aos="fade-up"
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424188181344!2d106.6999929!3d10.7775836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f46de64c1c7%3A0x7f0f0f0f0f0f0f0f!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1648123456789!5m2!1sen!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
