import React from 'react'
import TypeError from '../components/Typewriter'
import Mivelo from '../components/Mivelo'
import Motto from '../components/Motto'
import Finswitz from '../components/Finswitz'
import Partner from '../components/Partner'
import Panelly from '../components/Panelly'
import Testimony from '../components/Testimony'
import Booking from '../components/Booking'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Device from "../components/Device"
import { FaWhatsapp } from 'react-icons/fa';
import BackToTop from '../components/BackToTop'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Motto/>
        <TypeError />
        <Device />
        <Mivelo />
        <Finswitz />
        <Panelly />
        {/* <Partner /> */}
        {/* <Testimony /> */}
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