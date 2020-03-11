import styled from 'styled-components';
import { em } from 'polished';

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  padding-right: ${({ theme }) => em(theme.honeycomb.size.inputHorizontalPadding)};
`;