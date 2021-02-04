import React from 'react';
import styled from 'styled-components';
import { LetterDataType } from '../../pages/LetterReceivePage';

export interface LetterProps extends Omit<LetterDataType, 'id'> {}

const Wrapper = styled.div``;

const Writer = styled.div``;

const Thumbnail = styled.div``;

const Letter: React.FC<LetterProps> = ({ thumbnail, writer }) => {
  return (
    <Wrapper>
      <Writer>{writer}</Writer>
      <Thumbnail>{thumbnail}</Thumbnail>
    </Wrapper>
  );
};

export default Letter;
