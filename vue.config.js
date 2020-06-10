// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'zh',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
};
