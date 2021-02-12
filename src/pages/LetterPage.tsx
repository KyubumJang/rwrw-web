import React from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import faker from 'faker';
import Button from '../components/Button/Button';

const name = faker.name.firstName();

const LetterPage: React.FC = () => {
  const letterInput = useInput('');
  const handleSubmit = async () => {
    // TODO: 입력한 편지 제출 로직
  };
  return (
    <Wrapper>
      <LetterWrapper>
        <LetterTitle>편지 쓰기</LetterTitle>
        <LetterTo>{name},</LetterTo>
        <LetterInput
          placeholder="따뜻한 한마디를 입력해 주세요"
          onChange={letterInput.handler}
          value={letterInput.value}
        ></LetterInput>
      </LetterWrapper>
      <LetterSubmitBtn onClick={handleSubmit}>보내기</LetterSubmitBtn>
    </Wrapper>
  );
};

export default LetterPage;

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

const LetterInput = styled.textarea`
  margin-top: 2rem;
  resize: none;
  outline: none;
  width: 40rem;
  padding: 1rem;
  border: 0px;
  border-bottom: 1px solid #efefef;
  font-size: 1rem;
`;

const LetterSubmitBtn = styled(Button)`
  position: absolute;
  bottom: 5rem;
`;
