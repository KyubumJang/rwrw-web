import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Letter from '../components/Letter/Letter';
import { LetterDataType, letters, emptyLetter } from '../constants/Letters';

const Wrapper = styled.div``;

const LetterReadPage: React.FC = () => {
  const history = useHistory();
  const letterId = history.location.pathname.substring(13);
  const letterToRead: LetterDataType =
    letters.find((letter) => letter.id === letterId) || emptyLetter;
  return (
    <Wrapper>
      <Letter {...letterToRead} />
    </Wrapper>
  );
};

export default LetterReadPage;
