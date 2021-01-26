import { css, CSSProp } from 'styled-components';

const sizes: { [key: string]: number } = {
  mobile: 360,
  tablet: 768,
  desktop: 1024,
};

type BackQuoteArgs = string[] | TemplateStringsArray[] | [TemplateStringsArray, string];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  mobile: (..._: BackQuoteArgs) => undefined,
  tablet: (..._: BackQuoteArgs) => undefined,
  desktop: (..._: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs): CSSProp => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs): CSSProp => css`
        @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs): CSSProp => css`
        @media only screen and (max-width: ${sizes.mobile}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  primary: '#3bb2b8',

  darkGrey: '#2d2c2c',
  grey: '#C0C0C0',
  lightGrey: '#fafafa',

  alert: '#e02020',

  white: '#ffffff',
  transparent: 'transparent',
};

export const theme = {
  colors,
  media,
};

export type ColorType = keyof typeof colors;

export type ThemeType = typeof theme;
