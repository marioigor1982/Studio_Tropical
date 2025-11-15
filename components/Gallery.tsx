import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1615591379969-dd003fcecae0?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604902396837-744d715a2b36?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616838979362-e63d3f4b4b9a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560204842-8c173e4b3e0b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620916566398-39f1686d7e8d?q=80&w=600&auto=format&fit=crop",
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
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={src} 
                alt={`Trabalho do Studio Tropical ${index + 1}`} 
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