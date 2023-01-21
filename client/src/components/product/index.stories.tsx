import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductItem from '.';

export default {
  title: 'Product/ProductItem',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  id: 123,
  amount: '14900',
  brand: { id: '123', name: 'GUCCI', slug: 'gucci' },
  category: { id: '123123', name: 'ring', slug: '반지' },
  name: '14K 로즈골드 미니 볼 위아몬즈 목걸이',
  options: [],
  thumbnail:
    'https://cdn.amondz.com/product/34415/resize/mainImg/PSI_689100_50.jpeg?v=1654675772133',
};
