# 👾 React Native Lidong Template

> 「立冬」React Native 初始化项目模板

[lidong-npm-url]: https://www.npmjs.com/package/@fruits-chain/react-native-lidong-template

[![](https://img.shields.io/npm/v/@fruits-chain/react-native-lidong-template.svg)][lidong-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/react-native-lidong-template.svg)][lidong-npm-url]

## ⭐ 特点

- 可以使用 [React Native CLI](https://github.com/react-native-community/cli) 直接创建
- 集成 ESLint、Prettier、启动页 [react-native-bootsplash](https://www.npmjs.com/package/react-native-bootsplash)、多环境变量 [react-native-config](https://www.npmjs.com/package/react-native-config)
- 预置应用升级 [rn-update-version](https://www.npmjs.com/package/rn-update-version)
- 预置白屏错误拦截 [react-native-exception-handler](https://www.npmjs.com/package/react-native-exception-handler)，可上报错误
- 预置小暑 UI 组件库 [@fruits-chain/react-native-xiaoshu
](https://www.npmjs.com/package/@fruits-chain/react-native-xiaoshu)

## ▶️ 使用方式

### 初始化项目

```bash
npx react-native init MyApp --template @fruits-chain/react-native-lidong-template
```

```bash
## 创建项目后手动 yarn 一下，创建 husky 的 hook
cd MyApp && yarn
```

### 更新应用名称

- 修改 `app.json` 内 `displayName` 字段
- 修改 `android/app/build.gradle` 内 `productFlavors` 相关 `resValue "string", "app_name"` 对应字符串
- 修改 `ios/MyApp/Info.plist` 内 `$(BUNDLE_DISPLAY_NAME_PREFIX)` 字符串后面的字符串

### 更新使用图标

使用 https://icon.wuruihong.com/ 生成 Android、iOS 各种尺寸的图标。

### 更新启动页

- 替换 `assets/bootsplash_logo_original.png` 图片，建议使用 `--logo-width` 的 4 倍图
- 根据自定义需求修改 `bootsplash:gen` 命令的参数
- 运行 `yarn bootsplash:gen`，assets 文件夹内新增的图片可以删除

原生端代码、改动已准备，不同项目只需要替换图片就好。

更多启动页说明请参考[文档](https://github.com/zoontek/react-native-bootsplash)

## 📱 多环境

- .env.dev 开发
- .env.test 测试
- .env.demo 预发布/演示
- .env.production 正式

### 使用

```ts
import RNConfig from 'react-native-config'

console.log(RNConfig.HOST)
```

`typescript` 变量字段提示在 `src/typings/react-native-config.d.ts` 文件内维护。
### 切换不同环境

- Android 端采用设置环境变量的方式，例如 `cross-env ENVFILE=.test.dev react-native xxx xxx`
- iOS 在 `Xcode` 内切换 `scheme`

### 打包

修改 `package.json` 的 `version`、`versionCode`，运行 `./version-ios.sh` 脚本。

`Android` 构建的时候会读取 `package.json`，`iOS` 需要手动修改 `Info.plist` 文件配置。

#### Android

构建正式安装包参考 `package.json` 中 `android:**` 相关命令，同时为了在一个机器上共存多个环境的应用，又采用了多渠道打包。

多渠道配置参考 `android/app/build.gradle` 文件，关键词 `productFlavors`。

#### iOS

构建正式安装包使用 `Xcode`，选择对应的 `scheme` 构建，配置参考 `ios/MyApp.xcodeproj/xcshareddata/xcschemes`。

更多多环境说明请参考[文档](https://github.com/luggit/react-native-config)

## 📡 GraphQL

如果 vscode 安装了 `Apollo GraphQL` 插件，更新 `apollo.config.js` 文件的接口地址。

### graphql codegen

采用 `@fruits-chain/graphql-codegen-preset` 统一配置生成规则，如果有冲突自定义配置。

指定接口，修改 `gen`、`gen:w` 对应 IP、端口。

### 文档/Mock

修改 `qiufen.config.js` 文件内接口地址，运行 `yarn mock` 命令启动文档/Mock.

更多说明请参考[文档](https://github.com/hjfruit/qiufen)

## 🔄 应用升级提醒

具体实现在 `src/components/update-version` 文件夹内，需要自己实现查询接口，模板代码仅做参考。

该实现只是在启动应用的时候才做检测，为了实现运行中也提示升级，业务接口也要对比、拦截提示，模板代码中 `src/graphql/client.ts` 关键词 `需要更新应用` 可以作为参考。

## 🤝 其他

如果遇见 Android 底部虚拟按键有问题看不见，可以看看 [Android Theme.AppCompat 中，你应该熟悉的颜色属性](https://juejin.cn/post/6844903475000639501)，修改 `android/app/src/main/res/values/styles.xml` 内 `android:navigationBarColor`，或直接注释。同理，导航栏状态有问题修改 `android:statusBarColor`。
