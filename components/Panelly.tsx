import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Panelly = () => {
  return (
    <Link
      href="https://panelly.name.ng"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="flex justify-center items-center py-8 cursor-pointer">
        <div
          className="relative w-full max-w-6xl h-60 rounded-lg overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            {/* Logo + Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image
                src="/icon.png"
                width={50}
                height={50}
                alt="Panelly Logo"
                className="rounded-lg"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Panelly
              </h2>
            </div>

            {/* Heading */}
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Your Client Portal Management
            </h3>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-200">
              Panelly is a branded client portal tool specifically built for freelancers and agencies.
            </p>

          </div>
        </div>
      </section>
    </Link>
  );
};

export default Panelly;