// Dependencies
import React, { PropTypes } from 'react';

// Components
const Nav = (props) => {
  const navStyle = {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2em'
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
  const TeaserItem = ({ imgSrc, msg }) => {
    const style = {
      container: {
        padding: '1em',
      },
      img: {
        padding: '1em'
      },
      msg: {
        textAlign: 'center',
        color: 'white'
      }
    }
    return (
      <div style={style.container}>
        <img style={style.img} src={imgSrc} />
        <p style={style.msg}>{msg}</p>
      </div>
    );
  };

  const style = {
    container: {
      background: '#643C5A',
      minHeight: '90vh',
      padding: '1em 10vw'
    },
    teaserList: {
      maxWidth: '85vw',
      display: 'flex',
      justifyContent: 'center'
    }
  };
  return (
    <div style={style.container}>
      <div style={style.header}>
        <h2>My Work</h2>
      </div>
      <div style={style.teaserList}>
        <TeaserItem 
          imgSrc="http://placehold.it/300x150"
          msg="Full-stack React & GraphQL" />
        <TeaserItem 
          imgSrc="http://placehold.it/300x150"
          msg="Building PDFs in React" />
        <TeaserItem 
          imgSrc="http://placehold.it/300x150"
          msg="Data Viz in Angular" />
      </div>
      <div>
        <button>See all work</button>
      </div>
    </div>
  );
};

const WhoAmI = (props) => {
  const style = {
    bg: { background: '#262440' },
    container: {
      minHeight: '90vh',
      display: 'flex',
      maxWidth: '85vw',
      margin: '0 auto',
    },
    bio: {
      photo: { 
        padding: '2em',
        flex: '3',
      },
      info: { 
        padding: '2em',
        flex: '5',
        color: 'white'
      },
    }
  };
  return (
    <div style={style.bg}>
      <div style={style.container}>
        <div style={style.bio.photo}>
          <img src="http://placehold.it/250x250" />
        </div>
        <div style={style.bio.info}>
          <p>
            Perferendis id natus tempora molestiae deleniti. Est facere neque nulla sed. Voluptates et eos aut quod voluptates earum. Quae ut voluptas sequi ex. Eveniet quod sit rerum exercitationem sed qui mollitia ipsum.
          </p>
          <p>
            Aliquid vel inventore quaerat omnis quas quidem rerum. Ut omnis dolores et esse sed itaque occaecati quidem. Alias dolore ut ab voluptate. Laudantium dolorem iure aspernatur non dicta.
          </p>
          <div className="btn-container">
            <button>More about me</button>
            <button>Contact me!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = (props) => {
  const style = {
    container: {
      background: '#49C0AE',
      minHeight: '30vh',
      display: 'flex',
      flexDirection: 'column'
    },
    footer: {
      flex: '1',
    },
    bottomBar: {
      background: '#217681',
      minHeight: '5vh',
    }
  };
  return (
    <div style={style.container}>
      <div style={style.footer}>
        <p>footah goes hurr</p>
      </div>
      <div style={style.bottomBar}>
        <p>lol links I guess?</p>
      </div>
    </div>
  );
};



// Page
const Home = (props) => {
  const style = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    }
  };
  return (
    <div style={style.container}>

      <Splash />

      <WorkTeaser />

      <WhoAmI />

      <Footer />

    </div>
  );
};

Home.PropTypes = {

};

export default Home;