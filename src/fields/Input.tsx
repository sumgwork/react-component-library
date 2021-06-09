import React, { useContext } from 'react';
import { StyledInput } from './Field.styles';
import { FieldContext } from './FieldContext';

export const Input: React.FC = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <StyledInput ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';
