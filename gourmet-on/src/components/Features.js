import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faClock, faUtensils, faWallet, faStar } from '@fortawesome/free-solid-svg-icons';

const FeaturesContainer = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureItem = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const features = [
  {
    icon: faSearch,
    title: 'Busca Inteligente',
    description: 'Encontre facilmente seus pratos favoritos com nossa busca avançada por tipo de comida.'
  },
  {
    icon: faFilter,
    title: 'Filtros Personalizados',
    description: 'Refine sua busca com filtros de preço, avaliação, distância e muito mais.'
  },
  {
    icon: faClock,
    title: 'Entrega Rápida',
    description: 'Acompanhe em tempo real o status do seu pedido e receba sua comida quentinha.'
  },
  {
    icon: faUtensils,
    title: 'Variedade de Restaurantes',
    description: 'Escolha entre uma ampla seleção de restaurantes locais e cadeias famosas.'
  },
  {
    icon: faWallet,
    title: 'Pagamento Fácil',
    description: 'Diversas opções de pagamento seguras e convenientes, incluindo cartão e PIX.'
  },
  {
    icon: faStar,
    title: 'Avaliações e Comentários',
    description: 'Leia avaliações de outros usuários e compartilhe sua própria experiência.'
  }
];

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <FeaturesTitle>Funcionalidades Principais</FeaturesTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon icon={feature.icon} />
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;