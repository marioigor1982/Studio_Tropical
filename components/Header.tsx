import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#gallery', label: 'Galeria' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo container */}
        <div className="flex-shrink-0">
          <a href="#">
            <img src="https://i.postimg.cc/NFqDfZyr/Logo-Est-dio-Tropical.png" alt="Studio Tropical Logo" className="h-24 w-auto" />
          </a>
        </div>
        
        {/* Right side container for nav and button */}
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-primary hover:text-brand-text transition-colors duration-300 font-semibold text-lg [text-shadow:1px_1px_3px_rgba(0,0,0,0.2)]">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg md:ml-8 text-lg font-semibold">
            Agende seu Horário
          </a>
          <button className="md:hidden text-brand-text ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm py-4">
          {navLinks.map((link) => (
             <a key={link.href} href={link.href} className="block text-center py-2 text-brand-primary hover:text-brand-text transition-colors duration-300 text-lg font-semibold [text-shadow:1px_1px_3px_rgba(0,0,0,0.2)]" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="text-center mt-4">
             <a href="#contact" className="inline-block bg-brand-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
              Agende seu Horário
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;