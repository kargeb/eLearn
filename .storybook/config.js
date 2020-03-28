import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/theme/GlobalStyles';

addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
));
