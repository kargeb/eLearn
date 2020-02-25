import React from 'react';
import Logo from './Logo';

export default {
  title: 'Atoms',
  component: Logo
};

export const logo = () => (
  <>
    <Logo />
    <Logo small />
  </>
);
export const logoSmall = () => <Logo small />;
