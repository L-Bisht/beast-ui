import type { Preview } from "@storybook/react";
import React, { useEffect } from 'react';
import "@beast-ui/system/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--beast-color-background, #ffffff)' },
        { name: 'dark', value: 'var(--beast-color-background, #121212)' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.backgrounds?.value === 'var(--beast-color-background, #121212)' ? 'dark' : 'light';
      
      useEffect(() => {
        if (theme === 'dark') {
          document.body.classList.add('beast-dark');
          document.body.style.backgroundColor = 'var(--beast-color-background)';
        } else {
          document.body.classList.remove('beast-dark');
          document.body.style.backgroundColor = 'var(--beast-color-background)';
        }
      }, [theme]);

      return <Story />;
    },
  ],
};

export default preview;
