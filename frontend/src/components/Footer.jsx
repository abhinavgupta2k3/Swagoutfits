import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="my-10 mt-40 text-sm">
      {/* === Grid layout === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-start px-4 sm:px-10 lg:px-24 text-left">
        
        {/* === Left: Logo & About === */}
        <div className="space-y-4">
          <img src={assets.swaglogo} className="w-32" alt="logo" />
          <p className="text-gray-600 md:w-4/5">
            Discover your style with <span className="font-medium text-gray-800">SwagWear</span>.  
            Premium quality apparel designed for comfort, confidence, and creativity.
          </p>
        </div>

        {/* === Center: Get in Touch === */}
        <div className="space-y-4 md:mx-auto">
          <p className="text-xl font-semibold">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              Email:{" "}
              <a href="mailto:support@swagwear.com" className="hover:text-black">
                support@swagwear.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+919876543210" className="hover:text-black">
                +91 98765 43210
              </a>
            </li>
            <li>Address: Chennai, India</li>
          </ul>
        </div>

        {/* === Right: Company Links === */}
        <div className="space-y-4 md:ml-auto">
          <p className="text-xl font-semibold">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* === Bottom copyright === */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-left text-gray-500 text-xs px-4 sm:px-10 lg:px-24">
        © {new Date().getFullYear()} SwagWear. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
