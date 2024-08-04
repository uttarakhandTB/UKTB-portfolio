import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="relative overflow-hidden"> 
        <div className="flex flex-wrap items-center p-8 bg-blue-70 m-0 relative z-10">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left md:text-left mb-4 md:mb-0">
            <h1 className="text-blue-500 font-nunito text-3xl md:text-4xl lg:text-5xl mt-4 capitalize">
              <span className="font-mono" id="span"> NextZenTech</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-2 capitalize font-mono">
              The mentor who guides you for Management
            </h2>
            <p className="text-base md:text-lg lg:text-xl mt-2 font-mono">
              A one-stop solution to prepare for interviews and apply for your dream job. You will get guidance and skills training through a systematic and elucidated medium. We strive to enable seniors/industry leaders to share their impactful, practical knowledge with aspiring new blood.
            </p>
            <Link to="/services" className="mt-6">
              <button className="bg-blue-500 text-white rounded-full py-3 px-6 uppercase hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Services
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="src/assets/images/frontimg.jpg"
              className="w-full h-80 object-cover shadow-lg rounded"
              alt="Front view"
            />
          </div>
        </div>

        {/* Wave elements positioned behind the content with animations
        <div className="wave -one absolute top-0 left-[50%] w-full h-[30rem] ml-[-50%] origin-[50%_48%] z-0 wave-animation-one"></div>
        <div className="wave -two absolute top-0 left-[50%] w-full h-[30rem] ml-[-50%] origin-[50%_48%] z-0 wave-animation-two"></div>
        <div className="wave -three absolute top-0 left-[50%] w-full h-[30rem] ml-[-50%] origin-[50%_48%] z-0 wave-animation-three"></div> */}
      </div>
    </>
  );
};

export default Home;
