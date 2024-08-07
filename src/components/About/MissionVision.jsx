import React from "react";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
const MissionVision = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });


    const slideInStyles = useSpring({
        transform: inView ? 'scale(1)' : 'scale(0.9)',
        opacity: inView ? 1 : 0,
        config: { duration: 1500 },
    });
    return (
        <>
            <animated.div style={slideInStyles}
                ref={ref}>
                <div className="container">
                    <div className="flex row text-center mt-[6rem]">
                        <div className="col-md-6 col-12 left shadow-sm p-4 rounded-lg border-2">
                            <h1 className="text-[2rem] font-mono">Our Vision</h1>
                            <p className="font-sans">Uk Tech Build: The one who guides you. Our vision is to enhance the growth of students and early-stage employees in terms of personal development and soft skills.
                                We create a personalized community for our students across the globe, providing them with exemplary guidance related to examinations, assignments, interviews, resume building, Linkedin profile setup, career assistance, etc. <br />
                                We, at YoursthatSenior, believe in Gamified Learning experience. This helps us instil significant skills with ease. We are here to fill the scarcity of a perfect senior who is going to assist you with all your career decisions and help you attain perfection. <br />
                                Language, city, or even your college isn’t a barrier here. If you are someone whose purpose is to bring a change, then, you’re already the one we are looking for.</p>
                        </div>
                        <div className="col-md-6 col-12ml-2 right shadow-sm p-4 rounded-lg border-2 ">
                            <h1 className="text-[2rem] font-mono">Our Mission</h1>
                            <p className="font-sans">Our mission revolves around you- our esteemed clients! Our priority is to understand your goals, challenges, and aspirations to tailor our services effectively. We are on a mission to empower businesses of all sizes, from startups to enterprises, by leveraging the power of SEO, strategic digital marketing, and cutting-edge web development.</p>
                        </div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}
export default MissionVision;