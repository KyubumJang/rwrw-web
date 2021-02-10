import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { Props as KaKaoLoginProps } from 'react-kakao-login/lib/types';
import dotenv from 'dotenv';

dotenv.config();
console.log('test' + process.env.NODE_ENV);

interface LoginProps {
  onLogin?: KaKaoLoginProps['onSuccess'];
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [data, setData] = useState();

  const responseKakao = (res: any) => {
    console.log(`kb ~ file: Login.tsx ~ line 11 ~ res`, res);
    onLogin?.(res);
    // setData(res);
  };

  const handleError = (err: any) => {
    console.log(`kb ~ file: Login.tsx ~ line 14 ~ err`, err);
    // alert(err);
  };
  return (
    <Wrapper>
      <KakaoLogin
        token={'f249bc1c3f208a18738e3324a85b9b96'}
        onSuccess={responseKakao}
        onFail={handleError}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Login;

// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   kakaoApi: process.env.REACT_APP_KAKAO_LOGIN_API_KEY
// })
