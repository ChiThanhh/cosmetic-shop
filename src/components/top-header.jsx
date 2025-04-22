import React from "react";
const TopHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-center text-[10px] md:text-xs text-white bg-gradient-to-r from-yellow-600 to-pink-600 py-1 px-2 md:px-0 space-x-2 md:space-x-7">
      <span className="whitespace-nowrap">Freeship 15K mọi đơn hàng</span>
      <span className="hidden sm:inline whitespace-nowrap">Quà Tặng Cho Đơn Từ 499K</span>
      <span className="hidden md:inline whitespace-nowrap">Giao Hàng Nhanh 24H</span>
      <span className="hidden lg:inline whitespace-nowrap">Mua online nhận tại cửa hàng gần nhất logo</span>
    </div>
  );
};
export default TopHeader;
