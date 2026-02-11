import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navLinks = [
    { name: 'About Us', sectionId: 'about-us' },
    { name: 'Our Product', sectionId: 'our-products' },
    { name: 'Contacts', sectionId: 'contacts' },
  ];

  return (
    <nav className="bg-[#1e3a8a] text-white sticky top-0 z-50 px-16">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-bold leading-none">
              PT ABTEKINDO
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase opacity-90">
              PRIMA LESTARI
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-sm font-medium hover:opacity-80 transition"
              >
                {link.name}
              </button>
            ))}
          </div>

        </div>
    </nav>
  );
};