import React from 'react';
import { useUniqueId } from '../utils/useUniqueId';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
