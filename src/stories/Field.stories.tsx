import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => {
  return (
    <Field>
      <Field.Label>Hello</Field.Label>
      <Field.Input {...args} />
    </Field>
  );
};

export const Default = Template.bind({});

Default.args = {
  placeholder: '',
  disabled: false,
};
