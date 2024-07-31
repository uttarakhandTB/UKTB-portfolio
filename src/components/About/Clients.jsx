import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients=()=>{
    const cards = [
        { id: 1, title: 'Card 1', description: 'This is card 1' },
        { id: 2, title: 'Card 2', description: 'This is card 2' },
        { id: 3, title: 'Card 3', description: 'This is card 3' },
        { id: 4, title: 'Card 4', description: 'This is card 4' },

        // Add more cards as needed
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,  
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,  // screen width at 1024px and below
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,  // screen width at 768px and below
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      };
    
      return (
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="p-2">
              <div className="bg-white rounded-lg shadow-md p-4 h-[150px]">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      );
}
export default Clients;