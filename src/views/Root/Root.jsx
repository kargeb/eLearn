import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuView from '../MenuView/MenuView';
import GlobalStyle from '../../theme/GlobalStyles';
import QuestionsView from '../QuestionsView/QuestionsView';

const Root = () => (
  <Router>
    <GlobalStyle />
    <Switch>
      <Route path="/questions" component={QuestionsView} />
      <Route exact path="/" component={MenuView} />
    </Switch>
  </Router>
);

export default Root;
