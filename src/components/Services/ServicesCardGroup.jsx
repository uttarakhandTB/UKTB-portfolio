// src/CardGroup.js
import React, { useState } from 'react';
import { FaLaptopCode, FaPaintBrush, FaShoppingCart, FaPenNib, FaChartLine, FaBullhorn, FaPencilAlt, FaNewspaper, FaBriefcase } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const ServicesCardGroup = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  
  const slideInStyles = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });
  const allCards = [
    { id: 1, icon: FaPaintBrush, title: 'Web Design', description: 'Incorporated the best website designs using high end User Interraction Technologies like Adobe XD, Figma, etc. Launch your own global identity with our experts, who carry great ecperties in web design from scrach to end.', link: '#', bg:'bg-[#9be6c1]' },
    { id: 2, icon: FaLaptopCode, title: 'Web Development', description: 'We are the best web development company in India with highly experienced coders. Our way of working is very cool, and our potential to deliver top-notch websites is commendable. We focus on demanding technologies, frameworks, and tools.', link: '#', bg:'bg-[#ffb1cc]' },
    { id: 3, icon: FaShoppingCart, title: 'E-commerce', description: 'Unlock your online business potential with our expert E-commerce development service we craft seamless digital storefronts tailored to your brand. drive sales, enhance customer experience, and stay ahead in the compititive online marketplace with our tailored solutions.', link: '#', bg:'bg-[#9bc9ff]' },
    { id: 4, icon: FaPenNib, title: 'Logo Design', description: 'Creative logo design services.Our logo design services is for muiltiple industries, such as real estate, education, food, hospitality, financial intitution, information technology, fashion, and many more. We also provide custom logo design services. ', link: '#', bg:'bg-[#c8bbff]' },
    { id: 5, icon: FaChartLine, title: 'SEO Services', description: "Analytics and charting solutions. Boost your online presencewith our SEO Company. We optimize your website to rank heigher on search engines, driving organic trafic and attracting qualified leads. From keyword research to performance tracting. We've got you covered", link: '#', bg:'bg-[#ffdd80]' },
    { id: 6, icon: FaBullhorn, title: 'Advertisement', description: 'Effective advertisement campaigns. We specialize in crafting targeted advertizing compaigns across multiple platforms to drive conversions and increase brand visibility . From compaign setup and optimization to analytical and reporting, we deliver results-driven strategies tailored your business goals. ', link: '#', bg:'bg-[#fec192]' },
    { id: 7, icon: FaPencilAlt, title: 'Content Writing', description: 'High-quality content writing. Implementation of effective digital marcating tactics, allows you to reach new market and trade globally.', link: '#', bg:'bg-[#dcffcc]' },
    { id: 8, icon: FaNewspaper, title: 'Newspaper', description: 'Latest news and updates. PROFESSIONAL WEB DEVELOPMENT COMPANY IN KASHIPUR, NextZenTech  UNDERSTANDS THAT EVERY BUSINESS HAS DIFFERENT NEEDS.', link: '#', bg:'bg-[#fce8ef]' },
    { id: 9, icon: FaBriefcase, title: 'Business Listing', description: 'Business listing and directories. Take your business online and grow worldwide Ahowcase your location and business online woth us.', link: '#', bg:'bg-[#fff1cc]' },
    // Add more cards as needed
  ];

  const [visibleCards, setVisibleCards] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCards(allCards.length);
    } else {
      setVisibleCards(3);
    }
    setShowMore(!showMore);
  };

  return (
    <animated.div
          style={slideInStyles}
          ref={ref} >
    <div className="flex flex-col items-center ">
      <div className="flex flex-wrap justify-center gap-4">
        {allCards.slice(0, visibleCards).map(card => (
          <div key={card.id} className={`group  rounded-2xl  hover:-translate-y-4 transition-all ease-in-out duration-500  p-2  w-full sm:w-full md:w-1/3 lg:w-1/4 flex flex-col items-center shadow-cardShadow `}>
            <card.icon className="rounded-full group-hover:scale-150 transition-all ease-in-out h-[80px] duration-500 text-gray-800 text-5xl  mb-2" />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="mb-4 text-center">{card.description}</p>
            <a 
              href={card.link} 
              className="inline-block px-4 py-2 bg-blue-500 text-white hover:no-underline rounded hover:bg-blue-700"
            >
              Click Here
            </a>
          </div>
        ))}
      </div>
      <button 
        onClick={handleShowMore} 
        className="transition-all delay-150 duration-300 hover:shadow-lg hover:shadow-blue-600 mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {showMore ? 'Show More' : 'Show Less'}
      </button>
    </div>
    </animated.div>
    
  );
};

export default ServicesCardGroup;
