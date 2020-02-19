import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Question from '../question/Question';
import MainPage from '../mainPage/MainPage';
import GlobalStyle from '../../theme/GlobalStyles';

const Root = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/questions" component={Question} />
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>
);

export default Root;
