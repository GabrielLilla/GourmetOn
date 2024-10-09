import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialsContainer = styled.section`
  background-color: #f1f3f5;
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CustomerName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Rating = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const StarIcon = styled(FontAwesomeIcon)`
  margin-right: 0.2rem;
`;

const Testimonials = () => {
  const testimonials = [
    {
      text: "O GourmetOn revolucionou minha experiência com delivery! A comida sempre chega quente e no horário prometido. Não peço mais de outro lugar!",
      name: "Ana Silva",
      rating: 5
    },
    {
      text: "A variedade de restaurantes é incrível. Já experimentei cozinhas que nem sabia que existiam na minha cidade. Recomendo demais!",
      name: "Carlos Oliveira",
      rating: 5
    },
    {
      text: "O que mais gosto no GourmetOn é a facilidade de pagamento e o atendimento ao cliente. Sempre que precisei, fui prontamente atendido.",
      name: "Mariana Santos",
      rating: 4
    }
  ];

  return (
    <TestimonialsContainer id="testimonials">
      <Title>O que nossos clientes dizem</Title>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <QuoteIcon icon={faQuoteLeft} />
            <TestimonialText>{testimonial.text}</TestimonialText>
            <CustomerName>{testimonial.name}</CustomerName>
            <Rating>
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} icon={faStar} />
              ))}
            </Rating>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsContainer>
  );
};

export default Testimonials;