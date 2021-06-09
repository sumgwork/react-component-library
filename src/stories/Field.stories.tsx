import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label },
} as Meta;

export const Default: Story = (args) => {
  return (
    <Field>
      <Field.Label>Hello</Field.Label>
      <Field.Input {...args} />
    </Field>
  );
};

Default.args = {
  placeholder: '',
  disabled: false,
};
