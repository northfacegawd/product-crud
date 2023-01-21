import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductItemSkeleton from '.';

export default {
  title: 'Product/ProductItemSkeleton',
  component: ProductItemSkeleton,
} as ComponentMeta<typeof ProductItemSkeleton>;

const Template: ComponentStory<typeof ProductItemSkeleton> = () => (
  <ProductItemSkeleton />
);

export const Primary = Template.bind({});

Primary.args = {};
