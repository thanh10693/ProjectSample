module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'assets/*': 'src/assets/*',
          'core/*': 'src/core/*',
          'components/*': 'src/components/*',
          'navigation/*': 'src/navigation/*',
          'redux/*': 'src/redux/*',
          'screens/*': 'src/screens/*',
          'util/*': 'src/util/*',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
