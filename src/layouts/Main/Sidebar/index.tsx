import React from 'react';

const Sidebar: React.FC = ({ children }) => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu">{children}</ul>
      </section>
    </aside>
  );
};

export default Sidebar;
