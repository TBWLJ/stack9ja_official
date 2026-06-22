import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Finswitz = () => {
  return (
    <Link
      href="https://finswitz.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <section className="flex justify-center items-center py-8 cursor-pointer">
        <div
          className="relative w-full max-w-6xl h-60 rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
            {/* Logo + Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image
                src="/finswitz.jpeg"
                className="rounded-lg"
                width={50}
                height={50}
                alt="Finswitz Logo"
              />
              <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                Finswitz Technologies
              </h2>
            </div>

            {/* Headline */}
            <h3 className="text-lg md:text-2xl font-semibold drop-shadow-md">
              Your Unified Payment Infrastructure
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base mt-3 max-w-2xl text-gray-200">
              Accept payments, automate collections, and scale your business
              with reliable fintech infrastructure built for modern enterprises.
            </p>

          </div>
        </div>
      </section>
    </Link>
  );
};

export default Finswitz;