import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  ...mockButtonProps.primary,
} as IButton;
Secondary.args = {
  ...mockButtonProps.secondary,
} as IButton;
Success.args = {
  ...mockButtonProps.success,
} as IButton;
Danger.args = {
  ...mockButtonProps.danger,
} as IButton;
