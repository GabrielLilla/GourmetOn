import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  min-width: 250px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #ddd;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #555;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sobre o GourmetOn</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="/sobre">Quem Somos</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/carreiras">Carreiras</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/blog">Blog</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterList>
            <FooterListItem>Email: contato@gourmeton.com</FooterListItem>
            <FooterListItem>Telefone: (11) 98765-4321</FooterListItem>
            <FooterListItem>Endereço: Rua 23 de Maio, 77 - São Paulo, SP</FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="/termos">Termos de Uso</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/privacidade">Política de Privacidade</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/cookies">Política de Cookies</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Siga-nos</FooterTitle>
          <SocialIcons>
            <FooterLink href="https://facebook.com/gourmeton" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={faFacebook} />
            </FooterLink>
            <FooterLink href="https://twitter.com/gourmeton" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={faTwitter} />
            </FooterLink>
            <FooterLink href="https://instagram.com/gourmeton" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={faInstagram} />
            </FooterLink>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} GourmetOn. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;