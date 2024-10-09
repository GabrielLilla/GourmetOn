import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRandomRecipes } from './api'; // Certifique-se de que o caminho para o arquivo api.js está correto

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const DishesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DishCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DishImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DishInfo = styled.div`
  padding: 1.5rem;
`;

const DishTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const DishDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const OrderButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff8787;
  }
`;

const FeaturedDishes = () => {
  const [featuredDishes, setFeaturedDishes] = useState([]);

  useEffect(() => {
    const fetchFeaturedDishes = async () => {
      try {
        const dishes = await getRandomRecipes(4); // Busca 4 pratos aleatórios
        setFeaturedDishes(dishes);
      } catch (error) {
        console.error('Erro ao buscar pratos em destaque:', error);
      }
    };

    fetchFeaturedDishes();
  }, []);

  return (
    <FeaturedSection>
      <SectionTitle>Pratos em Destaque</SectionTitle>
      <DishesGrid>
        {featuredDishes.map((dish) => (
          <DishCard key={dish.id}>
            <DishImage src={dish.image} alt={dish.title} />
            <DishInfo>
              <DishTitle>{dish.title}</DishTitle>
              <DishDescription>
                {dish.summary ? `${dish.summary.slice(0, 100)}...` : 'Descrição não disponível'}
              </DishDescription>
              <OrderButton>Pedir Agora</OrderButton>
            </DishInfo>
          </DishCard>
        ))}
      </DishesGrid>
    </FeaturedSection>
  );
};

export default FeaturedDishes;