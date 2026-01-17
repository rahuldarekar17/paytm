import type { Preview } from '@storybook/react-vite';
import { themeResolvers } from '../tokens/theme';
import { numberSemantics } from '../tokens/numberTokens';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: themeResolvers.surface('level1', 'light'),
        },
        {
          name: 'dark',
          value: themeResolvers.surface('level1', 'dark'),
        },
      ],
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;