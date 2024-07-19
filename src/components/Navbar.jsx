import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`p-4 sticky top-0 z-50 transition-colors duration-300 bg-gray-800 ${isScrolled? 'bg-gray-800 bg-opacity-50 ':'bg-gray-800'}: `}>
      <div className={`container mx-auto flex justify-between items-center `}>
        <div className="flex content-center items-center text-white text-xl font-bold">
          <img src="src/images/3.png" alt="" className='h-12 bg-transparent opacity-100'/>
          <h1 className="p-3 ">UK-TECH-BUILD</h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center">
          <a href="#" className="text-white px-4 py-2 hover:bg-gray-600 hover:no-underline">Home</a>
          <a href="#" className="text-white px-4 py-2 hover:bg-gray-600 hover:no-underline">About</a>
          <a href="#" className="text-white px-4 py-2 hover:bg-gray-600 hover:no-underline">Services</a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-600 hover:no-underline">Our Blogs</a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-600 hover:no-underline">FAQs</a>
        </div>
      </div>
      <div className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-800 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mb-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-500 hover:no-underline">Home</a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-500 hover:no-underline">About</a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-500 hover:no-underline">Services</a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-500 hover:no-underline">Our Blogs</a>
          <a href="#" className="block text-white px-4 py-2 hover:bg-gray-500 hover:no-underline">FAQs</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
