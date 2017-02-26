// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Pages
import App from './components/App';
import Home from './pages/home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';

// Dummy Page Components - Remove before publishing
const DummyPage = ({ msg }) => <h1>{msg}</h1>;
const DummyAbout = (props) => <DummyPage msg="About" />;
const DummyWork = (props) => <DummyPage msg="Work" />;
const DummyContact = (props) => <DummyPage msg="Contact" />;

const routes = (
  <Route path="/" mapMenuTitle="Home">
    <IndexRoute component={Home} />
    <Route path="about" mapMenuTitle="About Me" component={DummyAbout} />
    <Route path="work" mapMenuTitle="Work" component={DummyWork} />
    <Route path="contact" mapMenuTitle="Contact" component={DummyContact} />
    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
