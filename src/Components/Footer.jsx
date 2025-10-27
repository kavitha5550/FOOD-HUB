import React from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-900 text-gray-300 pt-10 pb-6 w-full">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Food<span className="text-red-500">Hub</span>
          </h2>
          <p className="text-sm leading-6">
            Delivering fresh and delicious meals right at your doorstep.  
            Taste the difference, made with love ❤️
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-400"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-400"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="/menu" className="hover:text-red-400 transition">Menu</a></li>
            <li><a href="/offers" className="hover:text-red-400 transition">Offers</a></li>
            <li><a href="/cart" className="hover:text-red-400 transition">My Cart</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-red-400 transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-red-400 transition">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-red-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-red-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <Phone className="text-red-500" size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-red-500" size={18} />
              <span>support@foodhub.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin className="text-red-500" size={18} />
              <span>Chennai, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-red-400 font-semibold">FoodHub</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
