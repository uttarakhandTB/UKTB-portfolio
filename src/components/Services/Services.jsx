import React from "react";
import ServicesCardGroup from "./ServicesCardGroup";
import Process from "./Process";
import { Link } from "react-router-dom";
import ServicesTop from "./ServicesTop";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const Services=()=>{
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Spring animation settings
  const slideInStyles = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });
    return(
        <>
        
       <animated.div style={slideInStyles}
          ref={ref}>
       <ServicesTop/>

<div className="Services  p-6">
<header className="App-header bg-white p-8 h-100px">
<h1 className="text-center text-[2rem] font-mono ">Our Services</h1>
<p className='text-center mt-6'>Our web development & SEO strategies are tailored to meet the unique needs of each business. <br /> We offer our innovative services and robust web solutions across various locations.</p>
</header>
<main className="p-4">
<ServicesCardGroup/>
<Process/>
</main>
</div>
       </animated.div>
        </>
    )
}
export default Services;