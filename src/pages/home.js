// Dependencies
import React, { PropTypes } from 'react';

// Components
const Nav = (props) => {
  const navStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const navLinkStyle = {
    color: '#F3FFCA',
    padding: '0 .5em'
  };
  return (
    <ul style={navStyle}>
      <li><a style={navLinkStyle}>About</a></li>
      <li><a style={navLinkStyle}>Work</a></li>
      <li><a style={navLinkStyle}>Contact</a></li>
    </ul>
  );
};

// Components
const Splash = (props) => {
  const style = {
    splash: {
      background: 'none',
      minHeight: '90vh',
    },
    img: {
      display: 'block',
      margin: '0 auto',
      paddingTop: '10vh',
    }
  };
  return (
    <div style={style.splash} className="splash">
      <img style={style.img} src="./assets/img/arb-logo-splash.png" />
      <Nav />
    </div>
  );
};
const WorkTeaser = (props) => {
  const style = {
    container: {
      background: '#643C5A',
      minHeight: '90vh',

    }
  };
  return (
    <div style={style.container}>
      <h1>workLinks go here</h1>
    </div>
  );
};

// Page
const Home = (props) => {
  return (
    <div>

      <Splash />

      <WorkTeaser />

      <div className="whoIAm">
        <h1>who I am goes here </h1>
      </div>

      <div className="footer">
        <h1>Footer goes here</h1>
      </div>

    </div>
  );
};

Home.PropTypes = {

};

export default Home;