module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
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
  ],
};
