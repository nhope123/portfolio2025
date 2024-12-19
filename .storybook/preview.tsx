import { type Preview } from '@storybook/react';
import React from 'react';

import Decorator from './Decorator.tsx';

const preview: Preview = {
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: React.FC, context: any) => (
      <Decorator context={context}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Decorator>
    ),
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'fr', title: 'French' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
