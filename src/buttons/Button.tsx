import React from 'react';
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
    <StyledButton
      ref={ref}
      type="button"
      //   variant={variant}
      //   size={size}
      //   isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  )
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};

Button.displayName = 'Button';
