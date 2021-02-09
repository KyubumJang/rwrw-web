import React from 'react';
import styled from 'styled-components';
import { LetterDataType } from '../../constants/Letters';

export interface LetterProps extends Omit<LetterDataType, 'id'> {}

const Wrapper = styled.div``;

const Writer = styled.div``;

const Content = styled.div``;

const Letter: React.FC<LetterProps> = ({ content, writer }) => {
  return (
    <Wrapper>
      <Writer>{writer}</Writer>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Letter;
