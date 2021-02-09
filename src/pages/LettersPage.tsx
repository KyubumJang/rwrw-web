import React from 'react';
import styled from 'styled-components';
import LetterThumbnail from '../components/Letter/LetterThumbnail';
import { letters } from '../constants/Letters';
const Wrapper = styled.div``;

const LettersPage: React.FC = () => {
  return (
    <Wrapper>
      {letters.map((letter) => {
        return <LetterThumbnail key={letter.id} {...letter} />;
      })}
    </Wrapper>
  );
};

export default LettersPage;
