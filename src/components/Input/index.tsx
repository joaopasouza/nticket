import React from 'react';

import { Container, LabelField, InputField, Message } from './styles';

export interface InputProps {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

type Props = InputProps & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ label, error, errorMessage, ...props }) => {
  return (
    <Container error={error}>
      {label && <LabelField>{label}</LabelField>}

      <InputField {...props} />

      {error && <Message>{errorMessage}</Message>}
    </Container>
  );
};

export default Input;
