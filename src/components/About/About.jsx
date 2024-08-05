import React from "react";
import Card from "./Card";
import { cardData } from "./AboutCard";
import Clients from "./Clients";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <div className=" container relative overflow-hidden "> 
        <div className="mt-5 flex flex-wrap items-center p-8 bg-blue-70 m-0 relative z-10">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left md:text-left mb-4 md:mb-0">
          <h1 className=" font-sans text-3xl md:text-4xl lg:text-5xl mt-4 capitalize">About</h1>
            <h1 className="text-blue-500 font-nunito text-3xl md:text-4xl lg:text-5xl mt-2 capitalize">
              <span className="font-mono" id="span"> NextZenTech</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-2 capitalize font-serif">
              The mentor who guides you for Management
            </h2>
            <p className="text-base md:text-lg lg:text-[16px] mt-2 font-sans">
              A one-stop solution to prepare for interviews and apply for your dream job. You will get guidance and skills training through a systematic and elucidated medium. We strive to enable seniors/industry leaders to share their impactful, practical knowledge with aspiring new blood.
            </p>
            <Link to="/services" className="mt-6">
              <button className="bg-blue-500 text-white rounded-full py-2 px-6 uppercase hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Services
              </button>
            </Link>
          </div>
          <div className="w-full ml-auto md:w-1/2 ">
            <img
              src="src/assets/images/about-top.avif"
              className="w-full ml-auto h-[400px]  object-cover  max-[768px]:h-auto"
              alt="Front view"
            />
          </div>
        </div>

      </div>

        
            <div className=" shadow-sm p-8 my-10">
                <div className="bg-white h-[150px] items-center content-center">
            <h1 className="text-[3rem] text-center  my-4  text-blue-500 font-mono max-[768px]:text-[2.5rem]  ">NextZenTech <span className="text-[2rem] text-black max-[768px]:text-[1.5rem]">About Mission And Story</span></h1>
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
            <div className=" shadow-lg mt-[6rem] bg-blue-50 p-4"><h1 className="text-center text-[3rem] font-mono">Our Values</h1>
                <div className="  flex flex-row flex-wrap items-center justify-around py-5 sm:justify-evenly">



                    {cardData.map((item) => (<Card key={item.id} imgsrc={item.imgsrc} title={item.title} description={item.description} tag1={item.tag1} tag2={item.tag2} tag3={item.tag3} bg={item.bg} />))}
                </div>

            </div>
            <div className="">
                <div className="container">
                    <div className="flex row text-center mt-[6rem]">
                        <div className="col-md-6 col-12 left shadow-lg p-4 rounded-lg border-2">
                            <h1 className="text-[2rem] font-mono">Our Vision</h1>
                            <p className="font-sans">Uk Tech Build: The one who guides you. Our vision is to enhance the growth of students and early-stage employees in terms of personal development and soft skills.
                                We create a personalized community for our students across the globe, providing them with exemplary guidance related to examinations, assignments, interviews, resume building, Linkedin profile setup, career assistance, etc. <br />
                                We, at YoursthatSenior, believe in Gamified Learning experience. This helps us instil significant skills with ease. We are here to fill the scarcity of a perfect senior who is going to assist you with all your career decisions and help you attain perfection. <br />
                                Language, city, or even your college isn’t a barrier here. If you are someone whose purpose is to bring a change, then, you’re already the one we are looking for.</p>
                        </div>
                        <div className="col-md-6 col-12ml-2 right shadow-lg p-4 rounded-lg border-2 ">
                            <h1 className="text-[2rem] font-mono">Our Mission</h1>
                            <p className="font-sans">Our mission revolves around you- our esteemed clients! Our priority is to understand your goals, challenges, and aspirations to tailor our services effectively. We are on a mission to empower businesses of all sizes, from startups to enterprises, by leveraging the power of SEO, strategic digital marketing, and cutting-edge web development.</p>
                        </div>
                    </div>
                </div>
                <div className="mx-8 my-[8rem]">
                    <h1 className="text-[2rem] text-center font-mono">Our Clients</h1>
                    <Clients />
                </div>
            </div>

        </>
    )
}
export default About;