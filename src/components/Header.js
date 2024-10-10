import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? theme.colors.backgroundLight : 'transparent'};
  transition: background-color 0.3s ease;
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme, scrolled }) => (scrolled ? theme.colors.text : theme.colors.white)};
  margin: 0;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
`;

const NavItem = styled.li`
  margin-left: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, scrolled }) => (scrolled ? theme.colors.text : theme.colors.white)};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme, scrolled }) => (scrolled ? theme.colors.text : theme.colors.white)};
  padding: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navItems = ['home', 'apresentação', 'funcionalidades', 'depoimentos', 'contato'];

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo scrolled={scrolled} onClick={scrollToTop}>GourmetOn</Logo>
        <MenuIcon 
          scrolled={scrolled} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </MenuIcon>
        <NavLinks isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavItem key={item}>
              <NavLink
                to={item}
                spy={true}
                smooth={true}
                offset={-70} // Ajuste este valor conforme a altura do seu cabeçalho
                duration={500}
                scrolled={scrolled}
                onClick={closeMenu}
                activeClass="active" // Adiciona uma classe quando o link está ativo
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;