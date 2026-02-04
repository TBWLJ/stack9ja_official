'use client';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeError = () => {
  return (
    <section id='back' className='flex items-center'>
        <div className='pl-10 pr-10 text-center'>
        <h1 className='xl:text-4xl lg:text-4xl md:text-5xl sm:text-4xl text-2xl text-green-400 font-extrabold'>
        WE DELIVER{' '}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['WEB APPLICATIONS', 'MOBILE APPLICATIONS', 'CLOUD APPLICATIONS', 'INTERNET OF THINGS', 'CYBER SECURITY', 'GRAPHIC DESIGN', 'VIDEO EDITING', 'CINEMATOGRAPHY']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1500}
            cursorBlinking={false}
          />
        </span>
        </h1>
        </div>
    </section>
  )
}

export default  TypeError;