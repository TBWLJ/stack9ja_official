import React from 'react'
import Link from 'next/link';

const Booking = () => {
  return (
    <div className="w-full h-auto pb-36 bg-blue-200 text-center">
      <div className='pt-20'>
        <h1 className='font-bold text-xl'>Get Started</h1>
      </div>
      <div className='pt-12'>
        <h1 className='text-5xl'>Ready for your next<br/>Life-Transforming Solution</h1>
      </div>
      <div className='pt-24'>
        <Link href="/contact">
          <button className='bg-blue-900 pl-20 pr-20 pt-5 pb-5 rounded-lg text-white text-xl font-bold'>Request a callback</button>
        </Link>
      </div>
    </div>
  )
}

export default Booking