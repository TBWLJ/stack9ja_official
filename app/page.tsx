import React from 'react'
import TypeError from '../components/Typewriter'
import About from '../components/About'
import Motto from '../components/Motto'
import Solutionn from '../components/Solutionn'
import Partner from '../components/Partner'
import Services from '../components/Services'
import Testimony from '../components/Testimony'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { FaWhatsapp } from 'react-icons/fa';
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Motto/>
        <TypeError />
        <About />
        <Solutionn />
        <Services />
        <Partner />
        <Testimony />
        <Booking />
        <Footer />
        <div className="landing-page">
          <a
            href="https://wa.me/2348120940814"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <FaWhatsapp size={40} color="#25D366" />
          </a>
        </div>
        <BackToTop />
    </div>
  )
}

export default Home