## :space_invader: React Native Template TypeScript

[English](./README.md) | 简体中文

## :arrow_forward: 用法
```sh
npx react-native init ProjectName --template tsrntemp
```

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.72         | 1.2.\*   |
| 0.71         | 1.1.\*   |
| 0.67         | 1.0.\*   |

`本项目默认为TS搭建，集成路由，缓存，请求工具、icon工具`

- 文件目录
 - src
  - src/assets`静态资源文件夹`
  - src/components`公用组件文件夹`
  - src/config`配置文件夹`
  - src/iconfont`图标字体文件夹`
  - src/pages`所有页面文件夹`
  - src/route`路由页面文件夹`
  - src/types`类型申明文件夹`
  - src/utils`工具类文件夹`
  - src/requestUtils`请求工具基类，支持泛型`

### react-navigation
- [具体使用参照](https://reactnavigation.org/docs/getting-started)

##### icont使用
- icon的配置文件是`根目录下的 iconfont.json`
- [具体使用参照](https://www.npmjs.com/package/react-native-iconfont-cli)


##### requset
- 使用的请求库为umi-reuest
- [具体使用参照](https://www.npmjs.com/package/umi-request)

##### 缓存
- 使用的缓存为`react-native-mmkv`，直接返回数据，而不是`async-storage`库，返回的promise
- [具体使用参照](https://github.com/mrousavy/react-native-mmkv/blob/master/README.md)


##### 适配
- 使用的react-native-size-matters
- [具体使用参照](https://www.npmjs.com/package/react-native-size-matters)

