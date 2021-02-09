import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { LetterDataType } from '../../constants/Letters';

export interface LetterProps extends Omit<LetterDataType, 'content'> {
  id: string;
  thumbnail: string;
  writer: string;
}

const Wrapper = styled.div``;

const Writer = styled.div``;

const Thumbnail = styled.div``;

const LetterThumbnail: React.FC<LetterProps> = ({ thumbnail, writer, id }) => {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push(`/letter-read/${id}`)}>
      <Writer>{writer}</Writer>
      <Thumbnail>{thumbnail}</Thumbnail>
    </Wrapper>
  );
};

export default LetterThumbnail;
