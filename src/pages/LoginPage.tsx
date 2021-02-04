import React from 'react';
import styled from 'styled-components';
import Text from '../components/Text/Text';
import Login from '../components/Text/Login';

const Wrapper = styled.div``;

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <Text>카카오 로그인 페이지</Text>
      <Login>로그인 컴포넌트</Login>
    </Wrapper>
  );
};

export default LoginPage;
