import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuButton from './MenuButton';
import AddQuestionButton from './AddQuestionButton';

export default {
  title: 'Atoms',
  component: MenuButton
};

export const Buttons = () => (
  <>
    <MenuButton onClick={action('clicked')}>Hello Button</MenuButton>
    <br />
    <br />
    <AddQuestionButton>Dodaj nowe</AddQuestionButton>
  </>
);
