import { DefaultTheme } from 'styled-components';

import { GoldDark } from './GoldDark';

export const GoldLight: DefaultTheme = {
  ...GoldDark,
  honeycomb: {
    ...GoldDark.honeycomb,
    color: {
      ...GoldDark.honeycomb.color,
      bg: {
        normal: '#ffffff',
        masked: '#fafafa',
        disabled: '#f5f5f5',
      },

      border: '#e6e8ea',

      primary: {
        ...GoldDark.honeycomb.color.primary,
        masked: '#fffdf0',
      },

      text: {
        normal: GoldDark.honeycomb.color.readable.normal('white'),
        masked: GoldDark.honeycomb.color.readable.masked('white'),
        disabled: GoldDark.honeycomb.color.readable.disabled('white'),
      },
    },
  },
};