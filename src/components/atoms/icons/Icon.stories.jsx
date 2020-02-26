import React from 'react';
import Icon from './Icon';
import plusIcon from '../../../assets/images/PlusIcon.svg';
import logoIcon from '../../../assets/images/LogoIcon.svg';

export default {
  title: 'atoms'
};

export const PlusIcon = () => <Icon icon={plusIcon} />;
export const LogoIcon = () => <Icon icon={logoIcon} />;
