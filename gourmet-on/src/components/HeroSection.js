import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import heroBackgroundImage from '../images/hero-background.png';

const HeroContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DownloadButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff8787;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.6rem;
  }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <Title>GourmetOn: Sabor à sua porta</Title>
      <Subtitle>Descubra o melhor da gastronomia</Subtitle>
      <Description>
        Experimente os mais deliciosos pratos da sua cidade, preparados pelos melhores chefs e entregues diretamente na sua casa. Com o GourmetOn, a experiência gourmet está a apenas um clique de distância.
      </Description>
      <DownloadButton>
        <ButtonIcon icon={faDownload} />
        Baixe o App Agora
      </DownloadButton>
    </HeroContainer>
  );
};

export default HeroSection;