import { addons } from '@storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

addons.setConfig({
  tagBadges: [
    {
      tags: 'snippet',
      badge: {
        text: 'Snippet',
        bgColor: '#ecfdf5',
        fgColor: '#065f46',
        borderColor: '#10b981',
        tooltip: 'This component is primarily provided with a code snippet, not from an export.',
      },
      display: {
        sidebar: ['component'],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
