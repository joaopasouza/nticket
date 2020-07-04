import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import Logo from './Logo';
import Navbar from './Navbar';

const Main: React.FC = ({ children }) => {
  let location = useLocation();

  return (
    <Fragment>
      <Header>
        <Logo title="Admin" subtitle="LTE" />

        <Navbar />
      </Header>

      <Sidebar>
        <li className="header">MAIN NAVIGATION</li>

        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            <i className="fa fa-home"></i>
            <span>Home</span>
          </Link>
        </li>

        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">
            <i className="fa fa-cog"></i>
            <span>About</span>
          </Link>
        </li>
      </Sidebar>

      <Content>{children}</Content>

      <Footer />
    </Fragment>
  );
};

export default Main;
