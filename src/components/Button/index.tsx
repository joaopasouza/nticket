import React from 'react';

import { Container } from './styles';

export interface ButtonProps {
  variant:
    | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'danger'
    | 'warning'
    | 'olive'
    | 'purple'
    | 'navy'
    | 'orange'
    | 'maroon';
  block?: boolean;
  size?: 'lg' | 'sm' | 'xs';
  flat?: boolean;
}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
