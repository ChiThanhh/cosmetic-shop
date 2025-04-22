import React from 'react';


const Introduce = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-bg.jpg)' }}>
                <div className="container mx-auto px-4 py-32 text-center text-white">
                    <h1 className="text-5xl font-bold mb-5">Chào mừng đến với Cosmetic Shop</h1>
                    <p className="text-2xl">Nơi vẻ đẹp được định nghĩa lại</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-20">
                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center mb-20">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Câu chuyện của chúng tôi</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Cosmetic Shop được thành lập với niềm đam mê mang đến những sản phẩm làm đẹp chất lượng cao,
                            an toàn và hiệu quả cho mọi khách hàng. Chúng tôi tin rằng mỗi người đều xứng đáng được
                            sử dụng những sản phẩm tốt nhất để chăm sóc bản thân.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-96 bg-gray-100 rounded-lg">
                        {/* Add story image here */}
                    </div>
                </div>

                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-center mb-20">
                    <div className="w-full md:w-1/2 order-2 md:order-1 h-96 bg-gray-100 rounded-lg">
                        {/* Add mission image here */}
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0 md:pl-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Sứ mệnh của chúng tôi</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Chúng tôi cam kết mang đến những sản phẩm làm đẹp chất lượng, được kiểm nghiệm kỹ lưỡng
                            và an toàn cho mọi loại da. Mỗi sản phẩm của chúng tôi đều được lựa chọn kỹ càng để
                            đảm bảo hiệu quả và sự hài lòng của khách hàng.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-gray-50 py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Giá trị cốt lõi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Quality Value */}
                            <div className="text-center p-6">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    {/* Add quality icon */}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Chất lượng</h3>
                                <p className="text-gray-600">Sản phẩm chất lượng cao, an toàn và hiệu quả</p>
                            </div>

                            {/* Trust Value */}
                            <div className="text-center p-6">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    {/* Add trust icon */}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Uy tín</h3>
                                <p className="text-gray-600">Cam kết mang đến sự hài lòng cho khách hàng</p>
                            </div>

                            {/* Innovation Value */}
                            <div className="text-center p-6">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                    {/* Add innovation icon */}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Đổi mới</h3>
                                <p className="text-gray-600">Luôn cập nhật xu hướng và công nghệ mới</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;

