import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search, { ISearch } from './Search';
import { mockSearchProps } from './Search.mocks';

export default {
  title: 'Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
  return <Search {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  ...mockSearchProps.search,
} as ISearch;
