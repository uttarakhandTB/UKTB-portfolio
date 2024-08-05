import React from "react";
import { FaPhoneAlt, FaLocationArrow, FaMailBulk, FaHourglass } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="mt-6 px-4 my-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl font-mono">Contact Us</h1>
            </div>
            <div className="flex flex-col md:flex-row bg-blue-50 mt-6 p-4">
                <div className="info grid w-full md:w-1/2 justify-around items-center md:grid-cols-2">
                    <div className="p-4 flex flex-col items-center">
                        <FaLocationArrow className="text-5xl mb-2" />
                        <h2 className="text-xl md:text-lg">Address</h2>
                        <p>Kashipur, Uttarakhand</p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <FaPhoneAlt className="text-5xl mb-2" />
                        <h2 className="text-xl md:text-lg">Call Us</h2>
                        <p>7454945875</p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <FaMailBulk className="text-5xl mb-2" />
                        <h2 className="text-xl md:text-lg">Mail Us</h2>
                        <p>sahilrawatjj@gmail.com</p>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <FaHourglass className="text-5xl mb-2" />
                        <h2 className="text-xl md:text-lg">Open Hours</h2>
                        <p>We are always open</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <form action="">
                        <div className="p-6 flex flex-col items-center w-full">
                            <div className="flex flex-col md:flex-row md:space-x-4 w-full ">
                                <input type="text" required placeholder="Your Name" className="rounded h-10 w-full md:w-1/2 p-3 border-2 border-black max-[768px]:mb-4" />
                                <input type="email" required placeholder="Your Email" className="rounded h-10 w-full md:w-1/2 p-3 border-2 border-black max-[768px]:my-4" />
                            </div>
                            <input type="number" placeholder="Your Number" className="rounded h-10 w-full p-3 border-2 border-black my-4" />
                            <input type="text" placeholder="Subject" className="rounded h-10 w-full p-3 border-2 border-black mb-4" />
                            <textarea name="textarea" placeholder="Comment" className="rounded h-30 w-full p-3 border-2 border-black mb-4" />
                            <button className="rounded-full py-2 px-8 text-white uppercase bg-gray-700 hover:shadow-lg hover:shadow-gray-600 transition ease-in-out duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
