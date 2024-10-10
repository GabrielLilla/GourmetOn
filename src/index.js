import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
    background: '#f7f7f7',
    text: '#333333',
    white: '#ffffff',
  },
  fonts: {
    main: "'Roboto', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);