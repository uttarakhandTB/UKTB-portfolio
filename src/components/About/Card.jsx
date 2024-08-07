import React from "react";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
function Card(props) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });


    const slideInStyles = useSpring({
        transform: inView ? 'scale(1)' : 'scale(0.9)',
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });
    return (
        <>
            <animated.div style={slideInStyles}
                ref={ref}>

                <div className="rounded flex flex-row">
                    <div className={`group max-w-sm hover:shadow-lg rounded p-4 hover:-translate-y-5 transition-all ease-in-out duration-500 ${props.bg}`}>
                        <img src={props.imgsrc} className="w-full rounded-lg group-hover:scale-110 transition-all ease-in-out duration-500" alt="" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{props.title}</div>
                            <p className="text-gray-700 text-base">
                                {props.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag1}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag2}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.tag3}</span>
                        </div>
                    </div>
                </div>

            </animated.div>

        </>
    )
}
export default Card;