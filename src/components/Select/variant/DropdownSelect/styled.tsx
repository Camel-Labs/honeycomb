import { createGlobalStyle as css } from 'styled-components';
import { em } from 'polished';

export const Styles = css`
  .tippy-box[data-theme='dropdown'] {
    min-width: ${({ theme }) => em(300, theme.honeycomb.size.reduced)};
    border-radius: 0;
    background: transparent;

    .tippy-content {
      padding: 0;
    }
  }
`;
