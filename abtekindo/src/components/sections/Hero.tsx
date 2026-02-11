import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 from-gray-50 to-gray-200"></div>
      
      <div className="relative z-10 flex container mx-auto px-6 text-center justify-center flex-col max-w-5xl gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">
          "PT ABTEKINDO PRIMA LESTARI"
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mx-auto">
          Bergerak di bidang AC, supply, pemasangan, dan perbaikan AC split/package dan water chiller untuk berbagai merek seperti Daikin, Panasonic, dan sebagainya.
        </p>
      </div>
    </section>
  );
};