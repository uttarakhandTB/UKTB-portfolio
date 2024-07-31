import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingBtn = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 m-6 space-y-4">
      <a 
        href="tel:+917454945875" 
        aria-label="Call us" 
        className="flex items-center justify-center w-14 h-14 bg-white text-green-500 rounded-full shadow-lg hover:bg-blue-100 transition-colors"
      >
        <FaPhoneAlt className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/917454945875" 
        aria-label="WhatsApp us" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-14 h-14 bg-white text-green-500 rounded-full shadow-lg hover:bg-green-200 transition-colors"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingBtn;
