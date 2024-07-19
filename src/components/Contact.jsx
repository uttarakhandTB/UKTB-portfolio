import React from "react"
const Contact = () => {
    return (
        <>
            <div className=" mt-6 container">
                <div className="text-[3rem] max-[768px]:text-[2rem] text-center flex-col content-center">
                    <h1>Contact Us</h1>
                </div>
                <div className=" flex row m-0 bg-blue-100">


                    <div className="col-md-6 col-12 max-[474px]:items-center max-[474px]:items-center flex flex-wrap w-full">
                        <div className="p-4 flex-col w-auto h-40">
                            <div className="h-30 w-auto">
                                <i className="fa-3x fa-solid fa-location-dot" />
                                <h2 className="text-[1.8rem] max-[768px]:text-[1.4rem]">Address</h2>
                                <p>Kashipur,Uttarakhand</p>
                            </div>
                            <div className="mt-16 w-auto">
                                <i className="fa-3x fa-solid fa-phone" />
                                <h2 className="text-[1.8rem] max-[768px]:text-[1.4rem]">Call Us</h2>
                                <p>7454945875</p>
                            </div>
                        </div>
                        <div className="max-[474px]:my-40 p-4 w-auto  flex-col">
                            <div className=" w-auto">
                                <i className="fa-3x fa-solid fa-envelope" />
                                <h2 className="text-[1.8rem] max-[768px]:text-[1.4rem]">Mail Us</h2>
                                <p>sahilrawatjj@gmail.com</p>
                            </div>
                            <div className="mt-16">
                                <i className="fa-3x fa-solid fa-hourglass-start" />
                                <h2 className="max-[768px]:text-[1.4rem]  text-[1.8rem]">Open Hours</h2>
                                <p>We are always open</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-[474px]:mt-[-130px] col-md-6 col-12 items-center w-full">
                        <form action="">
                            <div className="p-6 flex content-center items-center flex-col w-full my-6">
                                <input type="text" required placeholder="Your Name" className=" rounded  h-10 w-full p-3 border-2 border-black" />
                                <br />
                                <input type="email" required placeholder="Your Email" className=" mt-4 rounded h-10 w-full p-3 border-2 border-black" />

                                <div className="row flex m-0">
                                    <div className="col-md-6 col-12">
                                        <input type="number" placeholder="Your number" className=" mt-4 rounded h-10 w-full p-3 border-2 border-black" />
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <input type="text" placeholder="Subject" className="mt-4 rounded  h-10 w-full p-3 border-2 border-black" />
                                    </div>
                                </div>
                                <textarea name="textarea" id="" placeholder="Comment" className="mt-4  rounded  h-30 w-full p-3 border-2 border-black" ></textarea>
                                <button className="rounded-full py-[0.8rem] mt-4 px-[1.8rem] shadow-lg shadow-gray-800 text-white uppercase bg-gray-700 transition ease-in-out duration-300 ">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;