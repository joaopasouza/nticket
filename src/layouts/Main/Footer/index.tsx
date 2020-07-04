import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b> 1.0.0
      </div>
      <strong>
        Copyright &copy; 2020.{' '}
        <a
          href="https://github.com/joaopasouza"
          target="_blank"
          rel="noopener noreferrer"
        >
          @joaopasouza
        </a>
        .
      </strong>{' '}
      All rights reserved.
    </footer>
  );
};

export default Footer;
