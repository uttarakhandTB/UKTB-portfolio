import React from "react";
import Card from "./Card";
import { cardData } from "./AboutCard";
import Clients from "./Clients";
import MissionVisiion from "./MissionVision";
import AboutTop from "./AboutTop";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });


    const slideInStyles = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });
    return (
        <>

            <AboutTop />
            <animated.div style={slideInStyles}
                ref={ref}>

                <div className=" p-8 my-10">
                    <div className="bg-white h-[150px] items-center content-center">
                        <h1 className="text-[3rem] text-center   text-blue-500 font-mono max-[768px]:text-[2.5rem]  ">NextZenTech <span className="text-[2rem] text-black max-[768px]:text-[1.5rem]">About Mission And Story</span></h1>
                    </div>
                    <div className="mt-[2rem]  max-[768px]:content-center max-[768px]:items-center p-8 bg-blue-50 row  items-center">
                        <div className="col-md-6 col-12">
                            <img src="src/assets/images/about.jpeg" className=" max-[768px]:h-auto w-auto h-[25rem] w-100  shadow-lg d-block w-100 rounded" alt="..." />
                        </div>

                        <div className="col-md-6 col-12">


                            <h2 className="text-[1.4rem] font-bold font-mono">NextZenTech About Us---</h2><br />
                            <p>NextZenTech, Est. 2024: <br /> At UKTB, our journey began with a clear vision: to bridge the gap between businesses and their digital potential. Since our inception, we've been on a path of constant evolution, driven by a commitment to learning and a relentless pursuit of excellence in SEO, Digital Marketing, and Web Development. <br /><br /> We recognize the transformative power of SEO, the strategic significance of digital marketing, and the essential role of cutting-edge web development in establishing a strong online presence. In today's dynamic digital landscape, we take pride in our ability to innovate, elevate brands, and empower businesses to achieve their digital objectives. <br /><br /> With a team of passionate experts in SEO, digital marketing, and web development, we go beyond delivering solutions; we create digital experiences that resonate and endure-</p>

                        </div>
                    </div>
                </div>
                <div className=" shadow-sm mt-[6rem]  p-4"><h1 className="text-center text-[3rem] font-mono">Our Values</h1>
                    <div className="  flex flex-row flex-wrap items-center justify-around py-5 sm:justify-evenly">



                        {cardData.map((item) => (<Card key={item.id} imgsrc={item.imgsrc} title={item.title} description={item.description} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} bg={item.bg} />))}
                    </div>

                </div>

                <div className="">
                    <MissionVisiion />
                    <div className="mx-[8rem] max-[768px]:mx-3 my-[8rem] h-[400px]" >
                        <h1 className="text-[2rem] text-center font-mono">Our Clients</h1>
                        <Clients />
                    </div>
                </div>
            </animated.div>

        </>
    )
}
export default About;