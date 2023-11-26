module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@views': './src/views/index',
          '@components': './src/components/index',
          '@layout': './src/layout/index',
          '@options': './src/utils/options.ts',
          '@store': './src/store',
        },
      },
    ],
  ],
};
