import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductUploadPage from '.';

export default {
  title: 'Page/Product Upload Page',
  component: ProductUploadPage,
  decorators: [
    withRouter,
    (Story) => {
      return (
        <QueryClientProvider client={new QueryClient()}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} as ComponentMeta<typeof ProductUploadPage>;

const Template: ComponentStory<typeof ProductUploadPage> = () => (
  <ProductUploadPage />
);

export const Primary = Template.bind({});
