// src/CardGroup.js
import React, { useState } from 'react';
import { FaLaptopCode, FaPaintBrush, FaShoppingCart, FaPenNib, FaChartLine, FaBullhorn, FaPencilAlt, FaNewspaper, FaBriefcase } from 'react-icons/fa';

const ServicesCardGroup = () => {
  const allCards = [
    { id: 1, icon: FaPaintBrush, title: 'Web Design', description: 'Professional web design services.', link: '#' },
    { id: 2, icon: FaLaptopCode, title: 'Web Development', description: 'Custom web development solutions.', link: '#' },
    { id: 3, icon: FaShoppingCart, title: 'E-commerce', description: 'Complete e-commerce platforms.', link: '#' },
    { id: 4, icon: FaPenNib, title: 'Logo Design', description: 'Creative logo design services.', link: '#' },
    { id: 5, icon: FaChartLine, title: 'SEO Services', description: 'Analytics and charting solutions.', link: '#' },
    { id: 6, icon: FaBullhorn, title: 'Advertisement', description: 'Effective advertisement campaigns.', link: '#' },
    { id: 7, icon: FaPencilAlt, title: 'Content Writing', description: 'High-quality content writing.', link: '#' },
    { id: 8, icon: FaNewspaper, title: 'Newspaper', description: 'Latest news and updates.', link: '#' },
    { id: 9, icon: FaBriefcase, title: 'Business Listing', description: 'Business listing and directories.', link: '#' },
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
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {allCards.slice(0, visibleCards).map(card => (
          <div key={card.id} className="bg-white p-4 border rounded shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
            <card.icon className="text-gray-800 text-5xl mb-2" />
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
  );
};

export default ServicesCardGroup;
