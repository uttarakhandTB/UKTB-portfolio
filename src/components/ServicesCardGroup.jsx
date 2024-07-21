// src/CardGroup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPaintBrush, faShoppingCart, faPenNib, faChartLine, faBullhorn, faPencilAlt, faNewspaper, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const ServicesCardGroup = () => {
  const allCards = [
    { id: 1, icon: faPaintBrush, title: 'Web Design', description: 'Professional web design services.', link: '#' },
    { id: 2, icon: faLaptopCode, title: 'Web Development', description: 'Custom web development solutions.', link: '#' },
    { id: 3, icon: faShoppingCart, title: 'E-commerce', description: 'Complete e-commerce platforms.', link: '#' },
    { id: 4, icon: faPenNib, title: 'Logo Design', description: 'Creative logo design services.', link: '#' },
    { id: 5, icon: faChartLine, title: 'SEO Services', description: 'Analytics and charting solutions.', link: '#' },
    { id: 6, icon: faBullhorn, title: 'Advertisement', description: 'Effective advertisement campaigns.', link: '#' },
    { id: 7, icon: faPencilAlt, title: 'Content Writing', description: 'High-quality content writing.', link: '#' },
    { id: 8, icon: faNewspaper, title: 'Newspaper', description: 'Latest news and updates.', link: '#' },
    { id: 9, icon: faBriefcase, title: 'Business Listing', description: 'Business listing and directories.', link: '#' },
    // Add more cards as needed
  ];

  const [visibleCards, setVisibleCards] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
     if (showMore) {
      
      setVisibleCards(visibleCards.length);

    }
    else {
      setVisibleCards(3);
    }
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {allCards.slice(0, visibleCards).map(card => (
          <div key={card.id} className=" bg-white p-4 border rounded shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center">
            <FontAwesomeIcon icon={card.icon} className="text-gray-800 text-5xl mb-2" />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="mb-4 text-center">{card.description}</p>
            <a 
              href={card.link} 
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 hover:no-underline"
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
