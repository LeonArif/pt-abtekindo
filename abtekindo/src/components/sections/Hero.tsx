import React from 'react';
import { COMPANY_NAME, TAGLINE } from '../../utils/constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
          "{COMPANY_NAME}"
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {TAGLINE}
        </p>
      </div>
    </section>
  );
};