import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Mivelo = () => {
  return (
    <Link href="https://mivelo.name.ng">
    <section className="flex justify-center items-center py-8">
      <div
        className="relative w-full max-w-6xl h-60 rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-white text-center">
          {/* Logo + Title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/mivelo.png"
              className="rounded-lg"
              width={50}
              height={50}
              alt="Mivelo Logo"
            />
            <h2 className="text-2xl font-bold">Mivelo Market</h2>
          </div>

          <h3 className="text-lg md:text-xl font-semibold">
            Grow Your Ecommerce Business
          </h3>

          <p className="text-sm md:text-base mt-2 max-w-lg">
            Connect with trusted vendors and discover quality products.
          </p>
        </div>
      </div>
    </section>
    </Link>
  );
};

export default Mivelo;