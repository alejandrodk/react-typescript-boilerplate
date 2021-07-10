const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      '@assets/*': path.resolve(__dirname, 'src/assets/*'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@controllers': path.resolve(__dirname, 'src/lib/controllers'),
      '@enums': path.resolve(__dirname, 'src/lib/enums'),
      '@helpers': path.resolve(__dirname, 'src/lib/helpers'),
      '@interfaces': path.resolve(__dirname, 'src/lib/interfaces'),
      '@styles': path.resolve(__dirname, 'src/lib/styles'),
      '@routers': path.resolve(__dirname, 'src/routers'),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  };

  return config;
};
