import { ComponentMeta, ComponentStory } from '@storybook/react';

import Loader from './Loader';

export default {
  title: 'Loader',

  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = function LoaderTemplate(args) {
  const { isLoading, color, content } = args;
  const styleObject = {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={styleObject}>
      <Loader isLoading={isLoading} color={color} content={content} />
    </div>
  );
};

export const LoaderComponent = Template.bind({});

LoaderComponent.args = {
  isLoading: true,
  color: 'black',
  content: 'Loading..',
};
