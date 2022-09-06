import { ComponentMeta, ComponentStory } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
} as ComponentMeta<typeof CatCard>;

const Template: ComponentStory<typeof CatCard> = (args) => {
  return <CatCard {...args} />;
};

export const Card = Template.bind({});

Card.args = {
  ...mockCatCardProps.card,
} as ICatCard;
