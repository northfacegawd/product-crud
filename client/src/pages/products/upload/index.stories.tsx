import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductUploadPage from '.';

export default {
  title: 'Page/Product Upload Page',
  component: ProductUploadPage,
} as ComponentMeta<typeof ProductUploadPage>;

const Template: ComponentStory<typeof ProductUploadPage> = () => (
  <ProductUploadPage />
);

export const Primary = Template.bind({});
