import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuButton from './MenuButton';

export default {
  title: 'Atoms',
  component: MenuButton
};

export const hello = () => (
  <MenuButton onClick={action('clicked')}>Hello Button</MenuButton>
);
