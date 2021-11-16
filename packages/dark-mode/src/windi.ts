import plugin from 'windicss/plugin';

export default plugin(({ addVariant, config }) => {
  const darkMode = config('darkMode');
  if (!darkMode) {
    addVariant('dark', ({ modifySelectors }) =>
      modifySelectors(({ className }) => `body[arco-theme=dark] .${className}`),
    );
  }
});
