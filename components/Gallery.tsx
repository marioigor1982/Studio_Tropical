
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://veja.abril.com.br/wp-content/uploads/2016/05/bronzeamento-artificial-original.jpeg?quality=70&strip=info&w=620&h=348&crop=1",
    "https://images.fresha.com/lead-images/placeholders/tanning-studio-13.jpg?class=venue-gallery-large",
    "https://odia.ig.com.br/_midias/jpg/2025/09/15/398x267/1_bronzeamento_artificial-37028281.jpg",
    "https://conteudo.imguol.com.br/c/noticias/c5/2025/04/09/bronzeamento-artificial-eleva-risco-de-cancer-1744221044251_v2_750x421.jpg",
    "https://beleza.culturamix.com/blog/wp-content/gallery/bronzeamento-artificial-1/thumbs/thumbs_Bronzeamento-Artificial-1.jpg",
    "https://isabronze.com.br/wp-content/uploads/2023/03/bronze-foto-de-Jayro-Cerqueira-da-Silva-3-min-1.png",
  ];

  return (
    <section id="gallery" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-text">Nossa Galeria</h2>
          <p className="text-lg text-gray-600 mt-2">Inspire-se com alguns dos nossos trabalhos.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-video">
              <img 
                src={src} 
                alt={`Trabalho de bronzeamento do Studio Tropical ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
