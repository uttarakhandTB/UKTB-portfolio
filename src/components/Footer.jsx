import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import footerImg  from "../assets/images/footer-bg.png";
import logo from "../assets/images/logo.png"
const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const slideInStyles = useSpring({
    transform: inView ? "translateY(0)" : "translateY(-100px)",
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  const backGround = {
    backgroundImage: `url(${footerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <animated.div style={slideInStyles} ref={ref}>
      <footer className="bg-white pt-8 pb-4" style={backGround}>
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} className="h-12" alt="NextZenTech Logo" />
              <h1 className="ml-3 text-xl font-bold">
                NextZenTech
                <br />
                <span className="text-sm font-normal">the one who builds</span>
              </h1>
            </div>
            <p className="text-sm mb-4 font-sans">
              As a top-rated Best Web Development Company & SEO Company In Kashipur “NextZenTech”, we cater to all your
              website needs at affordable costs. Known as a reputed web development company in Faridabad, our team is
              dedicated to creating visually appealing websites optimized for better user experience & conversions.
            </p>
            <div className="flex space-x-4">
              <FaInstagram className="text-xl lg:text-2xl hover:scale-110 hover:text-blue-800 cursor-pointer transition-transform duration-300" />
              <FaLinkedinIn className="text-xl lg:text-2xl hover:scale-110 hover:text-blue-800 cursor-pointer transition-transform duration-300" />
              <FaFacebook className="text-xl lg:text-2xl hover:scale-110 hover:text-blue-800 cursor-pointer transition-transform duration-300" />
              <FaTwitter className="text-xl lg:text-2xl hover:scale-110 hover:text-blue-800 cursor-pointer transition-transform duration-300" />
              <FaWhatsapp className="text-xl lg:text-2xl hover:scale-110 hover:text-blue-800 cursor-pointer transition-transform duration-300" />
              <SiGmail className="text-xl lg:text-2xl hover:scale-110 hover:text-blue-800 cursor-pointer transition-transform duration-300" />
            </div>
          </div>

          <div>
            <h1 className="text-xl uppercase font-bold mb-4">Useful Links</h1>
            <div className="flex flex-col space-y-2">
              <Link className="text-blue-500 hover:text-blue-800 transition-colors" to="/">
                Home
              </Link>
              <Link className="text-blue-500 hover:text-blue-800 transition-colors" to="/about">
                About
              </Link>
              <Link className="text-blue-500 hover:text-blue-800 transition-colors" to="/services">
                Services
              </Link>
              <Link className="text-blue-500 hover:text-blue-800 transition-colors" to="/blogs">
                Our Blogs
              </Link>
              <Link className="text-blue-500 hover:text-blue-800 transition-colors" to="/faqs">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <h1 className="text-xl uppercase font-bold mb-4">Contact Us</h1>
            <p className="text-sm">
              Kashipur, Uttarakhand 24....
              <br />
              <b>Phone:</b> +91.............
              <br />
              <b>Email:</b> care@nextzentech.com
            </p>
          </div>
        </div>
      </footer>

      <div className="bg-blue-50 py-4 text-center">
        <h1 className="text-sm">
          © Copyright 2024 <b>NextZenTech</b>. All Rights Reserved
        </h1>
        <p>Created with ❤️</p>
      </div>
    </animated.div>
  );
};

export default Footer;
