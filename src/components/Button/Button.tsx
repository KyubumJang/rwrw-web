import React from 'react';
import styled, { css } from 'styled-components';
import { ColorType, theme } from '../../styles/theme';

export interface ButtonProps {
  bgColor?: ColorType;
  color?: ColorType;
  size: string;
}

type StyleType = Pick<ButtonProps, 'color' | 'bgColor' | 'size'>;

const Button: React.FC<ButtonProps> = ({ children, color, bgColor, size }) => {
  return (
    <Wrapper color={color} bgColor={bgColor} size={size}>
      {children}
    </Wrapper>
  );
};

export default Button;

const sizeStyles = css<StyleType>`
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 16rem;
      height: 4rem;
    `}
`;

const Wrapper = styled.div<StyleType>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${sizeStyles}

  color: ${({ theme, color }) => color || theme.colors.black};
  background-color: ${({ bgColor }) => bgColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: 1px solid #ffffff;
  }
`;
