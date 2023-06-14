import { themes } from '@storybook/theming';
import '../src/styles/global.css';

export const parameters = {
  nextjs: { appDirectory: true },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  parameters: {
    docs: {
      theme: themes.light,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center self-center">
        <Story />
      </div>
    ),
  ],
};
