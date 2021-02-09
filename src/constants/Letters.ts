import faker from 'faker';

export interface LetterDataType {
  id: string;
  content: string;
  thumbnail: string;
  writer: string;
}

export const emptyLetter: LetterDataType = {
  id: '',
  content: '',
  writer: '',
  thumbnail: '',
};

export const letters: LetterDataType[] = [
  {
    content: faker.lorem.sentences(),
    id: faker.random.uuid(),
    thumbnail: faker.lorem.sentence(),
    writer: faker.name.firstName(),
  },
  {
    content: faker.lorem.sentences(),
    id: faker.random.uuid(),
    thumbnail: faker.lorem.sentence(),
    writer: faker.name.firstName(),
  },
  {
    content: faker.lorem.sentences(),
    id: faker.random.uuid(),
    thumbnail: faker.lorem.sentence(),
    writer: faker.name.firstName(),
  },
];
