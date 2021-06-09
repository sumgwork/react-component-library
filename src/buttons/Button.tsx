import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

// forwardRef lets forwarding ref to native elements
// ComponentPropsWithoutRef lets prop spreading, to support native props
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <StyledButton ref={ref} type="button" {...props}>
      {children}
    </StyledButton>
  )
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};

// propTypes are needed since this library could be consumed by JS applications (non-TS)
Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
};

Button.displayName = 'Button';
