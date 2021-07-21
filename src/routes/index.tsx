import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Details from '../pages/Details';
import Stories from '../pages/Stories';
import Comics from '../pages/Comics';
import Series from '../pages/Series';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/details/:id/series" component={Series} />
    <Route path="/details/:id/comics" component={Comics} />
    <Route path="/details/:id/stories" component={Stories} />
    <Route path="/details/:id" component={Details} />
    <Route path="/" component={Characters} />
  </Switch>
);

export default Routes;
