import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Definições básicas */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', 'Arial', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.white};
  }

  /* Tipografia */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', 'Helvetica', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  /* Botões */
  button {
    cursor: pointer;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${({ theme }) => `${theme.primary}80`};
    }
  }

  /* Imagens */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Formulários */
  input, textarea {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.light};
    border-radius: 4px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }
  }
`;

export default GlobalStyles;