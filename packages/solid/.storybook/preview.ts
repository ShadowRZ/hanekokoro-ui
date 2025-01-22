import type { Preview, SolidRenderer } from 'storybook-solidjs';
import { withThemeByClassName } from '@storybook/addon-themes';
import '@fontsource-variable/inter';
import '@fontsource-variable/outfit';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Overview', 'Palettes', 'Typography', 'Iconography', 'Components', '*'],
      },
    },
  },
  globalTypes: {
    font: {
      description: 'Global fonts',
      toolbar: {
        title: 'Font',
        icon: 'document',
        items: ['Inter', 'Outfit'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    font: 'Inter',
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName<SolidRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (storyFn, context) => {
      const font = (context.globals.font as 'Inter' | 'Outfit' | undefined) || 'Inter';
      const parentElement = document.querySelector('html');

      if (!parentElement) {
        return;
      }

      switch (font) {
        case 'Inter': {
          parentElement.style.setProperty('--global-font-body', '"Inter Variable", Inter, sans-serif');
          break;
        }
        case 'Outfit': {
          parentElement.style.setProperty('--global-font-body', '"Outfit Variable", Outfit, sans-serif');
          break;
        }
      }

      return storyFn();
    },
  ],
};

export default preview;
