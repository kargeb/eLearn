import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuButton from './MenuButton';
import Button from './Button';
import Icon from '../icons/Icon';
import plusIcon from '../../../assets/images/PlusIcon.svg';

export default {
  title: 'Atoms',
  component: MenuButton
};

export const Buttons = () => (
  <>
    <MenuButton onClick={action('clicked')}>Hello Button</MenuButton>
    <br />
    <br />
    <Button>
      Dodaj nowe <Icon icon={plusIcon} />{' '}
    </Button>
    <br />
    <Button>
      Dodaj nowe <Icon horizontalGap icon={plusIcon} />{' '}
    </Button>
  </>
);
