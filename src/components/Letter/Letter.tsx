import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
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
      <Text>
        <Writer>{writer}</Writer>
      </Text>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default Letter;
