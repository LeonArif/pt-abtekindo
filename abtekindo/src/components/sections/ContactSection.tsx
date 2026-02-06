import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '../../data/contacts';
import { Button } from '../common/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pesan berhasil dikirim!');
    setFormData({ email: '', message: '' });
  };
  
  const contactLinks = [
    {
      icon: faWhatsapp,
      label: `+${contactInfo.whatsapp}`,
      href: `https://wa.me/${contactInfo.whatsapp}`,
    },
    {
      icon: faInstagram,
      label: `@${contactInfo.instagram}`,
      href: `https://instagram.com/${contactInfo.instagram}`,
    },
    {
      icon: faMapMarkerAlt,
      label: contactInfo.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
    },
    {
      icon: faEnvelope,
      label: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: faPhone,
      label: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
  ];
  
  return (
    <div className="bg-blue-900 text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Hubungi kami via</h2>
            
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-yellow-400 transition-colors"
                >
                  <FontAwesomeIcon icon={contact.icon} className="text-2xl w-8" />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Ayo kirim pesan via email kami</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Pengirim:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email..."
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Pesan:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Konten..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                ></textarea>
              </div>
              
              <Button
                variant="secondary"
                size="lg"
                className="w-full"
              >
                Kirim
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};