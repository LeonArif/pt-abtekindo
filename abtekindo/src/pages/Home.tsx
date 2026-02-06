import React from 'react';
import { Hero } from '../components/sections/Hero';
import { ProductList } from '../components/sections/ProductList';
import { ContactSection } from '../components/sections/ContactSection';

export const Home: React.FC = () => {
  return (
    <div>
      <section id="about-us">
        <Hero />
      </section>
      
      <section id="our-products">
        <ProductList />
      </section>
      
      <section id="contacts">
        <ContactSection />
      </section>
    </div>
  );
};