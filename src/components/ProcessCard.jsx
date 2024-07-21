import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLightbulb, faPencilRuler, faCode, faBug, faCheckCircle, faServer, faLifeRing, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const stages = [
  { icon: faSearch, text: "Discovery" },
  { icon: faLightbulb, text: "Features" },
  { icon: faPencilRuler, text: "Design" },
  { icon: faCode, text: "Development" },
  { icon: faBug, text: "Testing & Feedback" },
  { icon: faCheckCircle, text: "Live" },
  { icon: faServer, text: "Maintenance & Support" }
];

const Card = ({ icon, text }) => (
  <div className="flex flex-col items-center justify-center p-4 border rounded shadow-lg m-2">
    <FontAwesomeIcon icon={icon} size="2x" />
    <p className="mt-2 text-center">{text}</p>
  </div>
);

const ProcessCard = () => {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center justify-center flex-wrap`}>
      {stages.map((stage, index) => (
        <React.Fragment key={index}>
          <Card icon={stage.icon} text={stage.text} />
          {index < stages.length - 1 && (
            <FontAwesomeIcon icon={isVertical ? faArrowDown : faArrowRight} size="2x" className="m-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProcessCard;
