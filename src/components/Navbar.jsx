import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="sticky top-0 z-50 flex transition-colors duration-500 bg-white  h-20 items-center justify-center opacity-95">
      <div className="container flex items-center  justify-between mx-auto">
        <div className="flex items-center justify-center text-xl font-bold text-black">
          <img src={logo} alt="" className="h-16 " />

          <h1 className="p-2">NextZenTech</h1>

        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex items-center bg-blue-100 p-[5px] rounded-full">
          <Link to="/" className="text-blue-500 px-4 py-2 hover:text-blue-800 hover:no-underline rounded-full  transition-all ease-in-out duration-300 hover:bg-blue-100  mx-2">Home</Link>
          <Link to="/about" className="text-blue-500 px-4 py-2  hover:text-blue-800 hover:no-underline rounded-full  transition-all ease-in-out duration-300 hover:bg-blue-100 mx-2">About</Link>
          <Link to="/services" className="text-blue-500 px-4 py-2 hover:text-blue-800 hover:no-underline rounded-full  transition-all ease-in-out duration-300 hover:bg-blue-100   mx-2">Services</Link>
          <Link to="/blogs" className="text-blue-500 px-4 py-2 hover:text-blue-800 hover:no-underline rounded-full  transition-all ease-in-out duration-300 hover:bg-blue-100  mx-2">Our Blogs</Link>
          <Link to="/faqs" className="text-blue-500 px-4 py-2 hover:text-blue-800 hover:no-underline rounded-full  transition-all ease-in-out duration-300 hover:bg-blue-100  mx-2">FAQs</Link>
         
        </div>
        <div className={`lg:hidden fixed top-0 right-0 w-2/4 h-full backdrop-blur-xl bg-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
          <div className="p-4">
            <button onClick={toggleMenu} className="mb-4 text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Link to="/" className="block text-black text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">Home</Link>
            <Link to="/about" className="block text-black text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">About</Link>
            <Link to="/services" className="block text-black text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">Services</Link>
            <Link to="/blogs" className="block text-black text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">Our Blogs</Link>
            <Link to="/faqs" className="block text-black text-[1rem] hover:text-blue-800 px-4 py-2 hover:no-underline">FAQs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
