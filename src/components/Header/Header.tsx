import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>끄적끄적</Logo>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #efefef;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #000000;
`;
