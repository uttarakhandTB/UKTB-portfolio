// App.jsx
import React, { useState, useEffect } from 'react';
import { FaSearch, FaLightbulb, FaPencilRuler, FaLaptopCode, FaBug, FaCheckCircle, FaServer, FaArrowRight, FaArrowDown } from 'react-icons/fa';


const stages = [
  { icon: FaSearch, text: "Discovery" },
  { icon: FaLightbulb, text: "Features" },
  { icon: FaPencilRuler, text: "Design" },
  { icon: FaLaptopCode, text: "Development" },
  { icon: FaBug, text: "Testing & Feedback" },
  { icon: FaCheckCircle, text: "Live" },
  { icon: FaServer, text: "Maintenance & Support" }
];

const Card = ({ icon: Icon, text }) => (
  <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-cardShadow my-3">
    <Icon size={32} className="text-blue-500" />
    <p className="mt-2 text-center">{text}</p>
  </div>
);

const ProcessCard = () => {
  const [isVertical, setIsVertical] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center justify-center flex-wrap`}>
      {stages.map((stage, index) => (
        <React.Fragment key={index}>
          <Card icon={stage.icon} text={stage.text} />
          {index < stages.length - 1 && (
            <div className="m-2">
              {isVertical ? <FaArrowDown size={32} className="text-gray-500" /> : <FaArrowRight size={32} className="text-gray-500" />}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProcessCard;
