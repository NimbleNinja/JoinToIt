module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          app: './src/app',
          pages: './src/pages',
          features: './src/features',
          shared: './src/shared',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
