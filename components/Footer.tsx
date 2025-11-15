
import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-text text-brand-light">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section with Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-8 mb-8">
          <a href="#" className="mb-6 md:mb-0">
            <img src="https://i.postimg.cc/NFqDfZyr/Logo-Est-dio-Tropical.png" alt="Studio Tropical Logo" className="h-24 w-auto" />
          </a>
          <div>
            <h3 className="text-center md:text-right text-sm uppercase tracking-wider mb-3">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-brand-light hover:text-brand-primary transition-colors duration-300">
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/studiobelezatropicalpg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-light hover:text-brand-primary transition-colors duration-300">
                <InstagramIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section with Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-brand-secondary">Endereço</h4>
            <p className="text-gray-300">Rua das Palmeiras, 123</p>
            <p className="text-gray-300">Bairro Tropical, Cidade Bela</p>
            <p className="text-gray-300">EB - 12345-678</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-brand-secondary">Contato</h4>
            <p className="text-gray-300">contato@studiotropical.com</p>
            <p className="text-gray-300">(99) 99999-8888</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-brand-secondary">Horário</h4>
            <p className="text-gray-300">Segunda a Sexta: 9h - 19h</p>
            <p className="text-gray-300">Sábado: 9h - 16h</p>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-gray-600 pt-8 flex flex-col-reverse md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} Studio Tropical. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#about" className="hover:text-white transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
