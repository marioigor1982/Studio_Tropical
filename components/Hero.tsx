
import React, { useState, useEffect } from 'react';

const wallpapers = [
  "https://i.postimg.cc/DzgNSvQ3/ST-1.jpg",
  "https://i.postimg.cc/xC14HwgJ/ST-2.jpg",
  "https://i.postimg.cc/Xv3hNGCg/ST-3.jpg",
  "https://i.postimg.cc/MHc331Cz/ST-4.jpg",
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images for smoother transitions
    wallpapers.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background images slideshow */}
      {wallpapers.map((wallpaper, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${wallpaper})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-brand-secondary/20"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 drop-shadow-lg">
          Realce sua beleza natural
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
          No Studio Tropical, cuidamos de você com os melhores serviços de bronzeamento, unhas, sobrancelhas e muito mais.
        </p>
        <a 
          href="#services" 
          className="bg-brand-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Nossos Serviços
        </a>
      </div>
    </section>
  );
};

export default Hero;
