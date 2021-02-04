// import React from 'react';
import styled from 'styled-components';
// import { ColorType } from '../../styles/theme';
import KaKaoLogin from 'react-kakao-login';
import React, { Component } from 'react';
interface State {
  data: any;
}

// export interface TextProps {
//   color?: ColorType;
// }

// type StyleType = Pick<TextProps, 'color'>;

// const Login = styled.div<StyleType>`
//   color: ${({ theme, color }) => color y|| theme.colors.primary};
// `;

class Login extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: 'kakao',
    };
  }

  responseKaKao = (res: any) => {
    this.setState({
      data: res,
    });
    alert(JSON.stringify(this.state.data));
  };

  responseFail = (err: any) => {
    alert(err);
  };

  render() {
    return (
      <>
        <div>
          <h1>카카오톡 간편 로그인</h1>
          <br></br>
          <KaKaoBtn
            jsKey={'f249bc1c3f208a18738e3324a85b9b96'}
            buttonText="KaKao"
            onSuccess={this.responseKaKao}
            onFailure={this.responseFail}
            getProfile={true}
          />
        </div>
      </>
    );
  }
}
// const StKaKaoLogin = styled.div`
//   cursor: pointer;
//   /* border-radius:10px; */
//   /* width: 200px; */
//   /* &:hover{
//         box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
//     } */
// `;
const KaKaoBtn = styled(Login)`
  padding: 0;
  width: 190px;
  height: 44px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover. {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
// import React, { Component } from 'react';
// import { render, screen } from '@testing-library/react';
// import styled from 'styled-components';
// import { ColorType } from '../../styles/theme';
// import KaKaoLogin from 'react-kakao-login';
// const token = 'f249bc1c3f208a18738e3324a85b9b96';
// class Login{
// }
// export default Login;

/*
test("displays a '카카오로 로그인하기' message", () => {
  render(
    <KaKaoLogin
      token={token}
      onSuccess={console.log}
      onFail={console.error}
      onLogout={console.info}
    />,
  );
  expect(screen.getByText('카카오로 로그인하기')).toBeInTheDocument();
});
*/
