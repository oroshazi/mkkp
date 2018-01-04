import React from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from '../containers/App';
import PartyProgram from '../containers/PartyProgram';
import News from '../containers/News'

export default class NavBar extends React.Component {

// Oldalsó menüsor

  render() {



    console.log(this.props.children);

    return (



      <div style={{marginTop: '50%'}}>
        <Navbar color="faded" dark >
          <Nav  >
            <NavItem>
              <Link to="/">Főoldal</Link>
            </NavItem>
            <NavItem>
              <Link to="/candidates">Jelőltek</Link>
            </NavItem>
            <NavItem>
              <Link to="/news">Hírek</Link>
            </NavItem>
            <NavItem>
              <Link to="/partyprogram"> Párt program</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
