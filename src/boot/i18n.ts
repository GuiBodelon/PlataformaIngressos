import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

const i18n = createI18n({
  locale: 'pt-BR',
  globalInjection: true,
  messages,
});

export default boot(({ app }) => {
  app.config.globalProperties.$t = i18n;

  app.use(i18n);
});

export { i18n };
