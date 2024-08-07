import React from "react"
import { FaFacebook, FaInstagram, FaLinkedinIn,   FaTwitter, FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { Link } from "react-router-dom"
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
});


const slideInStyles = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(-100px)',
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
});
  return (
    <>
    <animated.div style={slideInStyles}
                ref={ref}>
      <footer className=" mt-auto bg-white   pt-3    bg-[url('src/assets/images/footer-bg.png')] ">
        <div className="mx-20 flex row " >
          <div className="w-[] col-lg-6 col-md-12">
            <div className="flex items-center ">
              <img src="src\assets\images\3.png" className="h-12" alt="" />
              <h1 className="mx-3"><b>NextZenTech</b><br /> the one who builds</h1>

            </div>

            <p className="text-[14px] my-4 font-sans">As a top-rated Best Web Development Company & SEO Company In Kashipur “NextZenTech”, we cater to all your website needs at affordable costs. Known as a reputed web development company in  Faridabad, our team is dedicated to creating visually appealing websites optimized for better user experience & conversions.</p>

            <div className="flex max-[992px]:my-8">
            <FaInstagram className="mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-800 cursor-pointer transtion-all ease-in-out duration-500 "/>
            <FaLinkedinIn className="mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-800 cursor-pointer transtion-all ease-in-out duration-500 "/>
            <FaFacebook className="mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-800 cursor-pointer transtion-all ease-in-out duration-500 "/>
            <FaTwitter className="mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-800 cursor-pointer transtion-all ease-in-out duration-500 "/>
            <FaWhatsapp className="mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-800 cursor-pointer transtion-all ease-in-out duration-500 "/>
            <SiGmail className="mx-2 text-[25px] hover:-translate-y-2 hover:text-blue-800 cursor-pointer transtion-all ease-in-out duration-500 "/>
            </div>
          </div>

            <div className="col-lg-3 col-6">
              <h1 className="text-25px uppercase"><b>Usefull Links</b></h1>
              <div className="flex flex-col my-4">
                
              <Link className="text-blue-500 hover:no-underline hover:text-blue-800 my-2" to='/'>Home</Link>
              <Link className="text-blue-500 hover:no-underline hover:text-blue-800 my-2" to='/about'>About</Link>
              <Link className="text-blue-500 hover:no-underline hover:text-blue-800 my-2" to='/services'>Services</Link>
              <Link className="text-blue-500 hover:no-underline hover:text-blue-800 my-2" to='/blogs'>Our Blogs</Link>
              <Link className="text-blue-500 hover:no-underline hover:text-blue-800 my-2" to='/faqs'>FAQs</Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
                <h1 className="text-25px uppercase "><b>Contact Us</b></h1>
                <p className="my-4">Kashipur, Uttarakhand 24.... <br /><b>Phone :</b> +91............. <br /><b>Email : </b>care@nextzentech.com</p>
            </div>
            <div className="4">

            </div>
          </div>

      </footer>

      <div className=" text-center my-8">
          <h1 className="">© Copyright 2024 <b>NextZenTech</b>. All Rights Reserved</h1>
          <p>Created wtih ❤️</p>
        </div>
    </animated.div>
    </>
    
  )
}
export default Footer