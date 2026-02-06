import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_NAME } from '../../utils/constants';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  const navLinks = [
    { name: 'About Us', sectionId: 'about-us' },
    { name: 'Our Product', sectionId: 'our-products' },
    { name: 'Contacts', sectionId: 'contacts' },
  ];
  
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold">PT ABTEKINDO</span>
            <span className="text-sm">PRIMA LESTARI</span>
          </Link>
          
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-lg font-medium transition-colors hover:text-yellow-400"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};