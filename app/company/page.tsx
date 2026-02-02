import React from 'react';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import Navbar from '@/components/Navbar';

const Company = () => {
  const sections = [
    {
      title: 'Our Mission',
      description:
        'Creating technology platforms with the goal of making work more efficient and improving quality of life.',
      bg: 'bg-white',
    },
    {
      title: 'Our Vision',
      description: 'Being the partner of choice for transforming businesses and lives.',
      bg: 'bg-blue-100',
    },
    {
      title: 'Our Values',
      description:
        'ConnectPro foundation is grounded in a corporate culture that not only defines our identity but also shapes our unchanging dedication to our clients. These principles are the core of our being.',
      bg: 'bg-white',
    },
  ];

  return (
    <>
      {/* Mission, Vision, Values */}
      <Navbar />
      <section className="mt-32">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-4xl font-bold">Mission, Vision & Values</h1>
        </div>

        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`${section.bg} border-y-2 px-4 py-10 lg:px-24 flex flex-col lg:flex-row items-center`}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="lg:w-1/3 font-bold text-xl mb-4 lg:mb-0 text-center lg:text-left">
              {section.title}
            </div>
            <div className="lg:w-2/3 text-xl text-gray-800 text-center lg:text-left">
              {section.description}
            </div>
          </div>
        ))}
      </section>

      {/* Management Team */}
      {/* <section className="mt-32 mb-16 text-center" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="text-4xl font-bold">Management Team</h1>
      </section>
      <Boards /> */}

      {/* Other Sections */}
      <WhyWorkWithUs />
      <Booking />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Company;