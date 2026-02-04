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
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="text-center mb-16" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Solutions</h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center gap-10">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="w-full sm:w-96 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={1500 + index * 200}
          >
            <img
              src={solution.imgSrc}
              alt={solution.imgAlt}
              className="h-20 w-20 object-contain mb-5 transition-transform duration-300 hover:scale-125"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
            <p className="text-gray-700 text-base mb-6">{solution.description}</p>
            <a
              href={solution.anchor}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
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