import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUtensils, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const PresentationContainer = styled.section`
  background-color: #f8f9fa;
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BenefitsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const Benefit = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BenefitIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const Presentation = () => {
  return (
    <PresentationContainer id="presentation">
      <Title>Por que escolher o GourmetOn?</Title>
      <BenefitsContainer>
        <Benefit>
          <BenefitIcon icon={faRocket} />
          <BenefitTitle>Entrega Rápida</BenefitTitle>
          <BenefitDescription>
            Nossos entregadores parceiros garantem que sua refeição chegue quente e no menor tempo possível.
          </BenefitDescription>
        </Benefit>
        <Benefit>
          <BenefitIcon icon={faUtensils} />
          <BenefitTitle>Variedade de Restaurantes</BenefitTitle>
          <BenefitDescription>
            Desde culinária local até pratos internacionais, oferecemos uma ampla seleção de restaurantes para todos os gostos.
          </BenefitDescription>
        </Benefit>
        <Benefit>
          <BenefitIcon icon={faCreditCard} />
          <BenefitTitle>Pagamento Fácil</BenefitTitle>
          <BenefitDescription>
            Aceitamos diversas formas de pagamento, tornando sua experiência de compra rápida e conveniente.
          </BenefitDescription>
        </Benefit>
      </BenefitsContainer>
    </PresentationContainer>
  );
};

export default Presentation;