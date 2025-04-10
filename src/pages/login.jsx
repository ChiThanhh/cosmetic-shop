import React, { useEffect, useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const LoginPopup = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isRegister, setIsRegister] = useState(false); 

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleLoginGoogle = () => {
    alert("Google login clicked");
  };

  const handleLoginFacebook = () => {
    alert("Facebook login clicked");
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-black/10 flex justify-end z-50 transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white h-full w-full max-w-full sm:max-w-sm md:max-w-md shadow-lg relative transform transition-transform duration-300 ${
          show && !closing ? "translate-x-0" : "translate-x-full"
        } px-4 sm:px-6 md:px-8 py-6`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
            {isRegister ? "Đăng ký" : "Đăng nhập"}
          </h2>

          <form>
            {isRegister && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-3 text-sm rounded-lg mt-1 focus:outline-pink-500"
                  placeholder="Nhập họ tên của bạn"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full border px-3 py-3 rounded-lg mt-1 text-sm focus:outline-pink-500"
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input
                type="password"
                className="w-full border px-3 py-3 rounded-lg mt-1 text-sm focus:outline-pink-500"
                placeholder="Nhập mật khẩu của bạn"
                required
              />
            </div>

            {isRegister && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nhập lại mật khẩu
                </label>
                <input
                  type="password"
                  className="w-full border px-3 py-3 text-sm rounded-lg mt-1 focus:outline-pink-500"
                  placeholder="Nhập xác nhận mật khẩu"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
            >
              {isRegister ? "Đăng ký" : "Đăng nhập"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-sm text-gray-500">hoặc</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleLoginFacebook}
              className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <FaFacebookF className="text-blue-600" />
              <span>Đăng nhập với Facebook</span>
            </button>

            <button
              onClick={handleLoginGoogle}
              className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-red-500" />
              <span>Đăng nhập với Google</span>
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isRegister ? (
              <>
                Đã có tài khoản?{" "}
                <button
                  onClick={() => setIsRegister(false)}
                  className="text-pink-600 hover:underline"
                >
                  Đăng nhập
                </button>
              </>
            ) : (
              <>
                Chưa có tài khoản?{" "}
                <button
                  onClick={() => setIsRegister(true)}
                  className="text-pink-600 hover:underline"
                >
                  Đăng ký
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
