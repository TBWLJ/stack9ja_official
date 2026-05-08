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
    <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Trusted by builders</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Brands and products connected to our work.
        </h2>

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((src, index) => (
            <div
              key={index}
              className="flex h-24 w-full items-center justify-center rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                src={src.startsWith('http') ? src : `/${src}`}
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
