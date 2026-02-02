import React from 'react'
import Location from '@/components/Location'
import Form from '@/components/Form'
import Booking from '@/components/Booking'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import Navbar from '@/components/Navbar'

const Contact = () => {
  return (
    <>
        <Navbar />
        <Location />
        <Form />
        <Booking />
        <Footer />
        <BackToTop />
    </>
  )
}

export default Contact