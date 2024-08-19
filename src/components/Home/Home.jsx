import { Link } from 'react-router-dom';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import topImg from "../../assets/images/Web-Design-and-Development.jpg"
const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  
  const slideInStyles = useSpring({
    transform: inView ? 'translateX(0)' : 'translateX(-200px)',
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });
  const imgSpring=useSpring({
    transform: inView ? 'scale(1)' : 'scale(0.2)',
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <>
     
      <div className=" container relative overflow-hidden mb-[8rem]"> 
        <div className="mt-5 flex flex-wrap items-center p-8 bg-blue-70 m-0 relative z-10">
        <animated.div
          style={slideInStyles}
          ref={ref} className="w-full md:w-1/2 flex flex-col items-start text-left md:text-left mb-4 md:mb-0">
          
            <h1 className="text-blue-500 font-nunito text-3xl m d:text-4xl lg:text-5xl mt-4 capitalize">
              <span className="font-mono" id="span"> NextZenTech</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-2 capitalize font-serif">
              The mentor who guides you for Management
            </h2>
            <p className="text-base md:text-lg lg:text-[16px] mt-2 font-sans">
            As a top-rated Best Web Development Company & SEO Company In Kashipur “NextZenTech”, we cater to all your website needs at affordable costs. Known as a reputed web development company in Faridabad, our team is dedicated to creating visually appealing websites optimized for better user experience & conversions.            </p>
            <Link to="/services" className="mt-6">
              <button className="bg-blue-500 text-white rounded-full py-2 px-6 uppercase hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Services
              </button>
            </Link>
          
          </animated.div>
         
         <animated.div style={imgSpring}  className="w-full ml-auto md:w-1/2 h-auto">
         
            <img
              src={topImg}
              className="w-full ml-auto h-[400px]   object-cover  max-[768px]:h-[300px]"
              alt="Front view"
            />
         
         </animated.div>
         </div>

      </div>
    </>
  );
};

export default Home;
