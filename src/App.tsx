import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Router from './Router';

const Wrapper = styled.div``;

const App: React.FC = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
