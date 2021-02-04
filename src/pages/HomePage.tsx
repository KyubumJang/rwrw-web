import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../components/Text/Text';

const Wrapper = styled.div``;

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Text>끄적끄적 홈</Text>
      {/* 누르면 로그인 페이지로 이동하게 어떻게 하나요? Link를 사용해서 하는게 맞는지 잘 모르겠습니다. */}
      <Link to="/login"> 로그인</Link>
    </Wrapper>
  );
};

export default HomePage;
