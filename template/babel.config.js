module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // 暂时不推荐按需加载小暑
    // [
    //   'import',
    //   {
    //     libraryName: '@fruits-chain/react-native-xiaoshu',
    //     libraryDirectory: 'src',
    //   },
    //   '@fruits-chain/react-native-xiaoshu',
    // ],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
