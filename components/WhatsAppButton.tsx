import React from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5599999998888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 animate-color-cycle"
    >
      <WhatsAppIcon className="w-9 h-9 text-white" />
    </a>
  );
};

export default WhatsAppButton;
