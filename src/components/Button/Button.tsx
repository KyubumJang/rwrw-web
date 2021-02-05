import React from 'react';
import styled, { css } from 'styled-components';
import { ColorType } from '../../styles/theme';

export interface ButtonProps {
  bgColor?: ColorType;
  color?: ColorType;
  btnSize?: 'large' | 'mid';
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type StyleType = Pick<ButtonProps, 'color' | 'bgColor' | 'btnSize'>;
type SizeType = Pick<ButtonProps, 'btnSize'>;
const Button: React.FC<ButtonProps> = ({ children, color, bgColor, btnSize, ...props }) => {
  return (
    <Wrapper color={color} bgColor={bgColor} btnSize={btnSize} {...props}>
      {children}
    </Wrapper>
  );
};

Button.defaultProps = {
  btnSize: 'mid',
};

export default Button;

const sizeStyles = css<SizeType>`
  ${({ btnSize }) =>
    btnSize === 'large' &&
    css`
      width: 16rem;
      height: 4rem;
      font-size: 1.2rem;
    `}
  ${({ btnSize }) =>
    btnSize === 'mid' &&
    css`
      // size custom
      width: 16rem;
      height: 4rem;
      font-size: 1.2rem;
      border-radius: 3rem;
    `}
`;

const Wrapper = styled.div<StyleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme, color }) => color || theme.colors.black};
  background-color: ${({ bgColor }) => bgColor};
  ${sizeStyles};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
