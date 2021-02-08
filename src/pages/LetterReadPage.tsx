import React from 'react';
import styled from 'styled-components';
import Letter from '../components/Letter/Letter';

const Wrapper = styled.div``;

const LetterToRead = styled(Letter)``;

const LetterReadPage: React.FC = () => {
  return (
    <Wrapper>
      <LetterToRead />
    </Wrapper>
  );
};

export default LetterReadPage;
