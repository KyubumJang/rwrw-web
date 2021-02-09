import React from 'react';
import styled from 'styled-components';
import { LetterDataType } from '../../constants/Letters';

export interface LetterProps extends Omit<LetterDataType, 'id'> {
  content: string;
  thumbnail: string;
  writer: string;
}

const Wrapper = styled.div``;

const Writer = styled.div``;

const Content = styled.div``;

const Letter: React.FC<LetterDataType> = ({ content, writer }) => {
  return (
    <Wrapper>
      <Writer>{writer}</Writer>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Letter;
