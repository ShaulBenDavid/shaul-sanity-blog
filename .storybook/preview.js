import '../src/styles/global.css';

export const parameters = {
  nextjs: { appDirectory: true },
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
