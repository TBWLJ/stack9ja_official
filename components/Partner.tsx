import React from 'react';

const Partner = () => {
  const logos = [
    '58709.png',
    'https://kwolitygroupltd.com.ng/Kwolity.png',
    'icon.png',
    'shop4mi-icon.png',
    'afric.png',
    'logonew.png',
    'cp.png',
  ];

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Some of our clients over the years
        </h2>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((src, index) => (
            <div
              key={index}
              className="w-28 h-28 flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                src={src}
                alt={`Client logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;