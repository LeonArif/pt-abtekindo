import React from 'react';
import { Navbar } from './Navbar';
import { WhatsAppButton } from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton />
    </div>
  );
};