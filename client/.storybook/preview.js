import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { withRouter } from 'storybook-addon-react-router-v6';

import GlobalStyle from '../src/globalStyles';
import '../src/index.css';

const queryClient = new QueryClient();

axios.defaults.baseURL = 'http://localhost:8080';

export const decorators = [
  withRouter,
  (Story) => {
    return (
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Story />
      </QueryClientProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
