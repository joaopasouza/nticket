import { classed } from 'classed-components';
import { InputProps } from './index';

export const Container = classed.div<InputProps>(({ error }) => [
  'form-group',
  { 'has-error': error },
]);

export const LabelField = classed.label(['control-label']);

export const InputField = classed.input(['form-control']);

export const Message = classed.span(['help-block']);
