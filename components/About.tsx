import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=800&auto=format&fit=crop" 
              alt="Interior do Studio Tropical" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-brand-text mb-4">Bem-vinda ao Studio Tropical</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Nascemos da paixão por realçar a beleza única de cada mulher. No Studio Tropical, criamos um ambiente acolhedor e sofisticado onde você pode relaxar e se sentir cuidada. Nossa missão é oferecer serviços de alta qualidade, utilizando os melhores produtos e as técnicas mais modernas.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Nossa equipe de profissionais é altamente qualificada e está sempre pronta para oferecer uma experiência personalizada, garantindo que você saia daqui sentindo-se renovada, confiante e, claro, ainda mais linda.
            </p>
            <a 
              href="#contact" 
              className="bg-brand-secondary text-white font-bold px-8 py-3 rounded-full text-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;