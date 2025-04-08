import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 px-4">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-pink-200">
        <h2 className="text-3xl font-extrabold text-pink-700 text-center mb-8 font-[cursive] tracking-wide">
          Chào mừng trở lại ✨
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Đăng nhập
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">hoặc</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center py-2 border rounded-lg hover:bg-gray-100 transition">
            <FcGoogle className="text-xl mr-2" />
            Google
          </button>
          <button className="flex items-center justify-center py-2 border rounded-lg hover:bg-blue-100 transition text-blue-600">
            <FaFacebookF className="text-lg mr-2" />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Bạn chưa có tài khoản?{" "}
          <a
            href="/register"
            className="text-pink-600 font-medium hover:underline"
          >
            Đăng ký ngay
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
