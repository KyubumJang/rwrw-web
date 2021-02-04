import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Header from '../src/components/Header/Header';

const Wrapper = styled.div``;

const App: React.FC = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
