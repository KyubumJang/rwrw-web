import React from 'react';
import styled from 'styled-components';
import Letter from '../components/Letter/Letter';

const Wrapper = styled.div``;

const LetterToRead = styled.div``;

const LetterReadPage: React.FC = () => {
  return (
    <Wrapper>
      <LetterToRead></LetterToRead>
    </Wrapper>
  );
};

export default LetterReadPage;