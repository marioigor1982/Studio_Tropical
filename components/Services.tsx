
import React from 'react';
import type { Service } from '../types';
import SunIcon from './icons/SunIcon';
import NailIcon from './icons/NailIcon';
import EyebrowIcon from './icons/EyebrowIcon';
import BeautyIcon from './icons/BeautyIcon';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
    <div className="mb-4 inline-block text-brand-primary">
      {service.icon}
    </div>
    <h3 className="text-2xl font-serif font-bold mb-3 text-brand-text">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <SunIcon />,
      title: 'Bronzeamento',
      description: 'Conquiste a cor do verão o ano todo com nossas técnicas de bronzeamento seguras e eficazes.',
    },
    {
      icon: <NailIcon />,
      title: 'Unhas',
      description: 'Mãos e pés impecáveis com nossos serviços de manicure, pedicure e nail art.',
    },
    {
      icon: <EyebrowIcon />,
      title: 'Sobrancelhas',
      description: 'Design de sobrancelhas perfeito para emoldurar seu olhar e realçar sua expressão.',
    },
    {
      icon: <BeautyIcon />,
      title: 'Beleza Feminina',
      description: 'Oferecemos uma gama de serviços de beleza para realçar o que há de melhor em você.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-text">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 mt-2">Dedicados a realçar sua beleza com cuidado e profissionalismo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
