import React from 'react';
import styled, { css } from 'styled-components';
import { ColorType } from '../../styles/theme';

export interface ButtonProps {
  bgColor?: ColorType;
  color?: ColorType;
  size: string;
}

type StyleType = Pick<ButtonProps, 'color' | 'bgColor' | 'size'>;
type SizeType = Pick<ButtonProps, 'size'>;

const Button: React.FC<ButtonProps> = ({ children, color, bgColor, size, ...rest }) => {
  return (
    <Wrapper color={color} bgColor={bgColor} size={size} {...rest}>
      {children}
    </Wrapper>
  );
};

Button.defaultProps = {
  color: 'lightGrey',
};

export default Button;

const sizeStyles = css<SizeType>`
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 16rem;
      height: 4rem;
      font-size: 1.2rem;
    `}
  ${({ size }) =>
    size === 'mid' &&
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
  ${sizeStyles}
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
