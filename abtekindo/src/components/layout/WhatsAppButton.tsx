import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { openWhatsApp } from '../../utils/whatsapp';
import { contactInfo } from '../../data/contacts';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    openWhatsApp(contactInfo.whatsapp, 'Halo, saya ingin bertanya tentang produk AC.');
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 z-50 border-4 border-blue-900"
      aria-label="Chat via WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-blue-900 text-3xl" />
    </button>
  );
};