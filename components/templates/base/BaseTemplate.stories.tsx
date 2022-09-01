import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';
import BaseTemplate, { IBaseTemplate } from './BaseTemplates';

export default {
  title: 'template/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (args) => {
  return <BaseTemplate {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
