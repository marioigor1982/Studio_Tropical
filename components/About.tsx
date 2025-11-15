import React, { useState, useEffect } from 'react';
import InstagramIcon from './icons/InstagramIcon';

const About: React.FC = () => {
  // Using direct media links for a cleaner slideshow
  const imageUrls = [
    "https://www.instagram.com/p/DQclspLkY64/media/",
    "https://www.instagram.com/p/DHYu0wtR_cC/media/",
    "https://www.instagram.com/p/DLVoymJS-k1/media/",
    "https://www.instagram.com/p/DMi4t8ksWcB/media/",
    "https://www.instagram.com/p/DLUx-sBoTWE/media/",
    "https://www.instagram.com/p/DLDnN6oNtvy/media/",
  ];

  const instagramProfileUrl = "https://www.instagram.com/studiobelezatropicalpg/";

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images for smoother transitions
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);


  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT SIDE - NEW IMAGE SLIDESHOW */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-brand-light p-4 md:p-6 rounded-lg shadow-2xl overflow-hidden">
              <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 group">
                <InstagramIcon className="w-10 h-10 text-brand-text group-hover:text-brand-primary transition-colors" />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold font-serif text-brand-text group-hover:text-brand-primary transition-colors">Siga-nos!</h3>
                  <p className="text-brand-secondary text-lg">@studiobelezatropicalpg</p>
                </div>
              </a>
              
              {/* Image Slideshow Container */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                {imageUrls.map((url, index) => (
                    <img 
                      key={index}
                      src={url}
                      alt={`Post do Instagram ${index + 1} do Studio Beleza Tropical`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                      style={{ opacity: index === currentIndex ? 1 : 0 }}
                    />
                ))}
              </div>
            </div>
          </div>
          
          {/* RIGHT SIDE - EXISTING TEXT */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-brand-text mb-4">Bem-vinda ao Studio Tropical</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Nascemos da paixão por realçar a beleza única de cada mulher. No Studio Tropical, criamos um ambiente acolhedor e sofisticado onde você pode relaxar e se sentir cuidada. Nossa missão é oferecer serviços de alta qualidade, utilizando os melhores produtos e as técnicas mais modernas.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Nossa equipe de profissionais é altamente qualificada e está sempre pronta para oferecer uma experiência personalizada, garantindo que você saia daqui sentindo-se renovada, confiante e, claro, ainda mais linda.
            </p>
            <a 
              href="https://wa.me/5599999998888"
              target="_blank"
              rel="noopener noreferrer"
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