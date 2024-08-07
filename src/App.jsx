import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About/About'
import Services from './components/Services/Services'
import FloatingBtn from './components/FloatingBtn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Blogs from './components/Blog/Blogs.jsx'


function App() {
 

  return (
    <>
          <Router>
          <Navbar />
      <div 
          className=" mx-auto bg-no-repeat bg-contain bg-[url('src/assets/images/home-bg.png')]">
      <FloatingBtn/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs/>} /> 
          {/* <Route path="/faqs" element={<FAQs />} /> */}
        </Routes>
        
      <Contact/>
      </div>
      <Footer/>
    </Router>

    </>
  )
}


export default App
