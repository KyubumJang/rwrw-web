import React from 'react';
import styled from 'styled-components';
import LetterThumbnail from '../components/Letter/LetterThumbnail';
import faker from 'faker';

export interface LetterDataType {
  id: string;
  content: string;
  thumbnail: string;
  writer: string;
}

const Wrapper = styled.div``;

const letters: LetterDataType[] = [
  {
    content: faker.lorem.sentences(),
    id: faker.random.uuid(),
    thumbnail: faker.lorem.sentence(),
    writer: faker.name.firstName(),
  },
];

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
