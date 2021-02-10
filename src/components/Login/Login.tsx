import React, { useState } from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { Props as KaKaoLoginProps } from 'react-kakao-login/lib/types';

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
