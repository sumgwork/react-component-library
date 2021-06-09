import React, { useContext } from 'react';
import { StyledLabel } from './Field.styles';
import { FieldContext } from './FieldContext';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <StyledLabel ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
