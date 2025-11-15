
import React from 'react';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-brand-primary"/>
    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
    <h4 className="font-bold text-brand-text font-serif text-lg">{testimonial.author}</h4>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Atendimento incrível e o resultado do bronzeamento ficou perfeito! Super recomendo.",
      author: "Juliana S.",
      image: "https://picsum.photos/100/100?random=9"
    },
    {
      quote: "As meninas são maravilhosas! Minhas unhas nunca estiveram tão lindas. Virei cliente fiel!",
      author: "Fernanda L.",
      image: "https://picsum.photos/100/100?random=10"
    },
    {
      quote: "O melhor design de sobrancelhas que já fiz. Profissionais muito detalhistas e talentosas.",
      author: "Carla M.",
      image: "https://picsum.photos/100/100?random=11"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-text">O que nossas clientes dizem</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
