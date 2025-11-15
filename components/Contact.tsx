import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-text">Entre em Contato</h2>
          <p className="text-lg text-gray-600 mt-2">Estamos esperando por você! Agende seu horário.</p>
        </div>
        <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-serif font-bold text-brand-text mb-4">Studio Tropical</h3>
            <p className="text-gray-700 mb-2">📍 Rua das Palmeiras, 123 - Bairro Tropical</p>
            <p className="text-gray-700 mb-2">🌴 Cidade Bela, EB - 12345-678</p>
            <p className="text-gray-700 mb-4">📞 (99) 99999-8888</p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="text-brand-accent hover:text-brand-primary transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
               <a href="#" className="text-brand-accent hover:text-brand-primary transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v2h-4v-2zm-2 4h8v2H8v-2zm2 4h4v2h-4v-2z" opacity=".3"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v2h-4v-2zm-2 4h8v2H8v-2zm2 4h4v2h-4v-2zM7.5 12c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5zm4.5 3c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm-3.5-3c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5z" clipRule="evenodd" fillRule="evenodd"/></svg>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 h-64 lg:h-80 w-full rounded-lg shadow-lg overflow-hidden">
             <img src="https://images.unsplash.com/photo-1617293541278-cbf15f62b406?q=80&w=800&auto=format&fit=crop" alt="Textura de areia" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;