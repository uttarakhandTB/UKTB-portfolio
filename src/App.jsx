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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Router>
            <FloatingBtn/>
      <Navbar />
      <div className=" mx-auto mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/faqs" element={<FAQs />} /> */}
        </Routes>
      </div>
      <Contact/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
