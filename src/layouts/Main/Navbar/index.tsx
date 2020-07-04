import React, { useState } from 'react';

const Navbar: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    if (collapsed) {
      document.body.classList.remove('sidebar-collapse');
      document.body.classList.remove('sidebar-open');
      setCollapsed(false);
    } else {
      document.body.classList.add('sidebar-collapse');
      document.body.classList.add('sidebar-open');
      setCollapsed(true);
    }
  };

  return (
    <nav className="navbar navbar-static-top">
      <button type="button" className="sidebar-toggle" onClick={toggle}>
        <span className="sr-only">Toggle Navigation</span>
      </button>

      <div className="navbar-custom-menu">{children}</div>
    </nav>
  );
};

export default Navbar;
