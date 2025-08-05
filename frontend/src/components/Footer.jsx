import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 sm:gap-14 text-sm text-gray-700">
          
          {/* Logo & Description */}
          <div>
            <img src={assets.logo} className="mb-4 w-24" alt="Logo" />
            <p className="w-full md:w-2/3 text-gray-600">
              Elevate your style with ForeverYou – bringing you the latest trends with comfort and elegance.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-lg font-semibold mb-4 text-gray-800">Company</p>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-gray-900 cursor-pointer transition">Home</li>
              <li className="hover:text-gray-900 cursor-pointer transition">About Us</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Delivery</li>
              <li className="hover:text-gray-900 cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</p>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-gray-900 cursor-pointer transition">+91-212-456-7890</li>
              <li className="hover:text-gray-900 cursor-pointer transition">connect@foreveryou.com</li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-2 mt-4">
              <img src={assets.facebook_icon} className="w-10 cursor-pointer hover:opacity-80" alt="Facebook" />
              <img src={assets.Instagram_icon} className="w-10 cursor-pointer hover:opacity-80" alt="Instagram" />
              <img src={assets.twitter_icon} className="w-10 cursor-pointer rounded-md hover:opacity-80" alt="Twitter" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-600 text-xs mt-20">
          © {new Date().getFullYear()} ForeverYou. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
