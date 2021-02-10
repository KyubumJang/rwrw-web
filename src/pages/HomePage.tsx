import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../components/Text/Text';

const Wrapper = styled.div``;

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Text>끄적끄적 홈</Text>
      <Link to="/login"> 로그인</Link>
    </Wrapper>
  );
};

export default HomePage;
