import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
  return <Wrapper>끄적끄적 홈</Wrapper>;
};

export default Home;
