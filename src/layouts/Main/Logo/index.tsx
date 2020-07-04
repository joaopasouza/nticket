import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  subtitle: string;
}

const Logo: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Link to="/" className="logo">
      <span className="logo-mini">
        <b>{title.slice(0, 1)}</b>
        {subtitle.slice(0, 2)}
      </span>

      <span className="logo-lg">
        <b>{title}</b>
        {subtitle.slice(0, 3)}
      </span>
    </Link>
  );
};

export default Logo;
