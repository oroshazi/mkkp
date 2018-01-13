import React from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from '../containers/App';
import PartyProgram from '../containers/PartyProgram';
import News from '../containers/News'




export default class NavBar extends React.Component {

// navigaion bar
  render() {
    return (<div>
        <style>
          {
            `.nav-item {

                color: #f3f3f3;
                padding-left: 10px;
                text-decoration: none;
                background-color: transparent;
                -webkit-text-decoration-skip: objects;
              }
              .nav-item:hover {

              }
              .nav-link{
                display: block;
                color: #f3f3f3;
                text-decoration: none;
              }
              .nav-link:hover{
                display: block;
                color: #f3f3f3;
                text-decoration: none;
                background-color: rgba(32, 29, 30, 0.82);
              }`
          }
        </style>
        <Navbar color="faded" light expand="md" >
          <Nav  >
            <NavItem className = "nav-item" >
              <Link className = "nav-link" to="/">Főoldal</Link>
            </NavItem>
            <NavItem className = "nav-item" >
              <Link className = "nav-link"to="/candidates">Jelőltek</Link>
            </NavItem>
            <NavItem className = "nav-item" >
              <Link className = "nav-link" to="/news">Hírek</Link>
            </NavItem>
            <NavItem className = "nav-item" >
              <Link className = "nav-link"to="/partyprogram"> Párt program</Link>
            </NavItem>
          </Nav>
        </Navbar>

      </div>);
  }
}
