import React from 'react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.",
      image: "ui.png",
      color: "from-red-400 to-red-200",
    },
    {
      title: "Web Development",
      description:
        "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
      image: "mob.png",
      color: "from-cyan-400 to-cyan-200",
    },
    {
      title: "Mobile Apps",
      description:
        "We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.",
      image: "mobile.webp",
      color: "from-orange-400 to-orange-200",
    },
    {
      title: "IoT",
      description:
        "Hire IoT programmers who develop bespoke and innovative IoT solutions to simplify and automate complex business processes to save overall operational cost.",
      image: "5829456.webp",
      color: "from-pink-400 to-pink-200",
    },
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="text-center mb-16" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Core Services</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 rounded-xl shadow-lg bg-linear-to-br ${service.color} text-center transform transition duration-300 hover:scale-105`}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={1500 + index * 200} // stagger animations
          >
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto h-44 w-auto object-contain mb-6"
              loading="lazy"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-700 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;