import React from "react";
import { FaPhoneAlt, FaMailBulk, FaHourglass, } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });


    const slideInStyles = useSpring({
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });
    const formSpring=useSpring({
        transform: inView ?'scale(1)' : "scale(0.4)",
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    })
    return (
        
                
        <div className="mt-6 px-4 my-10 bg-white">
            <div className="text-center mt-16">
                <h1 className="text-2xl md:text-4xl font-mono p-8">Contact Us</h1>
            </div>
            <div className="flex flex-col md:flex-row  mt- p-4">
            <animated.div style={slideInStyles} ref={ref} className="info grid w-full md:w-1/2 justify-around items-center md:grid-cols-2">
               
                    <div className="p-4 flex flex-col justify-center items-center h-[200px] bg-blue-50 mx-2 my-2">
                        <FaLocationDot className="text-5xl mb-2 text-blue-500" />
                        <h2 className="text-xl md:text-lg">Address</h2>
                        <p>Kashipur, Uttarakhand</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center h-[200px] bg-blue-50 mx-2 my-2">
                        <FaPhoneAlt className="text-5xl mb-2 text-blue-500" />
                        <h2 className="text-xl md:text-lg">Call Us</h2>
                        <p>7454945875</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center h-[200px] bg-blue-50 mx-2 my-2">
                        <FaMailBulk className="text-5xl mb-2 text-blue-500" />
                        <h2 className="text-xl md:text-lg">Mail Us</h2>
                        <p>care@nextzentech.com</p>
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center h-[200px] bg-blue-50 mx-2 my-2">
                        <FaHourglass className="text-5xl mb-2 text-blue-500" />
                        <h2 className="text-xl md:text-lg">Open Hours</h2>
                        <p>We are always open</p>
                    </div>
               
                </animated.div>
                <animated.div style={formSpring}  className="w-full md:w-1/2 mt-6 md:mt-0">
              
                    <form action="">
                        <div className="p-2 flex flex-col items-center w-full bg-blue-50 mt-2 h-auto">
                            <div className="flex flex-col md:flex-row md:space-x-4 w-full ">
                                <input type="text" required placeholder="Your Name" className="rounded h-10 w-full md:w-1/2 p-3 border-2 focus:outline-none focus:border-sky-500 border-black focus:ring-sky-500 max-[768px]:mb-4" />
                                <input type="email" required placeholder="Your Email" className="rounded h-10 w-full md:w-1/2 p-3 border-2 focus:outline-none focus:border-sky-500 border-black focus:ring-sky-500 max-[768px]:my-4" />
                            </div>
                            <input type="number" placeholder="Your Number" className="rounded h-10 w-full p-3 border-2 focus:outline-none focus:border-sky-500 border-black focus:ring-sky-500 my-4" />
                            <input type="text" placeholder="Subject" className="rounded h-10 w-full p-3 border-2 focus:outline-none focus:border-sky-500 border-black focus:ring-sky-500 mb-4" />
                            <textarea name="textarea" placeholder="Comment" className="rounded  w-full p-3 border-2 focus:outline-none focus:border-sky-500 border-black focus:ring-sky-500 mb-4 " rows={6}/>
                            <button className="rounded-full py-2 px-8 text-white uppercase bg-blue-500 hover:shadow-lg  hover:shadow-neon  ease-in-out duration-500 " type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                
                </animated.div>
            </div>
        </div>
        
    );
};

export default Contact;
