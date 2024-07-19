import React from "react"
const Home = () => {
  return (
    <>
      <div className=" max-[768px]:content-center max-[768px]:items-center p-8 bg-blue-70 row m-0 items-center">
        <div className=" col-md-6 col-12 h-[30rem] max-[768px]:text-center d-flex flex-col  items-start max-[768px]:h-auto max-[768px]:mt-[2rem] mb-[2rem]">
          <h1 className="max-[768px]:text-[2rem]  font-nunito text-[3rem] mt-[1rem] capitalize text-blue-500"> <span className="" id="span">UK Tech Build</span></h1>
          <h2 className=" max-[768px]:text-[1.2rem] text-[2rem] mt-[1rem] mb-2 capitalize">The mentor who guide you for Management</h2>
          <p className="text-[1rem] max-[768px]:text-[0.8rem] ">A one-stop solution to prepare for interviews and apply for your dream job. You will get guidance and skills training through a systematic and elucidated medium. We strive to enable seniors/industry leaders to share their impactful, practical knowledge with aspiring new blood.</p>

          <a href="home.html"><button className="max-[768px]:text-[14px] max-[351px]:text-[12px] rounded-full py-[0.8rem] mt-4 px-[1.8rem] shadow-lg uppercase hover:bg-gray-700 hover:text-white transition ease-in-out delay-1 hover:-translate-y-1 hover:scale-10 duration-300">Digital Marketing Program</button></a>
        </div>
        <div className="col-md-6 col-12 h-[30rem] d-flex flex-col content-center items-start max-[768px]:h-auto max-[768px]:mt-[1rem] ">
          <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
              <div className="" >
                <img src="src/images/frontimg.jpg" className=" max-[768px]:h-auto w-auto h-[25rem] w-100  shadow-lg d-block w-100 rounded" alt="..." />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home