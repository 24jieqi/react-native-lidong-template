# 👾 React Native Lidong Template

> 「立冬」React Native 初始化项目模板

[lidong-npm-url]: https://www.npmjs.com/package/@fruits-chain/react-native-lidong-template

[![](https://img.shields.io/npm/v/@fruits-chain/react-native-lidong-template.svg)][lidong-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/react-native-lidong-template.svg)][lidong-npm-url]

## ⭐ 特点

- 可以使用 [React Native CLI](https://github.com/react-native-community/cli) 直接创建
- 集成最基础的配置、插件
## ▶️ 使用方式

### 初始化项目

```bash
npx react-native init MyApp --template @fruits-chain/react-native-lidong-template
```

### 更新应用名称

- 修改 `app.json` 内 `displayName` 字段
- 修改 `android/app/build.gradle` 内 `productFlavors` 相关 `resValue "string", "app_name"` 对应字符串
- 修改 `ios/MyApp/Info.plist` 内 `$(BUNDLE_DISPLAY_NAME_PREFIX)` 字符串后面的字符串

### 更新启动页

- 替换 `assets/bootsplash_logo_original.png` 图片
- 根据自定义需求修改 `bootsplash:gen` 命令的参数
- 运行 `yarn bootsplash:gen`

### 更新接口地址

- 修改 `gen`、`gen:w`、`apollo.config.js` 对应的接口地址
- 修改 `.env.*` 配置文件
