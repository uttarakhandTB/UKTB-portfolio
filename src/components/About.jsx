import React from "react";
import Card from "./Card";
import { cardData } from "../js/AboutCard";
import Clients from "./Clients";

const About = () => {
    return (
        <>
            <div className="container bg-sky-50 shadow-sm p-8"><h1 className="text-[3rem] text-center my-4  text-blue-500 font-mono">Uk-Tech-Build <span className="text-[2rem] text-black">About Mission And Story</span></h1>
                <div className="mt-[2rem]  max-[768px]:content-center max-[768px]:items-center p-8 bg-blue-70 row  items-center">
                    <div className="col-md-6 col-12">
                        <img src="src/assets/images/about.jpeg" className=" max-[768px]:h-auto w-auto h-[25rem] w-100  shadow-lg d-block w-100 rounded" alt="..." />
                    </div>

                    <div className="col-md-6 col-12">


                        <h2 className="text-[1.4rem] font-bold font-mono"> UKTB About Us---</h2><br />
                        <p>UKTB, Est. 2024: <br /> At UKTB, our journey began with a clear vision: to bridge the gap between businesses and their digital potential. Since our inception, we've been on a path of constant evolution, driven by a commitment to learning and a relentless pursuit of excellence in SEO, Digital Marketing, and Web Development. <br /><br /> We recognize the transformative power of SEO, the strategic significance of digital marketing, and the essential role of cutting-edge web development in establishing a strong online presence. In today's dynamic digital landscape, we take pride in our ability to innovate, elevate brands, and empower businesses to achieve their digital objectives. <br /><br /> With a team of passionate experts in SEO, digital marketing, and web development, we go beyond delivering solutions; we create digital experiences that resonate and endure-</p>

                    </div>
                </div>
            </div>
            <div className="container bg-sky-50 shadow-lg mt-[6rem] p-4"><h1 className="text-center text-[3rem] font-mono">Our Values</h1>
            <div className="  flex flex-row flex-wrap items-center justify-around py-5 sm:justify-evenly">
            
            
                
             {cardData.map((item) => (<Card  key={item.id} imgsrc={item.imgsrc} title={item.title} description={item.description} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} />))}
             </div>
           
             </div>
            <div className="container">

                <div className="flex row text-center mt-[6rem]">
                    <div className="col-md-6 col-12 left shadow-lg p-4 rounded">
                        <h1 className="text-[2rem] font-mono">Our Vision</h1>
                        <p>Uk Tech Build: The one who guides you. Our vision is to enhance the growth of students and early-stage employees in terms of personal development and soft skills.
                            We create a personalized community for our students across the globe, providing them with exemplary guidance related to examinations, assignments, interviews, resume building, Linkedin profile setup, career assistance, etc. <br />
                            We, at YoursthatSenior, believe in Gamified Learning experience. This helps us instil significant skills with ease. We are here to fill the scarcity of a perfect senior who is going to assist you with all your career decisions and help you attain perfection. <br />
                            Language, city, or even your college isn’t a barrier here. If you are someone whose purpose is to bring a change, then, you’re already the one we are looking for.</p>
                    </div>
                    <div className="col-md-6 col-12ml-2 right shadow-lg p-4 rounded">
                        <h1 className="text-[2rem] font-mono">Our Mission</h1>
                        <p>Our mission revolves around you- our esteemed clients! Our priority is to understand your goals, challenges, and aspirations to tailor our services effectively. We are on a mission to empower businesses of all sizes, from startups to enterprises, by leveraging the power of SEO, strategic digital marketing, and cutting-edge web development.</p>
                    </div>
                </div>

                <div className="my-[8rem]">
                <h1 className="text-[2rem] text-center font-mono">Our Clients</h1>
                <Clients/>
                </div>
            </div>
        </>
    )
}
export default About;