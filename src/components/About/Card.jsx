import React from "react";

function Card(props) {
    return (
        <>
            
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
           


        </>
    )
}
export default Card;