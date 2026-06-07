import Link from 'next/link';

const Solutionn = () => {
  const solutions = [
    {
      title: "Panelly",
      description:
        "Panelly is a cloud-based platform that lets freelancers and service-based businesses create dedicated, secure client portals for each of their projects, without writing a single line of code.",
      imgSrc: "icon.png",
      imgAlt: "Panelly Logo",
      linkText: "Visit Portal",
      anchor: "https://www.panelly.name.ng",
    },
    {
      title: "Shop4Mi",
      description:
        "Shop4Mi is a modern e-commerce platform built for seamless shopping experiences. It connects users with top-quality tech products, accessories, and everyday essentials quickly.",
      imgSrc: "shop4mi-icon.png",
      imgAlt: "Shop4Mi Logo",
      linkText: "Visit Shop",
      anchor: "https://shop4mi.com.ng",
    },
    {
      title: "Mivelo",
      description:
        "A location-based ecommerce and delivery marketplace for Benin Republic, with open-city testing support for Nigeria and other locations while keeping XOF and Benin-first commerce defaults",
      imgSrc: "mivelo.png",
      imgAlt: "Mivelo Logo",
      linkText: "Visit Store",
      anchor: "https://mivelo.name.ng",
    },
    {
      title: "ListingJet",
      description:
        "ListingJet helps businesses create campaign pages, marketing assets, social content, audience exposure, and lead generation systems from a single listing upload, all without needing to write code.",
      imgSrc: "icon.png",
      imgAlt: "ListingJet Logo",
      linkText: "Visit Site",
      anchor: "https://listingjet.name.ng",
    },
  ];

  return (
    <section className="bg-slate-50 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Product experience</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Solutions with real business use cases.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          From client portals to commerce, our products are designed to simplify operations and create dependable customer experiences.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={1500 + index * 200}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-900/10">
              <img
                src={`/${solution.imgSrc}`}
                alt={solution.imgAlt}
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-black text-slate-950">{solution.title}</h3>
            <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{solution.description}</p>
            <a
              href={solution.anchor}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white transition-colors duration-300 hover:bg-emerald-800"
            >
              {solution.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutionn;
