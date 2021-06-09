import React from 'react';

// forwardRef lets forwarding ref to native elements
// ComponentPropsWithoutRef lets prop spreading, to support native props
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => (
  <button ref={ref} type="button" {...props}>
    {children}
  </button>
));

Button.displayName = 'Button';
