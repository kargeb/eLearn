import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';

const Question = () => (
  <div>
    <Link to="/">
      <Logo />
    </Link>
    <h3>No no coś tam z JS pytanie jakieś</h3>
    <code>Odpowiedź cos cos jakas cos dana nadana</code>
    <hr />
  </div>
);

export default Question;
