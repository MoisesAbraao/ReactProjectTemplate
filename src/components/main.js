import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
    </Switch>
);

export default Main;