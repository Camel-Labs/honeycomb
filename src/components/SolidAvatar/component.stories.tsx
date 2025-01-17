import React from 'react';
import styled from 'styled-components';

import { decorators } from '../../modules/decorators';
import { Sections } from '../../modules/sections';

import { SolidAvatar } from './';

export default {
  component: SolidAvatar,
  decorators,
  title: `${Sections.Elements}/SolidAvatar`,
};

const Container = styled.div`
  display: flex;
  font-size: 5em;
  flex-wrap: wrap;
`;

export const Default = () => (
  <Container>
    <SolidAvatar value="9" initial="ภ" />
    <SolidAvatar value="4" initial="鲁" />
    <SolidAvatar value="30" initial="A" />
    <SolidAvatar value="1" initial="हि" />
    <SolidAvatar value="21" initial="اَ" />
    <SolidAvatar value="38" initial="й" />
    <SolidAvatar value="31" initial="한" />
    <SolidAvatar value="3" initial="বাং" />
    <SolidAvatar value="26" initial="か" />
    <SolidAvatar value="7" initial="ꦗ" />
    <SolidAvatar value="5" initial="తె" />
    <SolidAvatar value="0" initial="မြ" />
    <SolidAvatar value="6" initial="ᮞᮥ" />
    <SolidAvatar value="2" initial="ᨒᨚ" />
    <SolidAvatar value="50" initial="བོ" />
    <SolidAvatar value="8" initial="ᠮ" />
  </Container>
);
