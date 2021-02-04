import React from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import faker from 'faker';

const Letter: React.FC = () => {
  const [letter, handleLetter] = useInput('');
  const handleSubmit = async () => {
    // 입력한 편지 제출 로직
  };
  return (
    <Wrapper>
      <LetterWrapper>
        <LetterTitle>편지 쓰기</LetterTitle>
        <LetterTo>{faker.name.firstName()}야,</LetterTo>
        <LetterInput
          placeholder="따뜻한 한마디를 입력해 주세요"
          onChange={handleLetter}
          value={letter}
        ></LetterInput>
      </LetterWrapper>
      <LetterSubmitBtn onClick={handleSubmit}>보내기</LetterSubmitBtn>
    </Wrapper>
  );
};

export default Letter;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  font-size: 2rem;
`;

const LetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 80vh;
  border: 0.1rem solid #efefef;
  padding: 5rem;
`;

const LetterTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

const LetterTo = styled.div`
  margin-top: 3rem;
`;

const LetterInput = styled.input`
  margin-top: 2rem;
  outline: none;
  width: 40rem;
  padding: 1rem;
  border: 0px;
  border-bottom: 1px solid #efefef;
  font-size: 1rem;
`;

const LetterSubmitBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5rem;
  width: 16rem;
  height: 4rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 3rem;
  border: 1px solid #efefef;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
