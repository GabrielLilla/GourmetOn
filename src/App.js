import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Presentation from './components/Presentation';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FeaturedDishes from './components/FeaturedDishes';
import { getRandomRecipes } from './components/api';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetchedRecipes = await getRandomRecipes(6);
      setRecipes(fetchedRecipes);
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <section id="home">
            <HeroSection />
          </section>
          <section id="pratos-destaque">
            <FeaturedDishes />
          </section>
          <section id="apresentação">
            <Presentation />
          </section>
          <section id="funcionalidades">
            <Features recipes={recipes} />
          </section>
          <section id="depoimentos">
            <Testimonials />
          </section>
          <section id="contato">
            <ContactForm />
          </section>
        </MainContent>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;