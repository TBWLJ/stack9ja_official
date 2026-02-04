import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="bg-green-900 w-full pb-16 px-6 sm:px-12">
      {/* Intro Section */}
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 pt-16 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="shrink-0">
          <img src="cp.png" alt="ConnectPro Logo" className="w-24 sm:w-28 md:w-32" loading="lazy" />
        </div>
        <div className="text-white md:w-7/12 w-full leading-relaxed text-center md:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl">
            Stack9ja is an IT firm that develops and deploys technology platforms and solutions
            that make life easier and work smarter.
          </h1>
          <p className="mt-4 text-gray-200">
            Our leading technological transformations have impacted lives across various landscapes within the continent.
          </p>
        </div>
      </div>

      {/* Action Links / Buttons */}
      <div
        className="flex flex-wrap justify-center md:justify-evenly gap-8 mt-16"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {[
          { title: "About Us", subtitle: "Who we are", link: "/company" },
          { title: "Why work with us", subtitle: "", link: "/company#why" },
          { title: "Our Impact", subtitle: "", link: "/solution" },
        ].map((btn, idx) => (
          <Link key={idx} href={btn.link}>
            <div className="bg-white w-52 h-52 rounded-full flex flex-col justify-center items-center text-center font-bold text-xl transition transform hover:scale-105 hover:bg-green-400 hover:border-yellow-500 border-2 border-green-600 shadow-lg">
              <span>{btn.title}</span>
              {btn.subtitle && <span className="text-base font-normal">{btn.subtitle}</span>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default About;