import React from 'react';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  const backgroundImageUrl = "https://p4.wallpaperbetter.com/wallpaper/342/795/797/landscape-beach-nature-horizon-wallpaper-preview.jpg";

  return (
    <footer 
      className="relative text-brand-light bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-brand-text/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Top Section with Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-brand-light/20 pb-8 mb-8">
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
            <h4 className="font-bold uppercase tracking-wider mb-4 text-brand-primary">Endereço</h4>
            <p>Rua das Palmeiras, 123</p>
            <p>Bairro Tropical, Cidade Bela</p>
            <p>EB - 12345-678</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-brand-primary">Contato</h4>
            <p>contato@studiotropical.com</p>
            <p>(99) 99999-8888</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-brand-primary">Horário</h4>
            <p>Segunda a Sexta: 9h - 19h</p>
            <p>Sábado: 9h - 16h</p>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-brand-light/20 pt-8 flex flex-col-reverse md:flex-row justify-between items-center text-sm text-brand-light/80">
          <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} Studio Tropical. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#services" className="hover:text-brand-primary transition-colors">Serviços</a>
            <a href="#about" className="hover:text-brand-primary transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;