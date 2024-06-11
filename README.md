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

## ▶️ 使用说明

### 初始化

```bash
npx react-native init MyApp --template @fruits-chain/react-native-lidong-template
```

```bash
## 创建项目后手动 yarn 一下，创建 husky 的 hook
cd MyApp && yarn
```

### 💻 应用名称

- 修改 `app.json` 内 `displayName` 字段
- 修改 `android/app/build.gradle` 内 `productFlavors` 相关 `resValue "string", "app_name"` 对应字符串
- 修改 `ios/MyApp/Info.plist` 内 `$(APP_DISPLAY_NAME)` 字符串后面的字符串

### 🫶 应用图标

使用 https://icon.wuruihong.com/ 生成 Android、iOS 各种尺寸的图标。

> iOS 推荐使用正方形无圆角的图标，该工具生成 iOS 图标使用白色底，在退出应用缩小图标会出现一些奇怪的白色底色变化。

### 🚀 启动页

- 替换 `assets/bootsplash_logo_original.png` 图片，建议使用 `--logo-width` 的 4 倍图
- 根据自定义需求修改 `bootsplash:gen` 命令的参数
- 运行 `yarn bootsplash:gen`，assets 文件夹内新增的图片可以删除

在路由初始化好的时候关闭启动页，代码见 `src/router/index.tsx#L25`。

更多启动页说明请参考 [react-native-bootsplash 文档](https://github.com/zoontek/react-native-bootsplash)

## 📱 多环境、环境变量

- .env.dev 开发
- .env.qa 测试
- .env.demo 预发布/演示
- .env.prod 正式

### 使用

```ts
import RNConfig from 'react-native-config'

console.log(RNConfig.HOST)
```

`typescript` 变量字段提示在 `src/typings/react-native-config.d.ts` 文件内维护。

### 切换环境

- Android 项目在 `android/app/build.gradle#L2` 配置了不同渠道对应的环境变量，运行 `react-native run-android --mode 'devDebug' --appIdSuffix 'dev'`
- iOS 项目在 `Xcode` 内切换 `scheme`，例如 `react-native run-ios --scheme 'MyAppTest'`

更多多环境说明请参考 [react-native-config 文档](https://github.com/luggit/react-native-config)

## 🔄 应用升级提醒

具体实现在 `src/components/update-version` 文件夹内，需要自己实现查询接口，模板代码仅做参考。

## 更新版本号、构建号

修改 `package.json` 的 `version`、`versionCode`，运行 `./update-version.sh` 脚本。

`android/app/build.gradle`、`ios/MyApp/Info.plist` 文件对应的版本号、构建号同步更新。

> 注意：`build.gradle` 文件换行符需要使用 `LF`。

## Android 打包

构建正式安装包参考 `package.json` 中 `android:**` 相关命令，同时为了在一个机器上共存多个环境的应用，又采用了多渠道打包。

多渠道配置参考 `android/app/build.gradle` 文件，关键词 `productFlavors`。

## iOS 打包

构建正式安装包使用 `Xcode`，选择对应的 `scheme` 构建，配置参考 `ios/MyApp.xcodeproj/xcshareddata/xcschemes`。

## 🤝 其他

如果遇见 Android 底部虚拟按键有问题看不见，可以看看 [Android Theme.AppCompat 中，你应该熟悉的颜色属性](https://juejin.cn/post/6844903475000639501)，修改 `android/app/src/main/res/values/styles.xml` 内 `android:navigationBarColor`，或直接注释。同理，导航栏状态有问题修改 `android:statusBarColor`。
