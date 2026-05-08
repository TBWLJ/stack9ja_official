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
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">What we do</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Premium delivery across the digital stack.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Every engagement is planned around your users, business goals, security needs, and future maintenance.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/80"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={1500 + index * 200} // stagger animations
          >
            <img
              src={`/${service.image}`}
              alt={service.title}
              className="mb-6 h-36 w-full object-contain"
              loading="lazy"
            />
            <h3 className="mb-3 text-xl font-black text-slate-950">{service.title}</h3>
            <p className="text-base leading-7 text-slate-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
