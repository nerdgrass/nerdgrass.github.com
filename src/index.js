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

const Background = (props) => {
  const style = {
    bg: {
      minHeight: '100%',
      minWidth: '100%',
      width: '100%',
      height: 'auto',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    children: {
      position: 'relative',
      zIndex:'5'
    }
  };
  /* blerg this murders performance
  <div className="twinkling" />
  <div className="clouds"/>
  */
  return (
    <div>
      <div style={style.bg}>
        <div className="stars" />

      </div>
      <div className="" style={style.children}>
        {props.children}
      </div>
    </div>
  );
};

// Dummy Page Components - Remove before publishing
const DummyPage = ({ msg }) => <h1>{msg}</h1>;
const DummyAbout = (props) => <DummyPage msg="About" />;
const DummyWork = (props) => <DummyPage msg="Work" />;
const DummyContact = (props) => <DummyPage msg="Contact" />;

const routes = (
  <Route path="/" mapMenuTitle="Home" component={Background}>
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
