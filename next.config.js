// eslint-disable-next-line @typescript-eslint/no-var-requires
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'ocean_main',
        remotes: {
          //NOTE - Add the remote projects here
          ocean_home: `ocean_home@${
            process.env.NEXT_PUBLIC_OCEAN_HOME_URL
          }/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          //NOTE - Expose the components here
          // './store/useTokenStore': './src/store/useTokenStore.ts',
        },
        shared: {
          //NOTE - Add the shared dependencies here
          //LINK - https://webpack.js.org/plugins/module-federation-plugin/#sharing-hints
          // recharts: {
          //   eager: true,
          //   requiredVersion: false,
          //   singleton: true,
          // },
        },
      }),
    );

    return config;
  },
};
