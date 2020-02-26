import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuButton from './MenuButton';
import AddButton from './AddButton';

export default {
  title: 'Atoms',
  component: MenuButton
};

export const Buttons = () => (
  <>
    <MenuButton onClick={action('clicked')}>Hello Button</MenuButton>
    <br />
    <br />
    <AddButton>Dodaj nowe</AddButton>
  </>
);
