import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledTextArea } from './Field.styles';
import { FieldContext } from './FieldContext';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext);
    return (
      <StyledTextArea ref={ref} id={id} isResizable={isResizable} {...props} />
    );
  }
);

Textarea.displayName = 'Field.Textarea';

Textarea.defaultProps = {
  isResizable: true,
};

Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
