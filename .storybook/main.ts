import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../stories',
      titlePrefix: 'Components',
    },
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],

  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },

  docs: {},
};

export default config;
