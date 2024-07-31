import React from "react";
import { FcProcess } from "react-icons/fc";
import ProcessCard from "./ProcessCard";
const Process = () => {
    return (
        <>
            <div className=" container ">
                <div className="flex items-center max-[768px]:flex-col ">
                    <FcProcess className="text-gray-800 max-[768px]:text-7xl text-8xl mb-2 max-[768px]:text-center" />
                    <div className=" flex flex-col ml-[6rem] max-[768px]:ml-6">
                        <h1 className="text-[3rem]  max-[768px]:text-[1.4rem] max-[768px]:text-center">Our Web Development Services Process.</h1>
                        <p className="text-[1.5rem] max-[768px]:text-[1rem] max-[768px]:text-center">CONSTITUTE OUR COMPLETE SEO PROCESS.</p>
                    </div>
                </div>

                <div className="mt-8 ml-16 max-[768px]:ml-0">
                    <h1 className="text-[2rem] max-[768px]:text-[1.2rem]  max-[768px]:text-center">we understand your business objectives & create effective seo strategies that are cost-effective and result-oriented.</h1>
                </div>

           

            </div>
            <div className="">

<ProcessCard/>
</div>
        </>
    )
}
export default Process;