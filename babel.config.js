module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@views': './src/views/index',
          '@components': './src/components/index',
          '@options': './src/utils/options.ts',
        },
      },
    ],
  ],
};
