import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-16">
      <div className="container mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-4 gap-10 text-sm text-gray-700">

        {/* Logo & Short Description */}
        <div>
          <img src={assets.logo} className="mb-4 w-28" alt="BuyBuddies Logo" />
          <p className="text-gray-600 leading-relaxed">
            BuyBuddies — Bringing you the latest trends with style, comfort, and elegance.
          </p>
        </div>

        {/* Online Shopping */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">ONLINE SHOPPING</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/collection?category=Men"><li className="hover:text-black">Men</li></Link>
            <Link to="/collection?category=Women"><li className="hover:text-black">Women</li></Link>
            <Link to="/collection?category=Kids"><li className="hover:text-black">Kids</li></Link>
            <Link to="/collection"><li className="hover:text-black">All Products</li></Link>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">USEFUL LINKS</h3>
          <ul className="flex flex-col gap-2">
            <Link to="/about"><li className="hover:text-black">About Us</li></Link>
            <Link to="/contact"><li className="hover:text-black">Contact Us</li></Link>
            <Link to="/privacy"><li className="hover:text-black">Privacy Policy</li></Link>
            <Link to="/terms"><li className="hover:text-black">Terms & Conditions</li></Link>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-2">
            <li>+91-212-456-7890</li>
            <li>support@buybuddies.com</li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-300 p-2 rounded-sm hover:bg-gray-400 transition">
              <img src={assets.facebook_icon} className="w-5 h-5" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-300 p-2 rounded-sm hover:bg-gray-400 transition">
              <img src={assets.twitter_icon} className="w-5 h-5" alt="Twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-300 p-2 rounded-sm hover:bg-gray-400 transition">
              <img src={assets.youtube_icon} className="w-5 h-5" alt="YouTube" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-300 p-2 rounded-sm hover:bg-gray-400 transition">
              <img src={assets.Instagram_icon} className="w-5 h-5" alt="Instagram" />
            </a>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BuyBuddies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
