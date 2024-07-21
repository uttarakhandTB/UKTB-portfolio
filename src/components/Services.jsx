import React from "react";
import ServicesCardGroup from "./ServicesCardGroup";
import Process from "./Process";
const Services=()=>{
    return(
        <>
            <div className="Services bg-blue-50 p-6">
      <header className="App-header">
        <h1 className="text-center text-[2rem] font-mono">Our Services</h1>
        <p className='text-center mt-6'>Our web development & SEO strategies are tailored to meet the unique needs of each business. <br /> We offer our innovative services and robust web solutions across various locations.</p>
      </header>
      <main className="p-4">
      <ServicesCardGroup/>
      <Process/>
      </main>
    </div>
        </>
    )
}
export default Services;